export default function Header() {
  return (
    <header className='border-b border-line bg-paper sticky top-0 z-10'>
      <div className='max-w-300 mx-auto px-8 max-[560px]:px-5 flex items-center justify-between h-18'>
        <div className='flex items-center gap-2.5 font-extrabold tracking-[-0.01em] text-[20px]'>
          Raba<b className='text-red'>Trans</b>
        </div>

        <div className='flex items-center gap-7 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-soft max-[560px]:hidden'>
          <span className='flex items-center'>
            <span className='inline-block w-1.5 h-1.5 rounded-full bg-[#3ec07a] mr-2 align-middle' />
            Czynne — odbieramy telefon
          </span>
          <span>PN–ND · 8:00–22:00</span>
        </div>

        <a
          href='tel:+48601500160'
          className="inline-flex items-center gap-2.5 bg-ink text-white px-4 py-2.5 rounded-full font-bold text-[14px] tracking-[0.01em] before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-red"
        >
          +48 601 500 160
        </a>
      </div>
    </header>
  );
}
