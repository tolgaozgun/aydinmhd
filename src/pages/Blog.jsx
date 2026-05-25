import { Calendar, ArrowRight, BookOpen, HelpCircle, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { postData, faqs } from '../data/postData';
import colors from '../color';
import './Blog.css';

function Blog({ section = 'haberler' }) {
  const newsItems = postData.filter(post => post.type === 'news' || post.type === 'announcement');
  const articles = postData.filter(post => post.type === 'article');

  return (
    <div className="page-wrapper" style={{ backgroundColor: colors.neutral200 }}>
      <div className="page-header" style={{ backgroundColor: colors.primary, color: colors.neutral100 }}>
        <div className="container">
          <h1 className="page-title" style={{ color: colors.neutral100 }}>Blog & Haberler</h1>
          <p className="page-subtitle" style={{ opacity: 0.9 }}>Güncel gelişmeler, makaleler ve sıkça sorulan sorular.</p>
        </div>
      </div>

      <div className="container section-padding">
        
        {section === 'haberler' && (
          <div id="haberler" className="blog-section">
            <h2 style={{ color: colors.primaryDark }}><Newspaper className="inline-icon" style={{ color: colors.primary }} /> Bizden Haberler</h2>
            <div className="blog-grid">
              {newsItems.map(item => (
                <div key={item.id} className="blog-card glass-panel" style={{ backgroundColor: colors.neutral100 }}>
                  <div className="blog-meta">
                    <span className="blog-category" style={{ backgroundColor: colors.primaryLight, color: colors.white }}>{item.category}</span>
                    <span className="blog-date" style={{ color: colors.neutral600 }}><Calendar size={14} /> {item.date}</span>
                  </div>
                  <h3 style={{ color: colors.primaryDark }}>{item.title}</h3>
                  <p style={{ color: colors.neutral600 }}>{item.excerpt}</p>
                  <Link to={`/post/${item.id}`} className="read-more" style={{ color: colors.primary }}>Devamını Oku <ArrowRight size={16} /></Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'makaleler' && (
          <div id="makaleler" className="blog-section">
            <h2 style={{ color: colors.primaryDark }}><BookOpen className="inline-icon" style={{ color: colors.primary }} /> Makaleler</h2>
            <div className="blog-list">
              {articles.map(article => (
                <div key={article.id} className="article-item glass-panel" style={{ backgroundColor: colors.neutral100 }}>
                  <div className="article-content">
                    <h3 style={{ color: colors.primary }}>{article.title}</h3>
                    <div className="article-meta" style={{ color: colors.neutral500 }}>
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <p style={{ color: colors.neutral600 }}>{article.excerpt}</p>
                  </div>
                  <Link to={`/post/${article.id}`} className="btn btn-outline" style={{ borderColor: colors.primary, color: colors.primary }}>Oku</Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === 'sss' && (
          <div id="sss" className="blog-section">
            <h2 style={{ color: colors.primaryDark }}><HelpCircle className="inline-icon" style={{ color: colors.primary }} /> Sıkça Sorulan Sorular (SSS)</h2>
            <div className="faq-container">
              {faqs.map((faq, idx) => (
                <div key={idx} className="faq-item" style={{ backgroundColor: colors.neutral100, borderColor: colors.neutral300 }}>
                  <h3 className="faq-question" style={{ color: colors.primaryDark }}>{faq.q}</h3>
                  <p className="faq-answer" style={{ color: colors.neutral700 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Blog;
