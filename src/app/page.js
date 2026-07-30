import About from '@/components/About';
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import Services from '@/components/Services';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
      <Stats />
      <Services />
      <Industries />
    </main>
  );
}
