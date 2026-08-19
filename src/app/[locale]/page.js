import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Stats from '@/components/home/Stats';
import Services from '@/components/home/Services';
import Specializations from '@/components/home/Specializations';
import Industries from '@/components/home/Industries';
import News from '@/components/home/News';
import Contact from '@/components/home/Contact';
import EmergencyWidget from '@/components/layout/EmergencyWidget';
import Footer from '@/components/layout/Footer';
import { getHomePageData } from '@/lib/api';
import Approach from '@/components/home/Approach';

export default async function Home({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'tr';

  const wpData = await getHomePageData(locale);

  return (
    <main className="flex flex-col w-full">
      <section id="hero">
        <Hero locale={locale} wpData={wpData} />
      </section>

      <section id="about">
        <About locale={locale} wpData={wpData} />
      </section>

      <Stats locale={locale} wpData={wpData} />

      <section id="services">
        <Services locale={locale} wpData={wpData} />
      </section>

      <Specializations locale={locale} wpData={wpData} />

      <Industries locale={locale} wpData={wpData} />

      <section id="approach">
        <Approach locale={locale} wpData={wpData} />
      </section>

      <section id="news">
        <News locale={locale} wpData={wpData} />
      </section>

      <section id="contact">
        <Contact wpData={wpData} locale={locale} />
      </section>

      <EmergencyWidget wpData={wpData} />
      <Footer wpData={wpData} locale={locale} />
    </main>
  );
}
