import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Cormorant_Garamond, DM_Sans, Hind_Madurai } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const hindMadurai = Hind_Madurai({
  weight: ['400', '600'],
  subsets: ['tamil', 'latin'],
  variable: '--font-hind-madurai',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GreenWay Goods Trading | From Hills to Home',
  description: 'Pure, Natural, Trusted hill produce from Tamil Nadu.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${dmSans.variable} ${hindMadurai.variable}`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-F4EP371QTV" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F4EP371QTV');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
