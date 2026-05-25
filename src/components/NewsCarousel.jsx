import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { postData } from '../data/postData';
import colors from '../color';
import './NewsCarousel.css';

function NewsCarousel() {
  const newsItems = postData.filter(post => post.type === 'news' || post.type === 'announcement');

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1));
  };

  return (
    <section className="news-carousel-section section-padding" style={{ backgroundColor: colors.neutral100 }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" style={{ color: colors.primaryDark }}>Bizden Haberler & Etkinlikler</h2>
          <div className="section-line" style={{ backgroundColor: colors.primary }}></div>
        </div>

        <div className="carousel-container">
          <div className="carousel-track-wrapper">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {newsItems.map((item) => (
                <div key={item.id} className="carousel-slide">
                  <div className="news-card" style={{ backgroundColor: colors.neutral100 }}>
                    <div className="news-card-img-wrapper">
                      <img src={item.image} alt={item.title} className="news-card-img" />
                      <div className="news-date-badge" style={{ backgroundColor: colors.primary, color: colors.white }}>
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <div className="news-card-content">
                      <h3 className="news-title" style={{ color: colors.neutral900 }}>{item.title}</h3>
                      <p className="news-excerpt" style={{ color: colors.neutral600 }}>{item.excerpt}</p>
                      <Link to={`/post/${item.id}`} className="news-read-more" style={{ color: colors.primary }}>
                        Devamını Oku <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button className="carousel-control prev" onClick={prevSlide} aria-label="Önceki Haber" style={{ backgroundColor: colors.neutral100, color: colors.primary }}>
            <ChevronLeft size={24} />
          </button>
          <button className="carousel-control next" onClick={nextSlide} aria-label="Sonraki Haber" style={{ backgroundColor: colors.neutral100, color: colors.primary }}>
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="carousel-indicators">
            {newsItems.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Slayt ${index + 1}'e git`}
                style={{ backgroundColor: index === currentIndex ? colors.primary : colors.neutral400 }}
              />
            ))}
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
           <Link to="/blog/haberler" className="btn btn-primary" style={{ backgroundColor: colors.primary, color: colors.white }}>Tüm Haberleri Gör</Link>
        </div>
      </div>
    </section>
  );
}

export default NewsCarousel;
