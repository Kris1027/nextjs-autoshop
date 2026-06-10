import Link from 'next/link';
import { phone, phoneHref } from '@/lib/data';

export default function NotFound() {
  return (
    <main className='min-h-svh flex items-center'>
      <div className='w-full max-w-300 mx-auto px-8 max-[560px]:px-5 py-20'>
        <div className='flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] text-ink-soft mb-7'>
          <span className='block h-px w-12 bg-ink' />
          Błąd 404
        </div>

        <h1 className='font-extrabold leading-[0.97] tracking-tighter m-0 mb-7 text-balance text-[clamp(48px,8vw,116px)]'>
          Tej strony <em className='not-italic text-red'>nie ma.</em>
        </h1>

        <p className='text-lg leading-relaxed text-ink-soft max-w-xl m-0 mb-9 text-pretty'>
          Ale auto kupimy każde. Wróć na stronę główną albo zadzwoń.
        </p>

        <div className='flex gap-3.5 flex-wrap items-center'>
          <Link
            href='/'
            className='inline-flex items-center whitespace-nowrap bg-ink hover:bg-black text-white px-6 py-3.5 rounded-full font-bold text-[16px] tracking-[0.01em] transition-colors'
          >
            Strona główna
          </Link>
          <a
            href={phoneHref}
            className='inline-flex flex-wrap justify-center items-center gap-x-3 gap-y-1 bg-red hover:bg-red-deep text-white px-6 py-3.5 rounded-full font-bold text-[16px] tracking-[0.01em] transition-colors'
          >
            <span className='whitespace-nowrap'>Zadzwoń teraz</span>
            <span className='font-mono font-medium whitespace-nowrap'>
              {phone}
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
