import Image from "next/image";
import logo from "@public/logo.png";

export default function Hero() {
  return (
    <section className="py-20 pb-14 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8 max-[560px]:px-5 grid grid-cols-[1.15fr_0.85fr] gap-16 items-end max-[960px]:grid-cols-1 max-[960px]:gap-10">
        <div>
          <div className="flex items-center gap-[14px] font-mono text-[12px] uppercase tracking-[0.18em] text-ink-soft mb-7">
            <span className="block h-px w-12 bg-ink" />
            Skup samochodów · od 2009
          </div>

          <h1
            className="font-extrabold leading-[0.92] tracking-[-0.035em] m-0 mb-7 text-balance"
            style={{ fontSize: "clamp(56px, 8vw, 116px)" }}
          >
            Kupujemy <em className="not-italic text-red">każde auto.</em>
            <br />
            Gotówka od ręki.
          </h1>

          <p className="text-[19px] text-ink-soft max-w-[46ch] m-0 mb-9">
            Bez ogłoszeń, bez negocjacji po tygodniu. Dzwonisz — przyjeżdżamy
            — płacimy. Każda marka, każdy rocznik, każdy stan techniczny.
          </p>

          <div className="flex gap-[14px] flex-wrap items-center">
            <a
              href="tel:+48601500160"
              className="bg-red text-white px-[26px] py-[18px] rounded-[14px] font-bold text-[17px] inline-flex items-center gap-[14px]"
              style={{
                boxShadow:
                  "0 1px 0 rgba(0,0,0,.04), 0 12px 24px -8px rgba(230,51,41,.45)",
              }}
            >
              <span>Zadzwoń teraz</span>
              <span className="font-mono font-medium opacity-[0.92]">
                +48 601 500 160
              </span>
            </a>
          </div>
        </div>

        <aside className="bg-white border border-line rounded-[18px] p-7 relative">
          <div className="absolute top-[-14px] right-6 bg-ink text-white font-mono text-[11px] uppercase tracking-[0.16em] px-3 py-[6px] rounded-full">
            Wizytówka
          </div>

          <div className="w-full aspect-square bg-white rounded-[12px] flex items-center justify-center border border-dashed border-line">
            <Image
              src={logo}
              alt="skupAUT — +48 601 500 160"
              className="max-w-[78%] max-h-[78%] object-contain"
              placeholder="blur"
            />
          </div>

          <div className="grid grid-cols-2 gap-[18px] mt-[22px] text-[13px]">
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft mb-1">
                Telefon
              </span>
              <b>+48 601 500 160</b>
            </div>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft mb-1">
                E-mail
              </span>
              <b>kontakt@skupaut.pl</b>
            </div>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft mb-1">
                Zasięg
              </span>
              <b>Cała Polska</b>
            </div>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft mb-1">
                Płatność
              </span>
              <b>Gotówka / przelew</b>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
