import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Specializations from '@/components/Specializations';
import Industries from '@/components/Industries';
import FleetOperations from '@/components/FleetOperations';
import WhyChooseUs from '@/components/WhyChooseUs';
import EliteAdvantage from '@/components/EliteAdvantages';
import News from '@/components/News';
import Contact from '@/components/Contact';
import EmergencyWidget from '@/components/EmergencyWidget';
import Footer from '@/components/Footer';
import { getDictionary } from '@/dictionaries/getDictionary';
import { getHomePageData } from '@/lib/api';

export default async function Home({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const dict = await getDictionary(locale);
  const wpData = await getHomePageData(locale);

  return (
    <main className="flex flex-col w-full">
      <Hero dict={dict.hero} locale={locale} />
      <About dict={dict.about} locale={locale} wpData={wpData} />
      <Stats dict={dict.stats} locale={locale} wpData={wpData} />
      <Services dict={dict.services} locale={locale} wpData={wpData} />
      <Specializations
        dict={dict.specializations}
        locale={locale}
        wpData={wpData}
      />
      <Industries dict={dict.industries} locale={locale} />
      <FleetOperations dict={dict.fleet} locale={locale} wpData={wpData} />
      <WhyChooseUs dict={dict.whyChooseUs} locale={locale} wpData={wpData} />
      <EliteAdvantage dict={dict.eliteAdvantage} locale={locale} />
      <News dict={dict.insights} locale={locale} wpData={wpData} />
      <Contact dict={dict.contact} wpData={wpData} />
      <EmergencyWidget />
      <Footer dict={dict.footer} wpData={wpData} />
    </main>
  );
}
