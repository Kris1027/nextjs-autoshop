import { phone, businessName } from '@/lib/data';

export default function Footer() {
  return (
    <footer className='py-12 border-t border-line'>
      <div className='max-w-300 mx-auto px-8 max-[560px]:px-5 flex justify-between items-center gap-6 max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft leading-relaxed'>
        <div>
          © 2009–2026 <b className='text-ink'>{businessName}</b> · Wszystkie
          prawa zastrzeżone
        </div>
        <div>Skup samochodów · Polska · {phone}</div>
      </div>
    </footer>
  );
}
