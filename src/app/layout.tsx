import type { Metadata } from 'next'
import { ClientProviders } from '@/components/ClientProviders'
import { CrispChat } from '@/components/CrispChat'
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
        <CrispChat websiteId="a008e2fc-b8e4-4578-b3e3-b00cd870af8e" />
      </body>
    </html>
  )
}
