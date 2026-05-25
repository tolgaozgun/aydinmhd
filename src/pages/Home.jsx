import Hero from '../components/Hero';
import MemorialBlock from '../components/MemorialBlock';
import OfficialAnnouncements from '../components/OfficialAnnouncements';
import AboutPreview from '../components/AboutPreview';
import NewsCarousel from '../components/NewsCarousel';

export default function Home() {
  return (
    <>
      <Hero />
      <MemorialBlock />
      <OfficialAnnouncements />
      <AboutPreview />
      <NewsCarousel />
    </>
  );
}
