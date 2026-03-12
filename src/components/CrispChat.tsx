'use client'
import { useEffect } from 'react'

export function CrispChat({ websiteId }: { websiteId: string }) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    ;(window as any).$crisp = []
    ;(window as any).CRISP_WEBSITE_ID = websiteId
    ;(window as any).CRISP_RUNTIME_CONFIG = { locale: 'nl' }
    const s = document.createElement('script')
    s.src = 'https://client.crisp.chat/l.js'
    s.async = true
    document.head.appendChild(s)
  }, [])
  return null
}
