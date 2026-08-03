import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Stats from '@/components/home/Stats';
import Services from '@/components/home/Services';
import Specializations from '@/components/home/Specializations';
import Industries from '@/components/home/Industries';
import FleetOperations from '@/components/home/FleetOperations';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import EliteAdvantage from '@/components/home/EliteAdvantages';
import News from '@/components/home/News';
import Contact from '@/components/home/Contact';
import EmergencyWidget from '@/components/layout/EmergencyWidget';
import Footer from '@/components/layout/Footer';
import { getDictionary } from '@/dictionaries/getDictionary';
import { getHomePageData } from '@/lib/api';

export default async function Home({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const dict = await getDictionary(locale);
  const wpData = await getHomePageData(locale);

  return (
    <main className="flex flex-col w-full">
      <section id="hero">
        <Hero dict={dict.hero} locale={locale} wpData={wpData} />
      </section>

      <section id="about">
        <About dict={dict.about} locale={locale} wpData={wpData} />
      </section>

      <Stats dict={dict.stats} locale={locale} wpData={wpData} />

      <section id="services">
        <Services dict={dict.services} locale={locale} wpData={wpData} />
      </section>

      <Specializations
        dict={dict.specializations}
        locale={locale}
        wpData={wpData}
      />

      <Industries dict={dict.industries} locale={locale} wpData={wpData} />

      <section id="fleet">
        <FleetOperations dict={dict.fleet} locale={locale} wpData={wpData} />
      </section>

      <section id="news">
        <News dict={dict.insights} locale={locale} wpData={wpData} />
      </section>

      <section id="contact">
        <Contact dict={dict.contact} wpData={wpData} />
      </section>

      <EmergencyWidget wpData={wpData} />
      <Footer dict={dict.footer} wpData={wpData} />
    </main>
  );
}
