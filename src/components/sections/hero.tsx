import { phone } from '@/lib/data';

export default function Hero() {
  return (
    <section className='min-h-svh flex items-center overflow-hidden'>
      <div className='w-full max-w-300 mx-auto px-8 max-[560px]:px-5 py-20'>
        <div>
          <div className='flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-ink-soft mb-7'>
            <span className='block h-px w-12 bg-ink' />
            Skup samochodów · od 2022
          </div>

          <h1 className='font-extrabold leading-28 tracking-tighter m-0 mb-7 text-balance text-[clamp(56px,8vw,116px)]'>
            Kupujemy <em className='not-italic text-red'>każde auto.</em>
            <br />
            Gotówka od ręki.
          </h1>

          <p className='text-lg leading-relaxed text-ink-soft max-w-xl m-0 mb-9 text-pretty'>
            Bez ogłoszeń, bez negocjacji po tygodniu. Dzwonisz - przyjeżdżamy.
            Każda marka, każdy rocznik, każdy stan techniczny.
          </p>

          <div className='flex gap-3.5 flex-wrap items-center'>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className='inline-flex items-center gap-3 bg-red hover:bg-red-deep text-white px-6 py-3.5 rounded-full font-bold text-[16px] tracking-[0.01em] transition-colors'
            >
              <span>Zadzwoń teraz</span>
              <span className='font-mono font-medium'>{phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
