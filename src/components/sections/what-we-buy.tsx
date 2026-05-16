const items = [
  {
    num: "01",
    title: "Osobowe",
    desc: "Każda marka i model — od miejskich aut po SUV-y i premium.",
    iconClass: "bg-paper-2 text-ink",
  },
  {
    num: "02",
    title: "Dostawcze",
    desc: "Busy, kontraktowe vany, auta firmowe na fakturę VAT.",
    iconClass: "bg-ink text-white",
  },
  {
    num: "03",
    title: "Powypadkowe",
    desc: "Po stłuczce, po pożarze, do kasacji — wyceniamy każdy stan.",
    iconClass: "bg-red text-white",
  },
  {
    num: "04",
    title: "Problematyczne",
    desc: "Z kredytem, bez OC, bez przeglądu, na obcych znakach — bierzemy.",
    iconClass: "bg-paper-2 text-ink",
  },
];

export default function WhatWeBuy() {
  return (
    <section id="co-kupujemy" className="py-24 max-[960px]:py-[72px]">
      <div className="max-w-[1200px] mx-auto px-8 max-[560px]:px-5">
        <div className="grid grid-cols-[200px_1fr] gap-12 items-baseline mb-12 max-[960px]:grid-cols-1 max-[960px]:gap-4">
          <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-soft pt-[18px] border-t-2 border-ink w-fit">
            01 — Oferta
          </div>
          <h2
            className="font-extrabold leading-none tracking-[-0.03em] m-0 text-balance"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Kupujemy{" "}
            <em className="not-italic text-red">dosłownie wszystko</em> co ma
            cztery koła.
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-px bg-line border border-line rounded-[18px] overflow-hidden max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
          {items.map((item) => (
            <div
              key={item.num}
              className="bg-white px-6 pt-7 pb-8 min-h-[220px] flex flex-col justify-between"
            >
              <div
                className={`w-11 h-11 rounded-[10px] flex items-center justify-center font-mono text-[13px] font-semibold ${item.iconClass}`}
              >
                {item.num}
              </div>
              <div>
                <h3 className="m-0 text-[22px] font-bold tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="mt-2 mb-0 text-ink-soft text-[14px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
