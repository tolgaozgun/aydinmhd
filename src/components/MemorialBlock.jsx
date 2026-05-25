import { Calendar } from 'lucide-react';
import colors from '../color';
import './MemorialBlock.css';

function MemorialBlock() {
  return (
    <section className="memorial-block section-padding" style={{ backgroundColor: colors.primary, color: colors.white }}>
      <div className="container">
        <div className="memorial-content glass-panel" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderColor: 'rgba(255, 255, 255, 0.4)' }}>
          <div className="memorial-date" style={{ backgroundColor: colors.white, color: colors.primaryDark }}>
            <Calendar size={24} className="memorial-icon" style={{ color: colors.primary }} />
            <span>1-31 Ekim Meme Kanseri Farkındalık Ayı</span>
          </div>
          <h2 className="memorial-title" style={{ color: colors.white }}>Erken Teşhis Hayat Kurtarır</h2>
          <p className="memorial-text">
            Meme kanseri, kadınlarda en sık görülen kanser türüdür. Ancak erken teşhis edildiğinde tedavi başarısı %90'ın üzerindedir. Düzenli kontrollerinizi yaptırmayı unutmayın.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MemorialBlock;
