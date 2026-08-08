import Icon from '@/components/Icon';
import { contact, waLink } from '@/data/content';
import type { PageId } from '@/components/Navbar';

interface FooterProps {
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

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-mist-100 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => onNavigate('beranda')}
              className="flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-soft">
                <span className="font-display font-bold text-lg">P</span>
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-mist-900">
                Perizinan<span className="text-teal-500">.AdmINdo</span>
              </span>
            </button>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mist-600">
              Solusi mudah perizinan usaha &amp; administrasi perpajakan. Melayani
              pengurusan OSS, NIB, Coretax, dan pendampingan administrasi usaha
              secara profesional.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-mist-600 shadow-soft transition-all hover:bg-teal-500 hover:text-white"
              >
                <Icon name="instagram" size={20} />
              </a>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-mist-600 shadow-soft transition-all hover:bg-teal-500 hover:text-white"
              >
                <Icon name="facebook" size={20} />
              </a>
              <a
                href={contact.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-mist-600 shadow-soft transition-all hover:bg-teal-500 hover:text-white"
              >
                <Icon name="tiktok" size={20} />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-mist-900">
              Menu
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-sm text-mist-600 transition-colors hover:text-teal-600"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-mist-900">
              Kontak
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-mist-600">
                <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-teal-500" />
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600">
                  {contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-mist-600">
                <Icon name="mail" size={18} className="mt-0.5 shrink-0 text-teal-500" />
                <a href={`mailto:${contact.email}`} className="hover:text-teal-600">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-mist-600">
                <Icon name="mapPin" size={18} className="mt-0.5 shrink-0 text-teal-500" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-mist-600">
                <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-teal-500" />
                <span>{contact.operationalHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-mist-300 pt-6">
          <p className="text-center text-sm text-mist-600">
            &copy; 2026 Perizinan.AdmINdo. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
