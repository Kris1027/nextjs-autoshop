import Image from 'next/image';
import logo from '@public/logo-1.png';
import { phone } from '@/lib/data';
import OpenStatus from './open-status';

export default function Header() {
  return (
    <header className='border-b border-line bg-white sticky top-0 z-10'>
      <div className='max-w-300 mx-auto px-8 max-[560px]:px-5 flex items-center justify-between h-18'>
        <Image src={logo} alt='RabaTrans' height={36} />

        <div className='flex items-center gap-7 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-soft max-[560px]:hidden'>
          <OpenStatus />
        </div>

        <a
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="inline-flex items-center gap-2.5 bg-ink text-white px-4 py-2.5 rounded-full font-bold text-[14px] tracking-[0.01em] before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-red"
        >
          {phone}
        </a>
      </div>
    </header>
  );
}
