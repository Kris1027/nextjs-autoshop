'use client';

import { businessSchedule } from '@/lib/data';
import { useNow } from '@/lib/use-now';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getWarsawParts(date: Date): {
  dayOfWeek: number;
  minutesFromMidnight: number;
} {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Warsaw',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? '0';
  return {
    dayOfWeek: WEEKDAYS.indexOf(get('weekday')),
    minutesFromMidnight: parseInt(get('hour')) * 60 + parseInt(get('minute')),
  };
}

function toMinutes(t: string): number {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

export default function OpenStatus() {
  const now = useNow();

  // nothing to show until the client clock is available - the prerendered
  // HTML is built at deploy time, so a server-rendered status would be stale
  if (!now) return null;

  const { dayOfWeek, minutesFromMidnight } = getWarsawParts(now);
  const schedule = businessSchedule[dayOfWeek];

  const current = minutesFromMidnight;
  const isOpen =
    !!schedule &&
    current >= toMinutes(schedule.open) &&
    current < toMinutes(schedule.close);
  const beforeOpen = !!schedule && current < toMinutes(schedule.open);

  const statusText = isOpen
    ? 'Teraz czynne'
    : beforeOpen
      ? `Nieczynne - otwieramy od ${schedule!.open}`
      : 'Nieczynne - do zobaczenia jutro';

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
