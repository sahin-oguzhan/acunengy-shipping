import { IBM_Plex_Sans, Space_Grotesk } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/layout/Navbar';
import Preloader from '@/components/ui/Preloader';
import { getHomePageData } from '@/lib/api';

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'tr';
  const isTr = locale === 'tr';

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.acunengy.com';

  const title = isTr
    ? 'Acunengy Shipping & Maritime Services | Küresel Denizcilik & Lojistik'
    : 'Acunengy Shipping & Maritime Services | Global Maritime & Logistics';

  const description = isTr
    ? 'Uluslararası ticaret koridorlarında küresel denizcilik çözümleri, ağır yük mühendisliği ve tavizsiz liman acenteliği hizmetleri.'
    : 'Global maritime solutions, heavy-lift engineering, and uncompromised port agency services across international trade corridors.';

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: '%s | Acunengy Shipping',
    },
    description: description,
    keywords: [
      'Maritime Services',
      'Ship Agency',
      'Port Agency',
      'Heavy Lift',
      'Project Cargo',
      'Denizcilik Hizmetleri',
      'Liman Acenteliği',
      'Gemi Acenteliği',
      'Acunengy',
    ],
    authors: [{ name: 'Acunengy Shipping & Maritime Services' }],
    creator: 'Acunengy Shipping & Maritime Services',
    publisher: 'Acunengy Shipping & Maritime Services',

    openGraph: {
      title: title,
      description: description,
      url: `${siteUrl}/${locale}`,
      siteName: 'Acunengy Shipping',
      images: [
        {
          url: `${siteUrl}/images/logo.png`,
          width: 1200,
          height: 630,
          alt: 'Acunengy Shipping & Maritime Services',
        },
      ],
      locale: isTr ? 'tr_TR' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [`${siteUrl}/images/logo.png`],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'tr';

  let wpData = {};
  try {
    wpData = (await getHomePageData(locale)) || {};
  } catch (error) {
    console.error('Layout Fetch Error:', error);
  }

  return (
    <html lang={locale} className="light" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body
        className={`${ibmPlex.variable} ${spaceGrotesk.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Preloader />
        <Navbar wpData={wpData} />
        {children}
      </body>
    </html>
  );
}
