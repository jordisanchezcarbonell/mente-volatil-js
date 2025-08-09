import type React from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.variable} ${playfair.variable} font-sans min-h-dvh bg-white text-gray-900`}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <SiteHeader />
        <main
          id='main-content'
          className='mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-8 md:py-10'
        >
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
        <SiteFooter />
      </Suspense>
    </div>
  );
}
