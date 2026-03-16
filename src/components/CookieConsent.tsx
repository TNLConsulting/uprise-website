'use client'

import { useState, useEffect, useCallback } from 'react'
import Script from 'next/script'

const CONSENT_KEY = 'uprise_cookie_consent'
const CRISP_WEBSITE_ID = 'a008e2fc-b8e4-4578-b3e3-b00cd870af8e'

type ConsentState = 'accepted' | 'rejected' | null

declare global {
  interface Window {
    $crisp: unknown[]
    CRISP_WEBSITE_ID: string
    CRISP_RUNTIME_CONFIG: { locale: string }
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

function loadCrisp() {
  if (typeof window === 'undefined') return
  if ((window as any)._crispLoaded) return
  ;(window as any)._crispLoaded = true
  window.$crisp = []
  window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID
  window.CRISP_RUNTIME_CONFIG = { locale: 'nl' }
  const s = document.createElement('script')
  s.src = 'https://client.crisp.chat/l.js'
  s.async = true
  document.head.appendChild(s)
}

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null)
  const [mounted, setMounted] = useState(false)
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  // Only run client-side — avoids hydration mismatch
  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentState
    setConsent(stored)
  }, [])

  // When consent is accepted, load services
  useEffect(() => {
    if (!mounted) return
    if (consent === 'accepted') {
      loadCrisp()
    }
  }, [consent, mounted])

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setConsent('accepted')
  }, [])

  const handleReject = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setConsent('rejected')
  }, [])

  // Don't render anything until client-side hydration is complete
  if (!mounted) return null

  return (
    <>
      {/* Google Analytics — only loads after consent */}
      {consent === 'accepted' && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {/* Cookie Banner */}
      {consent === null && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Cookie toestemming"
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-4xl rounded-xl border border-[#2a2218] bg-[#111009]/95 backdrop-blur-md shadow-2xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#f0e8d0] mb-1">
                  🍪 Wij gebruiken cookies
                </p>
                <p className="text-xs text-[#8a7a60] leading-relaxed">
                  Uprise gebruikt analytische cookies (Google Analytics) en functionele cookies (Crisp chat) om je ervaring te verbeteren. Je kan dit ten alle tijde weigeren.{' '}
                  <a
                    href="/privacy"
                    className="underline text-[#c08a3a] hover:text-[#d4a55a] transition-colors"
                  >
                    Meer info
                  </a>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col xs:flex-row gap-2 shrink-0">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 text-xs font-medium rounded-lg border border-[#3a3020] text-[#8a7a60] hover:text-[#f0e8d0] hover:border-[#5a4a30] transition-all duration-200 whitespace-nowrap"
                >
                  Enkel noodzakelijk
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#c08a3a] hover:bg-[#d4a55a] text-[#0d0b07] transition-all duration-200 whitespace-nowrap shadow-md"
                >
                  Alles aanvaarden
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
