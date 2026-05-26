import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import colors from '../color';
import './AboutPreview.css';

function AboutPreview() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="about-preview section-padding" style={{ backgroundColor: colors.neutral100 }}>
      <div className="container about-container">
        <div className="about-content">
          <h2 className="about-title" style={{ color: colors.primaryDark }}>Erken ve Doğru Teşhis Hayat Kurtarır</h2>
          <div className="section-line left-align" style={{ backgroundColor: colors.primary }}></div>
          <p className="about-text" style={{ color: colors.neutral600 }}>
            Aydın Meme Hastalıkları Derneği olarak, bölgemizde meme sağlığı bilincini artırmak, sağlık profesyonellerini güncel gelişmelerden haberdar etmek ve bilimsel araştırmaları desteklemek amacıyla çalışmalarımızı sürdürüyoruz.
          </p>
          <p className="about-text" style={{ color: colors.neutral600 }}>
            Meme hastalıklarının tanı ve tedavisinde multidisipliner yaklaşımın önemine inanıyor, cerrahi, onkoloji, radyoloji ve patoloji alanlarındaki uzmanları bir araya getiriyoruz.
          </p>
          <Link to="/hakkimizda" className="btn btn-secondary mt-4" style={{ backgroundColor: colors.primary, color: colors.white }}>
            Derneğimizi Tanıyın
          </Link>
        </div>
        
        <div className="about-media">
          <div className="video-trigger-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600&h=600" 
              alt="Medical Team" 
              width="600"
              height="600"
              className="about-img main-img"
            />
            <button 
              className="video-play-btn"
              onClick={() => setModalOpen(true)}
              aria-label="Videoyu Oynat"
              style={{ backgroundColor: colors.primary, color: colors.white }}
            >
              <Play size={32} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {modalOpen && (
        <div className="video-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setModalOpen(false)} style={{ color: colors.white }} aria-label="Kapat">
              <X size={24} />
            </button>
            <div className="video-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.neutral900, color: colors.white }}>
              {/* Using a placeholder video embed for demonstration */}
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <Play size={48} style={{ opacity: 0.5, marginBottom: '1rem' }} />
                <h3>Tanıtım Filmi Yakında Eklenecektir</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutPreview;
