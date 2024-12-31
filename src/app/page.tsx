import Navbar from '../app/components/navbar';
import Hero from '../app/components/hero';
import CardSection from '../app/components/CardSection';

export default function Home() {
  return (
    <div className='bg-[#252b42] '>
      <Navbar />
      <Hero />
      <CardSection />
    </div>
  );
}

