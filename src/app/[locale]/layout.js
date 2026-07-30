import { Inter, Montserrat } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import { getDictionary } from '@/dictionaries/getDictionary';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata = {
  title: 'ACUNENGY SHIPPING | Global গোলা Logistics Excellence',
  description:
    'Ship Agency, Project Cargo, Heavy Lift Logistics, Port Operations',
};

// 1. DİKKAT: params parametresini direkt parçalamıyoruz, bütün olarak alıyoruz.
export default async function RootLayout({ children, params }) {
  // 2. DİKKAT: params artık bir Promise olduğu için await ile çözümlüyoruz.
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Aktif dile göre sözlüğü getir
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased min-h-screen flex flex-col pt-24`}
      >
        <ThemeProvider>
          <Navbar dict={dict.navbar} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
