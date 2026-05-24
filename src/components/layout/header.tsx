import Image from 'next/image';
import logo from '@public/logo-1.png';
import OpenStatus from './open-status';

export default function Header() {
  return (
    <header className='border-b border-line bg-white sticky top-0 z-10'>
      <div className='max-w-300 mx-auto px-8 max-[560px]:px-5 flex items-center justify-between h-18'>
        <Image src={logo} alt='skup aut logo' height={36} />
        <div className='flex items-center gap-7 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-soft max-[560px]:hidden'>
          <OpenStatus />
        </div>
      </div>
    </header>
  );
}
