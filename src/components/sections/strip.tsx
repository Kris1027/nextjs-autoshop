export default function Strip() {
  return (
    <div className="border-t border-b border-line bg-paper-2 overflow-hidden">
      <div className="flex gap-16 py-[18px] whitespace-nowrap font-mono text-[13px] uppercase tracking-[0.18em] text-ink-soft px-8 max-[560px]:px-5">
        <span className="inline-flex items-center gap-16">
          Osobowe{" "}
          <i className="not-italic text-red font-bold">·</i> Dostawcze{" "}
          <i className="not-italic text-red font-bold">·</i> Powypadkowe{" "}
          <i className="not-italic text-red font-bold">·</i> Bez przeglądu{" "}
          <i className="not-italic text-red font-bold">·</i> Z kredytem{" "}
          <i className="not-italic text-red font-bold">·</i> Bez OC{" "}
          <i className="not-italic text-red font-bold">·</i> Niemieckie znaki{" "}
          <i className="not-italic text-red font-bold">·</i> Importowane{" "}
          <i className="not-italic text-red font-bold">·</i> Stare i nowe
        </span>
      </div>
    </div>
  );
}
