import { stripItems } from '@/lib/data';

export default function Strip() {
  return (
    <div className='border-t border-b border-line bg-paper-2 overflow-hidden'>
      <div className='flex w-max gap-16 py-4.5 whitespace-nowrap font-mono text-[13px] uppercase tracking-[0.18em] text-ink-soft animate-marquee motion-reduce:animate-none'>
        {[0, 1].map((copy) => (
          <span
            key={copy}
            aria-hidden={copy === 1}
            className='inline-flex items-center gap-16'
          >
            {stripItems.map((item) => (
              <span key={item} className='inline-flex items-center gap-16'>
                {item}
                <i className='not-italic text-red font-bold'>·</i>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
