'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();

export default function CurrentYear() {
  // the prerendered HTML bakes in the build-time year (server snapshot);
  // after hydration React swaps in the visitor's current year
  const year = useSyncExternalStore(subscribe, getYear, getYear);

  return <span>{year}</span>;
}
