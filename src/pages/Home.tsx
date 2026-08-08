import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import HeroIllustration from '@/components/HeroIllustration';
import NibTestimonials from '@/components/NibTestimonials';
import { serviceSummaries, advantages, testimonials, faqs, waLink } from '@/data/content';
import type { PageId } from '@/components/Navbar';
import { useState } from 'react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <ServiceSummary onNavigate={onNavigate} />
      <WhyChooseUs />
      <NibTestimonials />
      <TestimonialPreview onNavigate={onNavigate} />
      <FaqPreview onNavigate={onNavigate} />
      <FinalCta />
    </>
  );
}

function Hero({ onNavigate }: HomeProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-teal-50 blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-coral-50 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 ring-1 ring-teal-100">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                </span>
                Melayani seluruh Indonesia
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-mist-900 sm:text-5xl lg:text-6xl">
                Urus Perizinan Usaha &amp; Administrasi Pajak Jadi Lebih Mudah
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist-600">
                Melayani pengurusan OSS, NIB, Coretax, pelaporan pajak, serta
                pendampingan administrasi usaha secara profesional.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink('Halo Perizinan.AdmINdo, saya ingin berkonsultasi.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all hover:bg-teal-600 hover:shadow-hover"
                >
                  <Icon name="phone" size={20} />
                  Konsultasi WhatsApp
                </a>
                <button
                  onClick={() => onNavigate('layanan')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-mist-800 ring-1 ring-mist-300 transition-all hover:bg-mist-100 hover:ring-mist-400"
                >
                  Lihat Layanan
                  <Icon name="arrowRight" size={18} />
                </button>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex items-center gap-6">
                <div>
                  <div className="font-display text-2xl font-bold text-mist-900">500+</div>
                  <div className="text-sm text-mist-500">Klien Dilayani</div>
                </div>
                <div className="h-10 w-px bg-mist-300" />
                <div>
                  <div className="font-display text-2xl font-bold text-mist-900">1-3</div>
                  <div className="text-sm text-mist-500">Hari Proses NIB</div>
                </div>
                <div className="h-10 w-px bg-mist-300" />
                <div>
                  <div className="font-display text-2xl font-bold text-mist-900">100%</div>
                  <div className="text-sm text-mist-500">Online</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <HeroIllustration />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServiceSummary({ onNavigate }: HomeProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Layanan Kami
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-mist-900 sm:text-4xl">
            Solusi Lengkap untuk Legalitas Usaha Anda
          </h2>
          <p className="mt-4 text-lg text-mist-600">
            Empat layanan utama yang mencakup seluruh kebutuhan perizinan dan
            perpajakan usaha Anda.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceSummaries.map((service, i) => (
            <Reveal key={service.id} delay={i * 100}>
              <div
                className={`group relative flex h-full flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-mist-200 transition-all hover:-translate-y-1.5 hover:shadow-hover hover:ring-teal-200 ${
                  service.ctaTarget === 'soon' ? 'opacity-95' : ''
                }`}
              >
                {service.ctaTarget === 'soon' && (
                  <span className="absolute right-4 top-4 rounded-full bg-coral-50 px-3 py-1 text-xs font-semibold text-coral-600 ring-1 ring-coral-200">
                    Segera Hadir
                  </span>
                )}
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 text-teal-500 transition-transform group-hover:scale-110">
                  <Icon name={service.icon} size={28} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-mist-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-600">
                  {service.short}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-mist-700">
                      <Icon name="check" size={16} className="mt-0.5 shrink-0 text-teal-500" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                  {service.items.length > 4 && (
                    <li className="pl-6 text-xs font-medium text-mist-400">
                      +{service.items.length - 4} lainnya
                    </li>
                  )}
                </ul>
                <div className="mt-auto pt-5">
                  <button
                    onClick={() => onNavigate(service.ctaTarget === 'layanan' ? 'layanan' : 'layanan')}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      service.ctaTarget === 'soon'
                        ? 'cursor-default text-mist-400'
                        : 'text-teal-600 hover:text-teal-700'
                    }`}
                  >
                    {service.ctaLabel}
                    {service.ctaTarget !== 'soon' && <Icon name="arrowRight" size={16} />}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-mist-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Keunggulan
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-mist-900 sm:text-4xl">
            Mengapa Memilih Kami
          </h2>
          <p className="mt-4 text-lg text-mist-600">
            Kami berkomitmen memberikan pelayanan terbaik untuk setiap klien.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, i) => (
            <Reveal key={adv.title} delay={i * 80}>
              <div className="group flex h-full items-start gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-mist-200 transition-all hover:-translate-y-1 hover:shadow-card hover:ring-teal-200">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-500 transition-transform group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white">
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
    </section>
  );
}

function TestimonialPreview({ onNavigate }: HomeProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Testimoni
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-mist-900 sm:text-4xl">
            Apa Kata Klien Kami
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-mist-200">
                <Icon name="quote" size={32} className="text-teal-200" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-mist-700">
                  "{t.message}"
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 font-display text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <div className="font-semibold text-mist-900">{t.name}</div>
                    <div className="text-sm text-mist-500">{t.role}</div>
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <button
            onClick={() => onNavigate('testimoni')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700"
          >
            Lihat semua testimoni
            <Icon name="arrowRight" size={16} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function FaqPreview({ onNavigate }: HomeProps) {
  return (
    <section className="bg-mist-100 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-mist-900 sm:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {faqs.slice(0, 4).map((faq, i) => (
            <Reveal key={i} delay={i * 80}>
              <FaqRow question={faq.question} answer={faq.answer} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <button
            onClick={() => onNavigate('faq')}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-600 ring-1 ring-mist-300 transition-all hover:bg-mist-100"
          >
            Lihat semua FAQ
            <Icon name="arrowRight" size={16} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function FaqRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-mist-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-mist-900">{question}</span>
        <span className={`shrink-0 text-teal-500 transition-transform ${open ? 'rotate-180' : ''}`}>
          <Icon name="chevronDown" size={20} />
        </span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-mist-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700 px-6 py-16 text-center shadow-hover sm:px-12 lg:py-20">
            {/* Decorative shapes */}
            <div className="absolute inset-0 -z-0 opacity-20">
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-coral-300/30 blur-3xl" />
            </div>
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Siap Mengurus Legalitas Usaha Anda?
              </h2>
              <p className="mt-4 text-lg text-teal-50">
                Konsultasikan kebutuhan perizinan dan perpajakan usaha Anda
                bersama kami. Gratis konsultasi pertama.
              </p>
              <a
                href={waLink('Halo Perizinan.AdmINdo, saya ingin berkonsultasi.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-bold text-teal-600 shadow-lg transition-all hover:scale-105 hover:bg-teal-50"
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
