import Hero from '../components/Hero';
import Positions from '../components/Positions';
import ApplicationProcess from '../components/ApplicationProcess';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Positions />
      <Benefits />
      <ApplicationProcess />
      <Footer />
    </div>
  );
}