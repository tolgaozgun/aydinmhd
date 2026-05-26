import { Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import colors from '../color';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: colors.primaryDarker, color: colors.white }}>
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <Link to="/" aria-label="Aydın MHD Anasayfa" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <Logo width="240" />
          </Link>
          <p className="footer-desc">
            Meme hastalıklarının tanı ve tedavisindeki tüm gelişmeleri takip ediyoruz. Aydın Meme Hastalıkları Derneği olarak, erken teşhis ve doğru tedavi yöntemleri konusunda halkımızı ve sağlık profesyonellerini bilgilendirmeyi amaçlıyoruz.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook"><FaFacebook size={20} /></a>
            <a href="#" className="social-link" aria-label="Twitter"><FaTwitter size={20} /></a>
            <a href="#" className="social-link" aria-label="Instagram"><FaInstagram size={20} /></a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h3 className="footer-heading" style={{ color: colors.white }}>Hızlı Bağlantılar</h3>
          <ul className="footer-links">
            <li><Link to="/hakkimizda" style={{ color: colors.white }}>Hakkımızda</Link></li>
            <li><Link to="/blog/haberler" style={{ color: colors.white }}>Blog & Haberler</Link></li>
            <li><a href="https://tmhdf.org.tr/" target="_blank" rel="noopener noreferrer" style={{ color: colors.white }}>Türkiye MHD Federasyonu</a></li>
            <li><Link to="/iletisim" style={{ color: colors.white }}>Bize Ulaşın</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h3 className="footer-heading" style={{ color: colors.white }}>İletişim</h3>
          <ul className="footer-contact">
            <li style={{ color: colors.white }}>
              <MapPin size={20} className="contact-icon" style={{ color: colors.white }} />
              <span>Adnan Menderes Üniversitesi, Tıp Fakültesi, Genel Cerrahi AD., Efeler / Aydın</span>
            </li>
            <li style={{ color: colors.white }}>
              <Mail size={20} className="contact-icon" style={{ color: colors.white }} />
              <a href="mailto:iletisim@aydinmhd.org" style={{ color: colors.white }}>iletisim@aydinmhd.org</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom" style={{ borderColor: 'rgba(255, 255, 255, 0.1)', color: colors.white }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Aydın Meme Hastalıkları Derneği. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
