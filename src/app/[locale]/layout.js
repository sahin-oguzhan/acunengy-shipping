import { IBM_Plex_Sans, Space_Grotesk } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Preloader from '@/components/ui/Preloader';
import { getDictionary } from '@/dictionaries/getDictionary';
import { getHomePageData } from '@/lib/api';

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata = {
  title: 'ACUNENGY SHIPPING | Global Maritime Solutions',
  description:
    'Global Maritime Logistics, Ship Agency, & Heavy Lift Excellence',
};

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const dict = await getDictionary(locale);
  const wpData = await getHomePageData(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body
        className={`${ibmPlex.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Preloader />

          <Navbar dict={dict.navbar} wpData={wpData} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
