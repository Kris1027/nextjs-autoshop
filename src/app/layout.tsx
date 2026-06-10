import type { Metadata } from 'next';
import { Manrope, JetBrains_Mono } from 'next/font/google';
import { businessName, siteDescription, siteTitle, siteUrl } from '@/lib/data';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'latin-ext'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: '/',
    siteName: businessName,
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl' className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className='bg-paper text-ink antialiased leading-normal'>
        {children}
      </body>
    </html>
  );
}
