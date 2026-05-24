'use client';

import { businessSchedule } from '@/lib/data';

function getWarsawDate(): Date {
  return new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Europe/Warsaw' })
  );
}

function toMinutes(t: string): number {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

export default function OpenStatus() {
  const now = getWarsawDate();
  const schedule = businessSchedule[now.getDay()];

  const current = now.getHours() * 60 + now.getMinutes();
  const isOpen =
    !!schedule &&
    current >= toMinutes(schedule.open) &&
    current < toMinutes(schedule.close);
  const beforeOpen = !!schedule && current < toMinutes(schedule.open);

  const statusText = isOpen
    ? 'Teraz czynne'
    : beforeOpen
      ? `Nieczynne — otwieramy od ${schedule!.open}`
      : 'Nieczynne — do zobaczenia jutro';

  return (
    <>
      <span className='flex items-center'>
        <span
          className={`inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle animate-pulse ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}
        />
        {statusText}
      </span>
      <span>
        {schedule
          ? `${schedule.day} · ${schedule.open}-${schedule.close}`
          : 'Zamknięte'}
      </span>
    </>
  );
}
