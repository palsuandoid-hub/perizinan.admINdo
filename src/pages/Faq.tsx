import { useState } from 'react';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import { faqs, waLink } from '@/data/content';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-500">
            FAQ
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-mist-900 sm:text-5xl">
            Pertanyaan Umum
          </h1>
          <p className="mt-4 text-lg text-mist-600">
            Temukan jawaban atas pertanyaan yang sering diajukan seputar OSS,
            NIB, Coretax, perpajakan, dan persyaratan dokumen.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={i} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl bg-white shadow-soft ring-1 transition-all ${
                    open ? 'ring-teal-300 shadow-card' : 'ring-mist-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="flex items-center gap-3 font-semibold text-mist-900">
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                        open ? 'bg-teal-500 text-white' : 'bg-teal-50 text-teal-500'
                      }`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {faq.question}
                    </span>
                    <span className={`shrink-0 text-teal-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
                      <Icon name="chevronDown" size={20} />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 pl-16 text-sm leading-relaxed text-mist-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12">
          <div className="rounded-3xl bg-mist-100 p-8 text-center">
            <h3 className="font-display text-xl font-bold text-mist-900">
              Masih ada pertanyaan?
            </h3>
            <p className="mt-2 text-sm text-mist-600">
              Tim kami siap membantu menjawab pertanyaan Anda secara langsung.
            </p>
            <a
              href={waLink('Halo Perizinan.AdmINdo, saya memiliki pertanyaan.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:bg-teal-600 hover:shadow-hover"
            >
              <Icon name="phone" size={18} />
              Tanya via WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
