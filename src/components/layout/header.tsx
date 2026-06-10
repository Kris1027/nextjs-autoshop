import Image from 'next/image';
import logo from '@public/logo-1.png';
import { phone } from '@/lib/data';
import LiveClock from './live-clock';

export default function Header() {
  return (
    <header className='border-b border-line bg-white sticky top-0 z-10'>
      <div className='max-w-300 mx-auto px-8 max-[560px]:px-5 flex items-center justify-between h-18'>
        <Image src={logo} alt='skup aut logo' height={36} />
        <div className='flex items-center gap-7 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-soft max-[560px]:hidden'>
          <LiveClock show='open-status' />
        </div>
        <a
          href={`tel:${phone.replace(/\s/g, '')}`}
          className='hidden max-[560px]:inline-flex items-center whitespace-nowrap bg-red hover:bg-red-deep text-white px-4 py-2 rounded-full font-mono font-bold text-[13px] tracking-[0.04em] transition-colors'
        >
          {phone}
        </a>
      </div>
    </header>
  );
}
