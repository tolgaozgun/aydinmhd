import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';
import colors from '../color';

function NotFound() {
  return (
    <div className="page-wrapper" style={{ backgroundColor: colors.neutral200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-3xl) var(--spacing-md)', textAlign: 'center' }}>
      <Helmet>
        <title>Sayfa Bulunamadı | Aydın MHD</title>
        <meta name="description" content="Aradığınız sayfa bulunamadı." />
      </Helmet>
      
      <h1 style={{ fontSize: '6rem', color: colors.primary, marginBottom: 'var(--spacing-md)', fontWeight: '800' }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: colors.neutral800, marginBottom: 'var(--spacing-lg)' }}>Sayfa Bulunamadı</h2>
      <p style={{ fontSize: '1.125rem', color: colors.neutral600, maxWidth: '500px', marginBottom: 'var(--spacing-2xl)' }}>
        Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı olabilir.
      </p>
      
      <Link to="/" style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: 'var(--spacing-sm)', 
        backgroundColor: colors.primary, 
        color: colors.white, 
        padding: 'var(--spacing-md) var(--spacing-xl)', 
        borderRadius: 'var(--radius-md)', 
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'background-color var(--transition-fast)'
      }}>
        <Home size={20} />
        Anasayfaya Dön
      </Link>
    </div>
  );
}

export default NotFound;
