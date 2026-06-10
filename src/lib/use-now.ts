'use client';

import { useSyncExternalStore } from 'react';

const MINUTE = 60_000;

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, MINUTE);
  return () => clearInterval(id);
}

const getMinute = () => Math.floor(Date.now() / MINUTE);
const getServerMinute = () => null;

// current client time, re-rendering every minute; `null` during prerender
// and the hydration pass so build-time values never reach the screen
export function useNow(): Date | null {
  const minute = useSyncExternalStore(subscribe, getMinute, getServerMinute);
  return minute === null ? null : new Date();
}
