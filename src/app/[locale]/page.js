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

export default async function Home({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const dict = await getDictionary(locale);

  return (
    <main className="flex flex-col w-full">
      <Hero dict={dict.hero} locale={locale} />
      <About dict={dict.about} locale={locale} />
      <Stats dict={dict.stats} locale={locale} />
      <Services dict={dict.services} locale={locale} />
      <Industries dict={dict.industries} />
      <EliteAdvantage dict={dict.eliteAdvantage} />
      <Insights dict={dict.insights} />
      <Contact dict={dict.contact} />
      <Footer dict={dict.footer} />
    </main>
  );
}
