import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import EliteAdvantage from '@/components/EliteAdvantages';
import Insights from '@/components/Insights';
import Contact from '@/components/Contact';
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
      <About dict={dict.about} locale={locale} />
      <Stats dict={dict.stats} locale={locale} />
      <Services dict={dict.services} locale={locale} />
      <Industries dict={dict.industries} locale={locale} />
      <EliteAdvantage dict={dict.eliteAdvantage} locale={locale} />
      <Insights dict={dict.insights} locale={locale} />
      <Contact dict={dict.contact} wpData={wpData} />
      <Footer dict={dict.footer} />
    </main>
  );
}
