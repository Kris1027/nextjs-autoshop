const steps = [
  {
    step: 'Krok 01',
    time: "15'",
    title: 'Wycena przez telefon',
    desc: 'Dzwonisz, opisujesz auto — markę, rocznik, przebieg, stan. Wstępną kwotę podajemy w 15 minut.',
    highlight: false,
  },
  {
    step: 'Krok 02',
    time: '2h',
    title: 'Dojeżdżamy do Ciebie',
    desc: 'Oglądamy auto na miejscu, w tym samym dniu. Nie musisz nigdzie jechać — w razie potrzeby zabieramy własną lawetą.',
    highlight: true,
  },
  {
    step: 'Krok 03',
    time: '—',
    title: 'Gotówka i papiery',
    desc: 'Spisujemy umowę, płacimy gotówką lub przelewem natychmiastowym. Formalności załatwiamy w 15 minut.',
    highlight: false,
  },
];

export default function HowItWorks() {
  return (
    <section className='bg-ink text-white py-24 max-[960px]:py-[72px]'>
      <div className='max-w-[1200px] mx-auto px-8 max-[560px]:px-5'>
        <div className='grid grid-cols-[200px_1fr] gap-12 items-baseline mb-12 max-[960px]:grid-cols-1 max-[960px]:gap-4'>
          <div className='font-mono text-[12px] uppercase tracking-[0.18em] text-white/55 pt-[18px] border-t-2 border-white w-fit'>
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
          {steps.map((s) => (
            <div
              key={s.step}
              className={`border rounded-[16px] p-7 flex flex-col gap-[18px] min-h-[280px] ${
                s.highlight
                  ? 'bg-red border-red'
                  : 'border-white/[0.12] bg-white/[0.03]'
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
