import type { Metadata } from 'next'
import Script from 'next/script'
import { ClientProviders } from '@/components/ClientProviders'
import './globals.css'

export const metadata: Metadata = {
  title: 'Uprise | Sportmedisch Centrum in Haacht',
  description: 'Uprise in Haacht — sportmedisch centrum met kinesitherapie, groepslessen, performance coaching en voedingsbegeleiding.',
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
        <Script id="crisp-chat" strategy="afterInteractive">{`
          window.$crisp=[];
          window.CRISP_WEBSITE_ID="a008e2fc-b8e4-4578-b3e3-b00cd870af8e";
          window.CRISP_RUNTIME_CONFIG = { locale: "nl" };
          (function(){
            var d=document;
            var s=d.createElement("script");
            s.src="https://client.crisp.chat/l.js";
            s.async=1;
            d.getElementsByTagName("head")[0].appendChild(s);
          })();
        `}</Script>
      </body>
    </html>
  )
}
