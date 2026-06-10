import type { Metadata } from 'next';
import { Manrope, JetBrains_Mono } from 'next/font/google';
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
  title: 'skupAUT — Skup samochodów · +48 601 500 160',
  description:
    'Kupujemy każde auto — osobowe, dostawcze, powypadkowe. Gotówka od ręki, dojazd gratis. Dzwoń 7 dni w tygodniu: +48 601 500 160.',
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
