import { useEffect, useState, useCallback } from 'react';
import Navbar, { type PageId } from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Home from '@/pages/Home';
import Layanan from '@/pages/Layanan';
import Tentang from '@/pages/Tentang';
import Testimoni from '@/pages/Testimoni';
import Faq from '@/pages/Faq';
import Kontak from '@/pages/Kontak';

const validPages: PageId[] = ['beranda', 'layanan', 'tentang', 'testimoni', 'faq', 'kontak'];

function parseHash(): PageId {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  const page = hash as PageId;
  return validPages.includes(page) ? page : 'beranda';
}

export default function App() {
  const [page, setPage] = useState<PageId>(parseHash());

  useEffect(() => {
    const onHashChange = () => setPage(parseHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((target: PageId) => {
    window.location.hash = `/${target}`;
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar current={page} onNavigate={navigate} />

      <main>
        {page === 'beranda' && <Home onNavigate={navigate} />}
        {page === 'layanan' && <Layanan />}
        {page === 'tentang' && <Tentang />}
        {page === 'testimoni' && <Testimoni />}
        {page === 'faq' && <Faq />}
        {page === 'kontak' && <Kontak />}
      </main>

      <Footer onNavigate={navigate} />
      <FloatingWhatsApp />
    </div>
  );
}
