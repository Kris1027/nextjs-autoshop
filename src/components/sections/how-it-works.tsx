import { howItWorksSteps } from '@/lib/data';

export default function HowItWorks() {
  return (
    <section className='bg-ink text-white py-24 max-[960px]:py-18'>
      <div className='max-w-300 mx-auto px-8 max-[560px]:px-5'>
        <div className='grid grid-cols-[200px_1fr] gap-12 items-baseline mb-12 max-[960px]:grid-cols-1 max-[960px]:gap-4'>
          <div className='font-mono text-[12px] uppercase tracking-[0.18em] text-white/55 pt-4.5 border-t-2 border-white w-fit'>
            02 — Jak to działa
          </div>
          <h2
            className='font-extrabold leading-none tracking-[-0.03em] m-0 text-white text-balance'
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Trzy kroki.{' '}
            <em className='not-italic text-red'>Maks. 24 godziny.</em>
          </h2>
        </div>

        <div className='grid grid-cols-3 gap-6 max-[960px]:grid-cols-1'>
          {howItWorksSteps.map((s) => (
            <div
              key={s.step}
              className={`border rounded-2xl p-7 flex flex-col gap-4.5 min-h-70 ${
                s.highlight ? 'bg-red border-red' : 'border-white/12 bg-white/3'
              }`}
            >
              <div className='flex justify-between items-center font-mono text-[12px] tracking-[0.18em] uppercase text-white/55'>
                <span>{s.step}</span>
                <b className='text-[56px] font-extrabold tracking-[-0.04em] text-white leading-none font-sans'>
                  {s.time}
                </b>
              </div>
              <h3 className='m-0 text-[24px] font-bold tracking-[-0.01em] text-white'>
                {s.title}
              </h3>
              <p
                className={`m-0 text-[14px] leading-[1.55] ${s.highlight ? 'text-white/85' : 'text-white/70'}`}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
