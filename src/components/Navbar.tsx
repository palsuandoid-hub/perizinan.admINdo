import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { waLink } from '@/data/content';

export type PageId = 'beranda' | 'layanan' | 'tentang' | 'testimoni' | 'faq' | 'kontak';

interface NavbarProps {
  current: PageId;
  onNavigate: (page: PageId) => void;
}

const navItems: { id: PageId; label: string }[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'layanan', label: 'Layanan' },
  { id: 'tentang', label: 'Tentang Kami' },
  { id: 'testimoni', label: 'Testimoni' },
  { id: 'faq', label: 'FAQ' },
  { id: 'kontak', label: 'Kontak' },
];

export default function Navbar({ current, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_2px_20px_-8px_rgba(15,157,148,0.15)] border-b border-mist-200'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('beranda')}
            className="flex items-center gap-2.5 group"
            aria-label="Beranda Perizinan.AdmINdo"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-soft transition-transform group-hover:scale-105">
              <span className="font-display font-bold text-lg">P</span>
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-mist-900">
              Perizinan<span className="text-teal-500">.AdmINdo</span>
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    current === item.id
                      ? 'text-teal-600'
                      : 'text-mist-700 hover:text-teal-600'
                  }`}
                >
                  {item.label}
                  {current === item.id && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-teal-500" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={waLink('Halo Perizinan.AdmINdo, saya ingin berkonsultasi.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-teal-600 hover:shadow-hover lg:inline-flex"
          >
            Konsultasi
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-mist-800 hover:bg-mist-100 lg:hidden"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open ? 'max-h-[480px] pb-6' : 'max-h-0'
          }`}
        >
          <ul className="space-y-1 rounded-2xl bg-white/95 p-3 shadow-card backdrop-blur-xl">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    current === item.id
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-mist-700 hover:bg-mist-100'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={waLink('Halo Perizinan.AdmINdo, saya ingin berkonsultasi.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-4 py-3 text-sm font-semibold text-white"
              >
                Konsultasi WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
