import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';
import colors from '../color';

function Kvkk() {
  return (
    <div className="page-wrapper" style={{ backgroundColor: colors.neutral200 }}>
      <Helmet>
        <title>KVKK Aydınlatma Metni | Aydın MHD</title>
        <meta name="description" content="Aydın Meme Hastalıkları Derneği Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma metni ve çerez politikası." />
      </Helmet>
      
      <div className="page-header" style={{ backgroundColor: colors.primary, color: colors.neutral100 }}>
        <div className="container" style={{ textAlign: 'center', padding: 'var(--spacing-3xl) 0 var(--spacing-2xl)' }}>
          <Shield size={48} style={{ margin: '0 auto var(--spacing-md)', color: colors.white }} />
          <h1 className="page-title" style={{ color: colors.neutral100, marginBottom: 'var(--spacing-sm)' }}>KVKK ve Çerez Politikası</h1>
          <p className="page-subtitle" style={{ fontSize: '1.25rem', opacity: 0.9 }}>Kişisel Verilerin Korunması Aydınlatma Metni</p>
        </div>
      </div>

      <div className="container" style={{ padding: 'var(--spacing-3xl) var(--spacing-md)' }}>
        <div className="glass-panel" style={{ backgroundColor: colors.white, padding: 'var(--spacing-2xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          
          <h2 style={{ color: colors.primaryDark, marginBottom: 'var(--spacing-md)' }}>1. Veri Sorumlusunun Kimliği</h2>
          <p style={{ color: colors.neutral700, marginBottom: 'var(--spacing-lg)', lineHeight: '1.7' }}>
            Aydın Meme Hastalıkları Derneği olarak, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu bilinçle, derneğimizle ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu'na ("KVKK") uygun olarak işlenerek, muhafaza edilmesine büyük önem atfetmekteyiz.
          </p>

          <h2 style={{ color: colors.primaryDark, marginBottom: 'var(--spacing-md)' }}>2. Kişisel Verilerin Hangi Amaçla İşleneceği</h2>
          <p style={{ color: colors.neutral700, marginBottom: 'var(--spacing-lg)', lineHeight: '1.7' }}>
            Toplanan kişisel verileriniz, derneğimizin yürüttüğü faaliyetlerin (kongre, sempozyum, eğitim duyuruları) gerçekleştirilmesi, dernek tüzüğünde belirtilen amaçların yerine getirilmesi, web sitesi kullanım analizi ve ziyaretçi deneyiminin iyileştirilmesi amaçlarıyla KVKK'nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dâhilinde işlenecektir.
          </p>

          <h2 style={{ color: colors.primaryDark, marginBottom: 'var(--spacing-md)' }}>3. Çerez (Cookie) Kullanımı</h2>
          <p style={{ color: colors.neutral700, marginBottom: 'var(--spacing-lg)', lineHeight: '1.7' }}>
            Web sitemiz (aydinmhd.org), ziyaretçilerine daha iyi bir hizmet sunabilmek ve site trafiğini analiz edebilmek amacıyla çerezleri (cookies) ve Google Analytics hizmetlerini kullanmaktadır. Çerezler, tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya çerez gönderildiğinde uyarı alabilirsiniz.
          </p>

          <h2 style={{ color: colors.primaryDark, marginBottom: 'var(--spacing-md)' }}>4. Kişisel Veri Sahibinin Hakları</h2>
          <p style={{ color: colors.neutral700, marginBottom: 'var(--spacing-lg)', lineHeight: '1.7' }}>
            KVKK'nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahipsiniz. Bu haklarınızı kullanmak için <strong>iletisim@aydinmhd.org</strong> adresi üzerinden bizimle iletişime geçebilirsiniz.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Kvkk;
