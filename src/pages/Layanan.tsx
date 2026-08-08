import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import { serviceDetails, waLink } from '@/data/content';

export default function Layanan() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            Layanan
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-mist-900 sm:text-5xl">
            Layanan Kami
          </h1>
          <p className="mt-4 text-lg text-mist-600">
            Empat layanan utama untuk memenuhi seluruh kebutuhan perizinan dan
            perpajakan usaha Anda.
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {serviceDetails.map((service, i) => (
            <Reveal key={service.id} delay={i * 100}>
              <article
                className={`overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-mist-200 transition-all hover:shadow-hover ${
                  service.soon ? 'opacity-95' : ''
                }`}
              >
                <div className="grid lg:grid-cols-5">
                  {/* Left panel */}
                  <div className="relative flex flex-col justify-between bg-gradient-to-br from-teal-50 to-mist-100 p-8 lg:col-span-2 lg:p-10">
                    <div>
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-soft">
                        <Icon name={service.icon} size={32} />
                      </span>
                      <h2 className="mt-5 font-display text-2xl font-bold text-mist-900">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-mist-600">
                        {service.tagline}
                      </p>
                    </div>
                    {service.soon ? (
                      <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-coral-50 px-4 py-2 text-sm font-semibold text-coral-600 ring-1 ring-coral-200">
                        <Icon name="sparkle" size={16} />
                        Coming Soon
                      </span>
                    ) : (
                      <a
                        href={waLink(`Halo Perizinan.AdmINdo, saya tertarik dengan layanan ${service.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-teal-600 hover:shadow-hover"
                      >
                        <Icon name="phone" size={18} />
                        {service.ctaLabel}
                      </a>
                    )}
                  </div>

                  {/* Right panel */}
                  <div className="p-8 lg:col-span-3 lg:p-10">
                    <div>
                      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-teal-500">
                        Sub-layanan
                      </h3>
                      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                        {service.subServices.map((sub) => (
                          <li key={sub} className="flex items-start gap-2 text-sm text-mist-700">
                            <Icon name="check" size={16} className="mt-0.5 shrink-0 text-teal-500" strokeWidth={2.5} />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 border-t border-mist-200 pt-6">
                      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-coral-500">
                        Persyaratan Dokumen
                      </h3>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {service.requirements.map((req) => (
                          <li
                            key={req}
                            className="rounded-lg bg-mist-100 px-3 py-1.5 text-sm text-mist-700"
                          >
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
