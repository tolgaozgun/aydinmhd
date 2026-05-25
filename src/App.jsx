import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import colors from './color';

function App() {
  return (
    <BrowserRouter>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        backgroundColor: colors.neutral200,
        color: colors.neutral800
      }}>
        <ScrollToTop />
        <Navbar />
        <main style={{ flex: 1, paddingTop: 'var(--nav-height)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/blog/haberler" element={<Blog section="haberler" />} />
            <Route path="/blog/makaleler" element={<Blog section="makaleler" />} />
            <Route path="/blog/sss" element={<Blog section="sss" />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
