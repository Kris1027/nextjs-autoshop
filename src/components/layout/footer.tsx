import Image from 'next/image';
import logo from '@public/logo-1.png';
import { phone } from '@/lib/data';

export default function Footer() {
  return (
    <footer className='py-12 border-t border-line bg-white'>
      <div className='max-w-300 mx-auto px-8 max-[560px]:px-5 flex justify-between items-center gap-6 max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft leading-relaxed'>
        <Image src={logo} alt='skup aut logo' height={28} />
        <div>© {new Date().getFullYear()} · Wszystkie prawa zastrzeżone</div>
        <div>{phone}</div>
      </div>
    </footer>
  );
}
