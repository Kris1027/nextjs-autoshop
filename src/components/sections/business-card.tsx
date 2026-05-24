import Image from 'next/image';
import logo from '@public/logo.png';
import { phone, email } from '@/lib/data';

const fields = [
  { label: 'Telefon', value: phone },
  { label: 'E-mail', value: email },
  { label: 'Zasięg', value: 'Cała Polska' },
  { label: 'Płatność', value: 'Gotówka / przelew' },
];

export default function BusinessCard() {
  return (
    <aside className='bg-white border border-line rounded-2xl p-6 relative'>
      <div className='absolute top-3.5 right-5 bg-ink text-white font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full'>
        Wizytówka
      </div>

      <div className='w-full aspect-square bg-white rounded-xl flex items-center justify-center border border-dashed border-line'>
        <Image
          src={logo}
          alt={`RabaTrans — ${phone}`}
          className='max-w-4/5 max-h-4/5 object-contain'
          placeholder='blur'
        />
      </div>

      <div className='grid grid-cols-2 gap-4 mt-5 text-sm'>
        {fields.map(({ label, value }) => (
          <div key={label}>
            <span className='block font-mono text-[10px] uppercase tracking-widest text-ink-soft mb-1'>
              {label}
            </span>
            <b>{value}</b>
          </div>
        ))}
      </div>
    </aside>
  );
}
