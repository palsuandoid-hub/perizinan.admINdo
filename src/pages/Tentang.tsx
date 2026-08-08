import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import { advantages, waLink } from '@/data/content';

export default function Tentang() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Tentang Kami
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-mist-900 sm:text-5xl">
            Mengenal Perizinan.AdmINdo
          </h1>
        </Reveal>

        {/* Story */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-50 to-coral-50 blur-2xl opacity-70" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 p-8 text-white shadow-card">
                    <Icon name="building" size={56} />
                  </div>
                  <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-mist-100 p-6 text-teal-500 shadow-soft ring-1 ring-mist-200">
                    <Icon name="fileText" size={48} />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-coral-50 p-6 text-coral-500 shadow-soft ring-1 ring-coral-100">
                    <Icon name="calculator" size={48} />
                  </div>
                  <div className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-mist-800 to-mist-900 p-8 text-white shadow-card">
                    <Icon name="handshake" size={56} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <h2 className="font-display text-2xl font-bold text-mist-900 sm:text-3xl">
                Solusi mudah perizinan usaha &amp; administrasi perpajakan
              </h2>
              <p className="mt-5 text-base leading-relaxed text-mist-600">
                Perizinan.AdmINdo merupakan penyedia jasa administrasi perizinan
                usaha dan perpajakan yang membantu pelaku usaha memperoleh
                legalitas dengan proses yang mudah, cepat, dan profesional.
              </p>
              <p className="mt-4 text-base leading-relaxed text-mist-600">
                Kami melayani UMKM, pelaku usaha perorangan, CV, PT, yayasan,
                hingga perusahaan dalam pengurusan OSS, NIB, Coretax, pelaporan
                pajak, serta pendampingan administrasi usaha secara menyeluruh.
              </p>
              <p className="mt-4 text-base leading-relaxed text-mist-600">
                Dengan pendekatan yang ramah, transparan, dan pendampingan sampai
                selesai, kami berkomitmen menjadi mitra tepercaya untuk setiap
                tahap perjalanan legalitas usaha Anda.
              </p>
              <a
                href={waLink('Halo Perizinan.AdmINdo, saya ingin berkonsultasi.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:bg-teal-600 hover:shadow-hover"
              >
                <Icon name="phone" size={20} />
                Konsultasi WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <div className="mt-20">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-mist-900">
              Nilai yang Kami Pegang
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((adv, i) => (
              <Reveal key={adv.title} delay={i * 80}>
                <div className="group flex h-full items-start gap-4 rounded-3xl bg-mist-100 p-6 transition-all hover:bg-white hover:shadow-card">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-500 text-white transition-transform group-hover:scale-110">
                    <Icon name={adv.icon} size={24} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-mist-900">
                      {adv.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-mist-600">
                      {adv.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
