export const phone = '+48 601 500 160';
export const email = 'kontakt@skupaut.pl';
export const businessName = 'skupAUT';

export const howItWorksSteps = [
  {
    step: 'Krok 01',
    time: "15'",
    title: 'Wycena przez telefon',
    desc: 'Dzwonisz, opisujesz auto — markę, rocznik, przebieg, stan. Wstępną kwotę podajemy w 15 minut.',
    highlight: false,
  },
  {
    step: 'Krok 02',
    time: '2h',
    title: 'Dojeżdżamy do Ciebie',
    desc: 'Oglądamy auto na miejscu, w tym samym dniu. Nie musisz nigdzie jechać — w razie potrzeby zabieramy własną lawetą.',
    highlight: true,
  },
  {
    step: 'Krok 03',
    time: '—',
    title: 'Gotówka i papiery',
    desc: 'Spisujemy umowę, płacimy gotówką lub przelewem natychmiastowym. Formalności załatwiamy w 15 minut.',
    highlight: false,
  },
];

export const whatWeBuyItems = [
  {
    num: '01',
    title: 'Osobowe',
    desc: 'Każda marka i model — od miejskich aut po SUV-y i premium.',
    iconClass: 'bg-paper-2 text-ink',
  },
  {
    num: '02',
    title: 'Dostawcze',
    desc: 'Busy, kontraktowe vany, auta firmowe na fakturę VAT.',
    iconClass: 'bg-ink text-white',
  },
  {
    num: '03',
    title: 'Powypadkowe',
    desc: 'Po stłuczce, po pożarze, do kasacji — wyceniamy każdy stan.',
    iconClass: 'bg-red text-white',
  },
  {
    num: '04',
    title: 'Problematyczne',
    desc: 'Z kredytem, bez OC, bez przeglądu, na obcych znakach — bierzemy.',
    iconClass: 'bg-paper-2 text-ink',
  },
];

export const whyUsReasons = [
  {
    big: '17',
    title: 'Lat doświadczenia',
    desc: 'Od 2009 roku skupujemy auta w całej Polsce. Wiemy ile co naprawdę kosztuje — i nie próbujemy zbijać ceny po przyjeździe.',
  },
  {
    big: '0 zł',
    title: 'Za dojazd i lawetę',
    desc: 'Przyjeżdżamy na nasz koszt, niezależnie od dystansu. Nie ma znaczenia czy auto pali, jeździ, czy stoi w garażu od pięciu lat.',
  },
  {
    big: '24h',
    title: 'Od telefonu do gotówki',
    desc: 'Najczęściej tego samego dnia. W trudniejszych przypadkach maks. doba. Bez przeciągania, bez „oddzwonię".',
  },
  {
    big: '100%',
    title: 'Legalnie i bezpiecznie',
    desc: 'Umowa kupna-sprzedaży, wyrejestrowanie po naszej stronie, raport z bazy CEPIK. Żadnych "cwaniackich" podpisów na kolanie.',
  },
];

export const contactHours = [
  ['Pon - Pt', '9:00 - 16:00'],
  ['Sobota', '9:00 - 16:00'],
  ['Niedziela', '11:00 - 15:00'],
  ['Święta', 'Telefon'],
];

// 0=Sun, 1=Mon, ..., 6=Sat — null means closed that day
export const businessSchedule: Record<
  number,
  { day: string; open: string; close: string } | null
> = {
  0: { day: 'Niedziela', open: '11:00', close: '15:00' },
  1: { day: 'Poniedziałek', open: '09:00', close: '16:00' },
  2: { day: 'Wtorek', open: '09:00', close: '16:00' },
  3: { day: 'Środa', open: '09:00', close: '16:00' },
  4: { day: 'Czwartek', open: '09:00', close: '16:00' },
  5: { day: 'Piątek', open: '09:00', close: '16:00' },
  6: { day: 'Sobota', open: '09:00', close: '16:00' },
};
