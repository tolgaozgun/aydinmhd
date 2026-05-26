import { MapPin, Mail, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import colors from '../color';
import './Contact.css';

function Contact() {
  return (
    <div className="page-wrapper" style={{ backgroundColor: colors.neutral200 }}>
      <Helmet>
        <title>İletişim | Aydın MHD</title>
        <meta name="description" content="Derneğimizle iletişime geçin. Adnan Menderes Üniversitesi Tıp Fakültesi yerleşkesi adresimiz ve iletişim bilgilerimiz." />
      </Helmet>
      <div className="page-header" style={{ backgroundColor: colors.primary, color: colors.neutral100 }}>
        <div className="container">
          <h1 className="page-title" style={{ color: colors.neutral100 }}>Bize Ulaşın</h1>
          <p className="page-subtitle" style={{ opacity: 0.9 }}>Sorularınız veya görüşleriniz için bizimle iletişime geçebilirsiniz.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="contact-info glass-panel" style={{ backgroundColor: colors.neutral100, maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: colors.primaryDark }}>İletişim Bilgileri</h2>
            <p className="contact-desc" style={{ color: colors.neutral600 }}>
              Derneğimiz hakkında daha fazla bilgi almak veya etkinliklerimize katılmak için aşağıdaki iletişim kanallarını kullanabilirsiniz.
            </p>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon" style={{ backgroundColor: 'rgba(232, 76, 136, 0.1)', color: colors.primary }}><MapPin size={24} /></div>
                <div>
                  <h3 style={{ color: colors.neutral900 }}>Adres</h3>
                  <p style={{ color: colors.neutral600 }}>Adnan Menderes Üniversitesi<br />Tıp Fakültesi, Genel Cerrahi AD.<br />Efeler / Aydın</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon" style={{ backgroundColor: 'rgba(232, 76, 136, 0.1)', color: colors.primary }}><Mail size={24} /></div>
                <div>
                  <h3 style={{ color: colors.neutral900 }}>E-Posta</h3>
                  <a href="mailto:iletisim@aydinmhd.org" style={{ color: colors.neutral600 }}>iletisim@aydinmhd.org</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon" style={{ backgroundColor: 'rgba(232, 76, 136, 0.1)', color: colors.primary }}><Phone size={24} /></div>
                <div>
                  <h3 style={{ color: colors.neutral900 }}>Telefon</h3>
                  <a href="tel:+902560000000" style={{ color: colors.neutral600 }}>+90 (256) 000 00 00</a>
                </div>
              </div>
            </div>
          </div>


        <div className="map-container glass-panel mt-4" style={{ backgroundColor: colors.neutral100 }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12599.309489569062!2d27.854005!3d37.844331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b92b6a55555555%3A0x6a0000000000000!2sAdnan%20Menderes%20University!5e0!3m2!1sen!2str!4v1680000000000!5m2!1sen!2str" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Aydın ADÜ Harita"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
