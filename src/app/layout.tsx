import type { Metadata } from 'next'
import { ClientProviders } from '@/components/ClientProviders'
import { CookieConsent } from '@/components/CookieConsent'
import './globals.css'

export const metadata: Metadata = {
  title: 'Uprise | Sportmedisch Centrum in Haacht',
  description: 'Uprise in Haacht — kinesitherapie, groepslessen, performance coaching en voedingsbegeleiding. Ontdek ons aanbod.',
  keywords: ['kinesitherapie', 'groepslessen', 'sportmedisch', 'Haacht', 'Uprise', 'performance', 'voeding'],
  openGraph: {
    title: 'Uprise | Sportmedisch Centrum in Haacht',
    description: 'Kinesitherapie, groepslessen, performance en voeding in Haacht.',
    type: 'website',
    locale: 'nl_BE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <ClientProviders>{children}</ClientProviders>
        <CookieConsent />
      </body>
    </html>
  )
}
