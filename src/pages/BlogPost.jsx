import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, MapPin, Clock } from 'lucide-react';
import { postData } from '../data/postData';
import colors from '../color';
import './BlogPost.css';

function BlogPost() {
  const { id } = useParams();
  const post = postData.find(p => p.id === id);

  if (!post) {
    return (
      <div className="page-wrapper" style={{ backgroundColor: colors.neutral200, padding: 'var(--spacing-3xl) 0', textAlign: 'center' }}>
        <h1 style={{ color: colors.primaryDark }}>İçerik Bulunamadı</h1>
        <p style={{ color: colors.neutral600, marginBottom: 'var(--spacing-xl)' }}>Aradığınız sayfa mevcut değil veya kaldırılmış olabilir.</p>
        <Link to="/" className="btn btn-primary" style={{ backgroundColor: colors.primary, color: colors.white }}>Ana Sayfaya Dön</Link>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": post.image || "https://aydinmhd.org/favicon.png",
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author || "Aydın MHD"
    }
  };

  return (
    <div className="page-wrapper" style={{ backgroundColor: colors.neutral200 }}>
      <Helmet>
        <title>{post.title} | Aydın MHD</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image || "https://aydinmhd.org/favicon.png"} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      {/* Hero Header */}
      <div className="post-header" style={{ backgroundColor: colors.primary, color: colors.white, backgroundImage: `linear-gradient(to right, ${colors.primaryDark}, ${colors.primary})` }}>
        <div className="container">
          <Link to={-1} className="back-link" style={{ color: colors.white }}>
            <ArrowLeft size={16} /> Geri Dön
          </Link>
          <span className="post-badge" style={{ backgroundColor: colors.white, color: colors.primary }}>{post.category}</span>
          <h1 className="post-title" style={{ color: colors.white }}>{post.title}</h1>
          
          <div className="post-meta">
            {post.author && (
              <span className="meta-item">
                <User size={16} /> {post.author}
              </span>
            )}
            {post.date && (
              <span className="meta-item">
                <Calendar size={16} /> {post.date}
              </span>
            )}
            {post.time && (
              <span className="meta-item">
                <Clock size={16} /> {post.time}
              </span>
            )}
            {post.location && (
              <span className="meta-item">
                <MapPin size={16} /> {post.location}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="container section-padding">
        <div className="post-container glass-panel" style={{ backgroundColor: colors.neutral100 }}>
          {post.image && (
            <div className="post-image-wrapper">
              <img src={post.image} alt={post.title} width="800" height="400" className="post-featured-image" />
            </div>
          )}
          
          <div className="post-content">
            {post.content.split('\n').map((paragraph, idx) => (
              paragraph.trim() !== '' ? <p key={idx} style={{ color: colors.neutral800 }}>{paragraph}</p> : <br key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
