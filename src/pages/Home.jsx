import Hero from '../components/Hero';
import MemorialBlock from '../components/MemorialBlock';
import { Helmet } from 'react-helmet-async';
import OfficialAnnouncements from '../components/OfficialAnnouncements';
import AboutPreview from '../components/AboutPreview';
import NewsCarousel from '../components/NewsCarousel';

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aydın Meme Hastalıkları Derneği",
    "url": "https://aydinmhd.org",
    "logo": "https://aydinmhd.org/favicon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-256-000-00-00",
      "contactType": "customer service",
      "email": "iletisim@aydinmhd.org"
    }
  };

  return (
    <>
      <Helmet>
        <title>Aydın Meme Hastalıkları Derneği | Anasayfa</title>
        <meta name="description" content="Aydın Meme Hastalıkları Derneği resmi web sitesi. Erken teşhis ve doğru tedavi yöntemleri hakkında bilimsel bilgiler." />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      <Hero />
      <MemorialBlock />
      <OfficialAnnouncements />
      <AboutPreview />
      <NewsCarousel />
    </>
  );
}
