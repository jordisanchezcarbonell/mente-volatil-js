import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  title: 'MenteVolátil',
  description:
    'Ideas, análisis y reflexiones sobre inversión, mercados y actualidad macroeconómica.',
  generator: 'Next.js',
  authors: [{ name: 'MenteVolátil' }],
  keywords: [
    'inversión',
    'macroeconomía',
    'mercados financieros',
    'estrategia',
    'análisis',
  ],
  openGraph: {
    title: 'MenteVolátil',
    description:
      'Ideas, análisis y reflexiones sobre inversión, mercados y actualidad macroeconómica.',
    url: 'https://mentevolatil.com',
    siteName: 'MenteVolátil',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MenteVolátil',
    description:
      'Ideas, análisis y reflexiones sobre inversión, mercados y actualidad macroeconómica.',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
