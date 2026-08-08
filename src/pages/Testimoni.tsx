import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import NibTestimonials from '@/components/NibTestimonials';
import { testimonials } from '@/data/content';

export default function Testimoni() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Testimoni
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-mist-900 sm:text-5xl">
            Apa Kata Klien Kami
          </h1>
          <p className="mt-4 text-lg text-mist-600">
            Kepercayaan klien adalah prioritas utama kami. Berikut beberapa
            cerita dari mereka yang telah merasakan pelayanan kami.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 100}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-mist-200 transition-all hover:-translate-y-1 hover:shadow-hover hover:ring-teal-200">
                <div className="flex items-center justify-between">
                  <Icon name="quote" size={32} className="text-teal-200" />
                  <div className="flex gap-0.5 text-teal-400">
                    {[...Array(5)].map((_, s) => (
                      <Icon key={s} name="star" size={16} strokeWidth={0} className="fill-teal-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-mist-700">
                  "{t.message}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-mist-200 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 font-display text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <div className="font-semibold text-mist-900">{t.name}</div>
                    <div className="text-sm text-mist-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* NIB verified testimonials */}
        <NibTestimonials />
      </div>
    </section>
  );
}
