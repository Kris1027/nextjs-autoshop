'use client';

import { useNow } from '@/lib/use-now';

export default function CurrentYear() {
  const now = useNow();

  // the static HTML carries the build-time year as a fallback; once the
  // clock hook ticks in on the client, the visitor's actual year takes over
  return (
    <span suppressHydrationWarning>{(now ?? new Date()).getFullYear()}</span>
  );
}
