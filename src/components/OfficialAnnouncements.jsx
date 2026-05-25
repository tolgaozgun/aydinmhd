import { MapPin, Clock, CalendarDays, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { postData } from '../data/postData';
import colors from '../color';
import './OfficialAnnouncements.css';

function OfficialAnnouncements() {
  const announcements = postData.filter(post => post.type === 'announcement');


  return (
    <section className="announcements-section section-padding" style={{ backgroundColor: colors.neutral200 }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" style={{ color: colors.primaryDark }}>Resmi Tebliğler & Duyurular</h2>
          <div className="section-line" style={{ backgroundColor: colors.primary }}></div>
        </div>
        
        <div className="announcements-grid">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="announcement-card glass-panel" style={{ borderLeftColor: colors.primary, backgroundColor: colors.neutral100 }}>
              <div className="announcement-header">
                <h3 style={{ color: colors.neutral900 }}>{announcement.title}</h3>
                <span className="announcement-badge" style={{ backgroundColor: colors.primaryLight, color: colors.white }}>Önemli</span>
              </div>
              <p className="announcement-desc" style={{ color: colors.neutral600 }}>{announcement.description}</p>
              
              <div className="announcement-details" style={{ borderBottomColor: colors.neutral300 }}>
                <div className="detail-item" style={{ color: colors.neutral700 }}>
                  <CalendarDays size={18} style={{ color: colors.primary }} />
                  <span>{announcement.date}</span>
                </div>
                <div className="detail-item" style={{ color: colors.neutral700 }}>
                  <Clock size={18} style={{ color: colors.primary }} />
                  <span>{announcement.time}</span>
                </div>
                <div className="detail-item" style={{ color: colors.neutral700 }}>
                  <MapPin size={18} style={{ color: colors.primary }} />
                  <span>{announcement.location}</span>
                </div>
              </div>
              <Link to={`/post/${announcement.id}`} className="btn btn-outline announcement-btn" style={{ borderColor: colors.primary, color: colors.primary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Detayları Gör <ExternalLink size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfficialAnnouncements;
