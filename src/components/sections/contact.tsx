import { phone, phoneLocal, email, contactHours } from '@/lib/data';

export default function Contact() {
  return (
    <section id='kontakt' className='bg-paper-2 py-24 max-[960px]:py-18'>
      <div className='max-w-300 mx-auto px-8 max-[560px]:px-5'>
        <div className='grid grid-cols-[200px_1fr] gap-12 items-baseline mb-12 max-[960px]:grid-cols-1 max-[960px]:gap-4'>
          <div className='font-mono text-[12px] uppercase tracking-[0.18em] text-ink-soft pt-4.5 border-t-2 border-ink w-fit'>
            04 — Kontakt
          </div>
          <h2
            className='font-extrabold leading-none tracking-[-0.03em] m-0 text-balance'
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Zadzwoń.{' '}
            <em className='not-italic text-red'>Reszta to nasza robota.</em>
          </h2>
        </div>

        <div className='grid grid-cols-[1.1fr_0.9fr] gap-16 items-stretch max-[960px]:grid-cols-1 max-[960px]:gap-10'>
          <div className='bg-white rounded-[22px] p-12 border border-line flex flex-col justify-between gap-8 max-[560px]:p-7'>
            <div className='flex flex-col gap-2'>
              <span className='font-mono text-[11px] tracking-[0.18em] uppercase text-ink-soft'>
                Telefon · 7 dni w tygodniu
              </span>
              <div
                className='font-extrabold tracking-[-0.03em] leading-none'
                style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}
              >
                +48 <b className='text-red'>{phoneLocal}</b>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-6 border-t border-line pt-7 max-[560px]:grid-cols-1'>
              <div>
                <span className='block font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft mb-1.5'>
                  E-mail
                </span>
                <b className='text-[15px]'>{email}</b>
              </div>
              <div>
                <span className='block font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft mb-1.5'>
                  Zasięg
                </span>
                <b className='text-[15px]'>Cała Polska</b>
              </div>
              <div>
                <span className='block font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft mb-1.5'>
                  WhatsApp
                </span>
                <b className='text-[15px]'>{phone}</b>
              </div>
              <div>
                <span className='block font-mono text-[10px] tracking-[0.18em] uppercase text-ink-soft mb-1.5'>
                  Forma płatności
                </span>
                <b className='text-[15px]'>Gotówka / BLIK / przelew</b>
              </div>
            </div>
          </div>

          <aside className='bg-ink text-white rounded-[22px] p-10 flex flex-col gap-7 max-[560px]:p-7'>
            <h3 className='m-0 text-[28px] font-extrabold tracking-[-0.02em]'>
              Godziny pracy
            </h3>
            <div className='flex flex-col border-t border-white/12'>
              {contactHours.map(([day, hours]) => (
                <div
                  key={day}
                  className='flex justify-between items-center py-4 border-b border-white/12 text-[15px]'
                >
                  <span className='text-white/65 font-mono text-[13px] tracking-wider'>
                    {day}
                  </span>
                  <b className='font-bold'>{hours}</b>
                </div>
              ))}
            </div>
            <p className='m-0 text-[13px] text-white/65 leading-[1.6]'>
              <i className='not-italic text-red font-bold'>Pilne?</i> Odbieramy
              też poza godzinami — szczególnie przy autach powypadkowych i
              sytuacjach &bdquo;auto musi zniknąć dziś&rdquo;.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
