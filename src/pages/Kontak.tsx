import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import { contact, waLink } from '@/data/content';

export default function Kontak() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Kontak
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-mist-900 sm:text-5xl">
            Hubungi Kami
          </h1>
          <p className="mt-4 text-lg text-mist-600">
            Kami siap membantu kebutuhan perizinan dan perpajakan usaha Anda.
            Jangan ragu untuk menghubungi kami.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              {/* Logo card */}
              <div className="flex items-center gap-3 rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 p-6 text-white shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 font-display text-xl font-bold">
                  P
                </span>
                <div>
                  <div className="font-display text-lg font-bold">
                    PERIZINAN<span className="opacity-80">.AdmINdo</span>
                  </div>
                  <div className="text-sm text-teal-50">Solusi Perizinan &amp; Pajak</div>
                </div>
              </div>

              {/* WhatsApp button */}
              <a
                href={waLink('Halo Perizinan.AdmINdo, saya ingin berkonsultasi.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-3xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-soft transition-all hover:scale-[1.02] hover:shadow-card"
              >
                <Icon name="phone" size={20} />
                Hubungi via WhatsApp
              </a>

              <ContactRow
                icon="phone"
                label="Telepon"
                value={contact.phone}
              />
              <ContactRow
                icon="mail"
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactRow
                icon="mapPin"
                label="Alamat"
                value={contact.address}
              />
              <ContactRow
                icon="clock"
                label="Jam Operasional"
                value={contact.operationalHours}
              />

              {/* Social */}
              <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-mist-200">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-mist-900">
                  Media Sosial
                </h3>
                <div className="mt-4 flex gap-3">
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist-100 text-mist-700 transition-all hover:bg-teal-500 hover:text-white"
                  >
                    <Icon name="instagram" size={20} />
                  </a>
                  <a
                    href={contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist-100 text-mist-700 transition-all hover:bg-teal-500 hover:text-white"
                  >
                    <Icon name="facebook" size={20} />
                  </a>
                  <a
                    href={contact.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist-100 text-mist-700 transition-all hover:bg-teal-500 hover:text-white"
                  >
                    <Icon name="tiktok" size={20} />
                  </a>
                </div>
                <p className="mt-3 text-xs text-mist-500">
                  Instagram: {contact.instagramHandle}
                </p>
              </div>
            </div>
          </Reveal>

          {/* QR Code + Map */}
          <Reveal delay={150} className="lg:col-span-3">
            <div className="flex h-full flex-col gap-6">
              {/* QR Code card */}
              <div className="flex flex-col items-center gap-4 rounded-3xl bg-white p-6 shadow-card ring-1 ring-mist-200 sm:flex-row sm:items-center sm:gap-6">
                <div className="shrink-0">
                  <div className="rounded-2xl bg-white p-3 ring-1 ring-mist-200">
                    <img
                      src={contact.qrCodeUrl}
                      alt="QR Code WhatsApp"
                      width={160}
                      height={160}
                      loading="lazy"
                      className="h-40 w-40 rounded-lg"
                    />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center gap-2 sm:justify-start">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                      <Icon name="phone" size={18} />
                    </span>
                    <h3 className="font-display text-lg font-bold text-mist-900">
                      Scan QR Code
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-mist-600">
                    Scan QR Code untuk Chat WhatsApp Directly — tanpa perlu
                    mengetik nomor secara manual.
                  </p>
                  <a
                    href={waLink('Halo Perizinan.AdmINdo, saya ingin berkonsultasi.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700"
                  >
                    Atau klik di sini
                    <Icon name="arrowRight" size={16} />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="flex flex-1 flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-mist-200">
                <div className="flex items-center gap-2 border-b border-mist-200 px-6 py-4">
                  <Icon name="mapPin" size={20} className="text-teal-500" />
                  <h3 className="font-display font-semibold text-mist-900">
                    Lokasi Kami
                  </h3>
                </div>
                <div className="relative flex-1 min-h-[300px]">
                  <iframe
                    title="Lokasi Perizinan.AdmINdo"
                    src={contact.mapsEmbed}
                    className="absolute inset-0 h-full w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-6">
                  <a
                    href={contact.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700"
                  >
                    Buka di Google Maps
                    <Icon name="arrowRight" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700 px-6 py-12 text-center shadow-hover sm:px-12">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-coral-300/30 blur-3xl" />
            </div>
            <div className="relative z-10 mx-auto max-w-xl">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Konsultasi Sekarang
              </h2>
              <p className="mt-3 text-teal-50">
                Mulai pengurusan legalitas usaha Anda hari ini. Gratis
                konsultasi pertama.
              </p>
              <a
                href={waLink('Halo Perizinan.AdmINdo, saya ingin berkonsultasi.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-bold text-teal-600 shadow-lg transition-all hover:scale-105 hover:bg-teal-50"
              >
                <Icon name="phone" size={20} />
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: Parameters<typeof Icon>[0]['name'];
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-mist-200 transition-all hover:shadow-card hover:ring-teal-200">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-500">
        <Icon name={icon} size={24} />
      </span>
      <div>
        <div className="text-sm font-medium text-mist-500">{label}</div>
        <div className="font-semibold text-mist-900">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
