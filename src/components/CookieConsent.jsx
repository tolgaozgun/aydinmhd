import { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import colors from '../color';
import './CookieConsent.css';

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  const grantConsent = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
  };

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem('kvkk_cookie_consent');
    if (hasAccepted === 'true') {
      grantConsent();
    } else {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kvkk_cookie_consent', 'true');
    grantConsent();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-modal" style={{ backgroundColor: colors.white }}>
        <div className="cookie-consent-icon" style={{ backgroundColor: colors.primary, color: colors.white }}>
          <Info size={24} />
        </div>
        <div className="cookie-consent-content">
          <h4 style={{ color: colors.primaryDark }}>Çerez Politikası ve KVKK Aydınlatma Metni</h4>
          <p style={{ color: colors.neutral700 }}>
            Web sitemizde, size en iyi deneyimi sunabilmek ve site trafiğini analiz etmek için çerezler (cookies) kullanılmaktadır. 
            Sitemizi kullanmaya devam ederek, çerez kullanımını ve <Link to="/kvkk" style={{ color: colors.primary, textDecoration: 'underline' }}>KVKK Politikamızı</Link> kabul etmiş olursunuz.
          </p>
          <div className="cookie-consent-actions">
            <button 
              onClick={handleAccept} 
              className="btn btn-primary cookie-accept-btn"
              style={{ backgroundColor: colors.primary, color: colors.white }}
            >
              Anladım ve Kabul Ediyorum
            </button>
            <button 
              onClick={() => setIsVisible(false)} 
              className="cookie-close-btn"
              aria-label="Kapat"
            >
              <X size={20} style={{ color: colors.neutral500 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
