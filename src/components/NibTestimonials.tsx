import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import { nibTestimonials } from '@/data/content';

export default function NibTestimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            NIB Terbit Resmi
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-mist-900 sm:text-4xl">
            Klien yang Legalitasnya Telah Terbit
          </h2>
          <p className="mt-4 text-lg text-mist-600">
            Bukti nyata legalitas usaha klien kami yang telah berhasil terbit
            resmi melalui sistem OSS.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nibTestimonials.map((item, i) => (
            <Reveal key={item.company} delay={(i % 3) * 100}>
              <article className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-mist-200 transition-all hover:-translate-y-1.5 hover:shadow-hover hover:ring-teal-200">
                {/* Verified badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                    <Icon name="check" size={14} strokeWidth={3} className="text-emerald-600" />
                    NIB Terbit Resmi via OSS
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-soft">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                </div>

                {/* Rating */}
                <div className="mt-4 flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Icon
                      key={s}
                      name="star"
                      size={18}
                      strokeWidth={0}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Review */}
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-mist-700">
                  &ldquo;{item.review}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="mt-5 border-t border-mist-200 pt-5">
                  {/* Company */}
                  <h3 className="font-display text-base font-bold text-mist-900">
                    {item.company}
                  </h3>

                  {/* Meta */}
                  <dl className="mt-3 space-y-1.5 text-xs">
                    <div className="flex items-start gap-2">
                      <dt className="shrink-0 font-medium text-mist-500">Kategori</dt>
                      <dd className="text-mist-700">{item.category}</dd>
                    </div>
                    <div className="flex items-start gap-2">
                      <dt className="shrink-0 font-medium text-mist-500">Lokasi</dt>
                      <dd className="text-mist-700">{item.location}</dd>
                    </div>
                    <div className="flex items-start gap-2">
                      <dt className="shrink-0 font-medium text-mist-500">NIB</dt>
                      <dd className="font-mono font-semibold text-teal-600">
                        {item.nibNo}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
