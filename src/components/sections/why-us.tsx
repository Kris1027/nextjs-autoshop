const reasons = [
  {
    big: '17',
    title: 'Lat doświadczenia',
    desc: 'Od 2009 roku skupujemy auta w całej Polsce. Wiemy ile co naprawdę kosztuje — i nie próbujemy zbijać ceny po przyjeździe.',
  },
  {
    big: '0 zł',
    title: 'Za dojazd i lawetę',
    desc: 'Przyjeżdżamy na nasz koszt, niezależnie od dystansu. Nie ma znaczenia czy auto pali, jeździ, czy stoi w garażu od pięciu lat.',
  },
  {
    big: '24h',
    title: 'Od telefonu do gotówki',
    desc: 'Najczęściej tego samego dnia. W trudniejszych przypadkach maks. doba. Bez przeciągania, bez „oddzwonię”.',
  },
  {
    big: '100%',
    title: 'Legalnie i bezpiecznie',
    desc: 'Umowa kupna-sprzedaży, wyrejestrowanie po naszej stronie, raport z bazy CEPIK. Żadnych "cwaniackich" podpisów na kolanie.',
  },
];

export default function WhyUs() {
  return (
    <section id='dlaczego' className='py-24 max-[960px]:py-18'>
      <div className='max-w-300 mx-auto px-8 max-[560px]:px-5'>
        <div className='grid grid-cols-[200px_1fr] gap-12 items-baseline mb-12 max-[960px]:grid-cols-1 max-[960px]:gap-4'>
          <div className='font-mono text-[12px] uppercase tracking-[0.18em] text-ink-soft pt-4.5 border-t-2 border-ink w-fit'>
            03 — Dlaczego my
          </div>
          <h2
            className='font-extrabold leading-none tracking-[-0.03em] m-0 text-balance'
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Bez ściemy. <em className='not-italic text-red'>Bez czekania.</em>
          </h2>
        </div>

        <div className='grid grid-cols-2 gap-px bg-line border border-line rounded-[18px] overflow-hidden max-[960px]:grid-cols-1'>
          {reasons.map((r) => (
            <div
              key={r.title}
              className='bg-white p-9 grid grid-cols-[80px_1fr] gap-6 items-start'
            >
              <div className='text-[56px] font-extrabold tracking-[-0.04em] leading-none text-red'>
                {r.big}
              </div>
              <div>
                <h3 className='m-0 mb-1.5 text-[20px] font-bold tracking-[-0.01em]'>
                  {r.title}
                </h3>
                <p className='m-0 text-ink-soft text-[14px] leading-[1.6]'>
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
