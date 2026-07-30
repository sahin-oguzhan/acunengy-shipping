import About from '@/components/About';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
      <Stats />
    </main>
  );
}
