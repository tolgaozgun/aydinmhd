import { ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import colors from '../color';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" style={{ backgroundColor: colors.neutral900 }}>
        <div className="hero-overlay"></div>
        <img src="/hero_medical_bg.webp" alt="Medical Background" width="1920" height="1080" className="hero-img" fetchPriority="high" />
      </div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in" style={{ color: colors.white }}>
          <div className="hero-badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <Activity size={18} className="badge-icon" style={{ color: colors.primaryLight }} />
            <span>Sağlığınız İçin Buradayız</span>
          </div>
          <h1 className="hero-title" style={{ color: colors.white }}>
            Meme Hastalıklarının Tanı ve Tedavisindeki <span className="highlight" style={{ color: colors.primaryLight }}>Tüm Gelişmeleri</span> Takip Ediyoruz
          </h1>
          <p className="hero-subtitle" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Aydın Meme Hastalıkları Derneği olarak; güncel, bilimsel ve yenilikçi yaklaşımlarla halkımızı ve sağlık çalışanlarımızı bilgilendiriyor, erken teşhisin önemini vurguluyoruz.
          </p>
          <div className="hero-actions">
            <Link to="/hakkimizda" className="btn btn-primary btn-lg" style={{ backgroundColor: colors.primary, color: colors.white }}>
              Daha Fazla Bilgi
              <ArrowRight size={20} />
            </Link>
            <Link to="/iletisim" className="btn btn-outline btn-lg glass-btn" style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: colors.white }}>
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
      
      <div className="hero-waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill={colors.neutral200} fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,128C672,139,768,213,864,240C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
