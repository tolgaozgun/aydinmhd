import { Users, History, Target } from 'lucide-react';
import colors from '../color';
import './About.css';

function About() {
  const boardMembers = [
    { id: 1, name: "Dr. Hedef Özgün", role: "Başkan", title: "Genel Cerrah" },
    { id: 2, name: "Dr. Yasemin Durum Polat", role: "Başkan Yardımcısı", title: "Genel Cerrah" },
    { id: 3, name: "Dr. Merve Turan", role: "Sekreter", title: "Genel Cerrah" },
    { id: 4, name: "Dr. Esin Oktay", role: "Sayman", title: "Genel Cerrah" },
    { id: 5, name: "Dr. Ulaş Koşan", role: "Üye", title: "Genel Cerrah" }
  ];

  return (
    <div className="page-wrapper" style={{ backgroundColor: colors.neutral200 }}>
      <div className="page-header" style={{ backgroundColor: colors.primary, color: colors.neutral100 }}>
        <div className="container">
          <h1 className="page-title" style={{ color: colors.neutral100 }}>Hakkımızda</h1>
          <p className="page-subtitle" style={{ opacity: 0.9 }}>Aydın Meme Hastalıkları Derneği'ni yakından tanıyın.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="about-grid">
          <div className="about-content-area" id="biz-kimiz" style={{ color: colors.neutral600 }}>
            <h2 style={{ color: colors.primaryDark }}><Target className="inline-icon" style={{ color: colors.primary }} /> Biz Kimiz?</h2>
            <p>
              Aydın Meme Hastalıkları Derneği, meme sağlığı konusunda toplumsal farkındalığı artırmak, erken tanı ve tedavi yöntemlerinin gelişimine katkıda bulunmak amacıyla kurulmuş kar amacı gütmeyen bir sivil toplum kuruluşudur.
            </p>
            <p>
              Multidisipliner bir yaklaşımla, cerrahlar, onkologlar, radyologlar, patologlar ve diğer sağlık profesyonellerini tek çatı altında topluyoruz. Amacımız, en güncel bilimsel veriler ışığında hastalarımıza en iyi bakımın sunulmasını sağlamak ve sağlık çalışanlarımızın sürekli eğitimine destek olmaktır.
            </p>
          </div>
          <div className="about-image-area">
             <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=400" alt="Dernek Binası" className="rounded-img shadow-lg" />
          </div>
        </div>

        <div className="divider" style={{ backgroundColor: colors.neutral300 }}></div>

        <div id="yonetim-kurulu" className="board-section">
          <h2 className="text-center" style={{ color: colors.primaryDark }}><Users className="inline-icon" style={{ color: colors.primary }} /> Yönetim Kurulu</h2>
          <div className="board-grid">
            {boardMembers.map((member, idx) => (
              <div key={idx} className="board-card glass-panel" style={{ backgroundColor: colors.neutral100, textAlign: 'center', padding: '2rem' }}>
                <h3 className="board-name" style={{ color: colors.primaryDark, marginBottom: '0.5rem' }}>{member.name}</h3>
                <p className="board-role" style={{ color: colors.neutral600 }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" style={{ backgroundColor: colors.neutral300 }}></div>

        <div id="tarihcemiz" className="history-section">
          <h2 style={{ color: colors.primaryDark }}><History className="inline-icon" style={{ color: colors.primary }} /> Tarihçemiz</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year" style={{ backgroundColor: colors.primary, color: colors.neutral100, boxShadow: `0 0 0 4px ${colors.neutral200}` }}>2010</div>
              <div className="timeline-content" style={{ backgroundColor: colors.neutral100 }}>
                <h3 style={{ color: colors.primaryDark }}>Kuruluş</h3>
                <p style={{ color: colors.neutral700 }}>Derneğimiz, ADÜ Tıp Fakültesi öncülüğünde 5 kurucu üye ile faaliyetlerine başladı.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year" style={{ backgroundColor: colors.primary, color: colors.neutral100, boxShadow: `0 0 0 4px ${colors.neutral200}` }}>2015</div>
              <div className="timeline-content" style={{ backgroundColor: colors.neutral100 }}>
                <h3 style={{ color: colors.primaryDark }}>İlk Ulusal Kongre</h3>
                <p style={{ color: colors.neutral700 }}>Aydın'da ilk kez 300'ü aşkın hekimin katılımıyla Ulusal Meme Hastalıkları Kongresi düzenlendi.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year" style={{ backgroundColor: colors.primary, color: colors.neutral100, boxShadow: `0 0 0 4px ${colors.neutral200}` }}>2023</div>
              <div className="timeline-content" style={{ backgroundColor: colors.neutral100 }}>
                <h3 style={{ color: colors.primaryDark }}>Federasyon Üyeliği</h3>
                <p style={{ color: colors.neutral700 }}>Türkiye MHD Federasyonu'na resmi katılım sağlandı ve ulusal ağa dahil olundu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
