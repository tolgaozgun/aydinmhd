import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import colors from '../color';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{ 
      backgroundColor: scrolled ? colors.glassBackground : colors.neutral100,
      borderBottomColor: scrolled ? colors.transparent : colors.neutral300
    }}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Aydın MHD Anasayfa">
          <Logo variant="pink" width="220" />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Anasayfa</Link>
          
          <div className="nav-dropdown">
            <button 
              className={`nav-link dropdown-toggle ${location.pathname.startsWith('/hakkimizda') ? 'active' : ''}`} 
              style={{ color: location.pathname.startsWith('/hakkimizda') ? colors.primary : colors.neutral700 }}
              aria-expanded={isDropdownOpen === 'about'}
              aria-label="Hakkımızda Menüsünü Aç"
            >
              Hakkımızda <ChevronDown size={16} />
            </button>
            <div className="dropdown-menu" style={{ backgroundColor: colors.neutral100, borderColor: colors.neutral300 }}>
              <Link to="/hakkimizda#biz-kimiz" className="dropdown-item" style={{ color: colors.neutral700 }}>Biz Kimiz?</Link>
              <Link to="/hakkimizda#yonetim-kurulu" className="dropdown-item" style={{ color: colors.neutral700 }}>Yönetim Kurulu</Link>
              <Link to="/hakkimizda#tarihcemiz" className="dropdown-item" style={{ color: colors.neutral700 }}>Tarihçemiz</Link>
            </div>
          </div>

          <a href="https://tmhdf.org.tr/" className="nav-link" target="_blank" rel="noopener noreferrer" style={{ color: colors.neutral700 }}>Türkiye MHD Federasyonu</a>

          <div className="nav-dropdown">
            <button 
              className={`nav-link dropdown-toggle ${location.pathname.startsWith('/blog') ? 'active' : ''}`} 
              style={{ color: location.pathname.startsWith('/blog') ? colors.primary : colors.neutral700 }}
              aria-expanded={isDropdownOpen === 'blog'}
              aria-label="Blog Menüsünü Aç"
            >
              Blog <ChevronDown size={16} />
            </button>
            <div className="dropdown-menu" style={{ backgroundColor: colors.neutral100, borderColor: colors.neutral300 }}>
              <Link to="/blog/haberler" className="dropdown-item" style={{ color: colors.neutral700 }}>Bizden Haberler</Link>
              <Link to="/blog/makaleler" className="dropdown-item" style={{ color: colors.neutral700 }}>Makaleler</Link>
              <Link to="/blog/sss" className="dropdown-item" style={{ color: colors.neutral700 }}>SSS</Link>
            </div>
          </div>

          <Link to="/iletisim" className="btn btn-primary nav-btn" style={{ backgroundColor: colors.primary, color: colors.white }}>Bize Ulaşın</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ color: colors.primary }}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Menüyü Kapat" : "Menüyü Aç"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`} style={{ backgroundColor: colors.neutral100 }}>
        <div className="container">
          <Link to="/" className="mobile-link" style={{ color: colors.neutral800, borderBottomColor: colors.neutral300 }}>Anasayfa</Link>
          <div className="mobile-dropdown-header" style={{ color: colors.primary }}>Hakkımızda</div>
          <div className="mobile-dropdown-items" style={{ borderBottomColor: colors.neutral300 }}>
            <Link to="/hakkimizda#biz-kimiz" className="mobile-link nested" style={{ color: colors.neutral600 }}>Biz Kimiz?</Link>
            <Link to="/hakkimizda#yonetim-kurulu" className="mobile-link nested" style={{ color: colors.neutral600 }}>Yönetim Kurulu</Link>
            <Link to="/hakkimizda#tarihcemiz" className="mobile-link nested" style={{ color: colors.neutral600 }}>Tarihçemiz</Link>
          </div>
          <a href="https://tmhdf.org.tr/" className="mobile-link" target="_blank" rel="noopener noreferrer" style={{ color: colors.neutral800, borderBottomColor: colors.neutral300 }}>Türkiye MHD Federasyonu</a>
          <div className="mobile-dropdown-header" style={{ color: colors.primary }}>Blog</div>
          <div className="mobile-dropdown-items" style={{ borderBottomColor: colors.neutral300 }}>
            <Link to="/blog/haberler" className="mobile-link nested" style={{ color: colors.neutral600 }}>Bizden Haberler</Link>
            <Link to="/blog/makaleler" className="mobile-link nested" style={{ color: colors.neutral600 }}>Makaleler</Link>
            <Link to="/blog/sss" className="mobile-link nested" style={{ color: colors.neutral600 }}>SSS</Link>
          </div>
          <Link to="/iletisim" className="mobile-link highlight" style={{ color: colors.primary }}>Bize Ulaşın</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
