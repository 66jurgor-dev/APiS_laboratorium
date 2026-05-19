const drawingSet = {
  soilProbe:
    '<svg viewBox="0 0 120 90"><rect x="13" y="66" width="94" height="12" rx="6" fill="#b7d6be"/><path d="M28 68h64" stroke="#7a8d5a" stroke-width="5"/><rect x="56" y="8" width="8" height="58" rx="4" fill="#64748b"/><path d="M46 18h28" stroke="#334155" stroke-width="6"/><path d="M50 66h20l-10 13z" fill="#475569"/><circle cx="82" cy="62" r="5" fill="#8b5e34"/></svg>',
  waterPump:
    '<svg viewBox="0 0 120 90"><path d="M16 62c18-19 42-14 57-5 12 7 21 3 31-8v28H16z" fill="#bae6fd"/><path d="M21 49h42v20H21z" fill="#334155"/><circle cx="34" cy="59" r="9" fill="#38bdf8"/><rect x="62" y="54" width="31" height="8" rx="4" fill="#64748b"/><path d="M92 58c7 0 9-10 16-10" stroke="#475569" stroke-width="5"/></svg>',
  airPump:
    '<svg viewBox="0 0 120 90"><rect x="19" y="38" width="52" height="28" rx="8" fill="#c7d2fe"/><circle cx="38" cy="52" r="13" fill="#4338ca"/><circle cx="38" cy="52" r="6" fill="#eef2ff"/><rect x="68" y="46" width="28" height="10" rx="5" fill="#64748b"/><path d="M94 51c10 0 9-16 3-22" stroke="#64748b" stroke-width="5"/><path d="M22 70h48" stroke="#334155" stroke-width="5"/></svg>',
  jar:
    '<svg viewBox="0 0 120 90"><rect x="42" y="15" width="36" height="10" rx="3" fill="#64748b"/><path d="M39 25h42l-4 52H43z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="3"/><path d="M43 54h34v23H43z" fill="#7dd3fc"/><rect x="47" y="35" width="26" height="12" rx="3" fill="#fff" opacity=".8"/></svg>',
  bottle:
    '<svg viewBox="0 0 120 90"><rect x="50" y="9" width="20" height="14" rx="3" fill="#475569"/><path d="M47 23h26v13l9 10v29a7 7 0 0 1-7 7H45a7 7 0 0 1-7-7V46l9-10z" fill="#dbeafe" stroke="#60a5fa" stroke-width="3"/><path d="M39 58h42v18H39z" fill="#93c5fd"/><path d="M48 42h24" stroke="#2563eb" stroke-width="4"/></svg>',
  sorbent:
    '<svg viewBox="0 0 120 90"><rect x="22" y="39" width="76" height="13" rx="7" fill="#e2e8f0" stroke="#64748b" stroke-width="3"/><rect x="42" y="32" width="36" height="27" rx="6" fill="#fef3c7"/><circle cx="50" cy="45" r="3" fill="#92400e"/><circle cx="60" cy="45" r="3" fill="#92400e"/><circle cx="70" cy="45" r="3" fill="#92400e"/><path d="M16 45h12M92 45h12" stroke="#475569" stroke-width="5"/></svg>',
  cooler:
    '<svg viewBox="0 0 120 90"><rect x="24" y="30" width="72" height="43" rx="9" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/><path d="M40 30v-8h40v8" stroke="#1d4ed8" stroke-width="6"/><path d="M24 45h72" stroke="#60a5fa" stroke-width="4"/><path d="M55 50h10M60 45v20" stroke="#1d4ed8" stroke-width="5"/></svg>',
  transferLine:
    '<svg viewBox="0 0 120 90"><path d="M19 58c17-24 32-24 48 0s27 24 38 0" fill="none" stroke="#f97316" stroke-width="10"/><path d="M19 58c17-24 32-24 48 0s27 24 38 0" fill="none" stroke="#78350f" stroke-width="4"/><rect x="25" y="30" width="18" height="12" rx="3" fill="#fdba74"/><rect x="77" y="30" width="18" height="12" rx="3" fill="#fdba74"/></svg>',
  pipette:
    '<svg viewBox="0 0 120 90"><path d="M77 10 91 24 39 76 25 62z" fill="#c4b5fd" stroke="#6d28d9" stroke-width="3"/><path d="M84 17 96 5" stroke="#6d28d9" stroke-width="7"/><path d="M34 67l-8 14" stroke="#2563eb" stroke-width="5"/><circle cx="24" cy="82" r="4" fill="#38bdf8"/></svg>',
  stirrer:
    '<svg viewBox="0 0 120 90"><rect x="26" y="59" width="68" height="18" rx="6" fill="#475569"/><path d="M43 22h34l-5 37H48z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="3"/><path d="M49 47c8 5 16-5 24 0" stroke="#0ea5e9" stroke-width="4"/><path d="M51 67h18" stroke="#e2e8f0" stroke-width="4"/></svg>',
  filter:
    '<svg viewBox="0 0 120 90"><path d="M28 17h64L66 49v25H54V49z" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/><path d="M38 27h44M44 36h32" stroke="#60a5fa" stroke-width="4"/><circle cx="60" cy="79" r="5" fill="#38bdf8"/></svg>',
  reagent:
    '<svg viewBox="0 0 120 90"><rect x="48" y="10" width="24" height="9" rx="3" fill="#475569"/><path d="M49 19h22v15l12 37a7 7 0 0 1-7 9H44a7 7 0 0 1-7-9l12-37z" fill="#fde68a" stroke="#d97706" stroke-width="3"/><path d="M42 61h36" stroke="#f59e0b" stroke-width="15"/><circle cx="56" cy="50" r="4" fill="#fff7ed"/></svg>',
  oven:
    '<svg viewBox="0 0 120 90"><rect x="31" y="13" width="58" height="64" rx="8" fill="#e2e8f0" stroke="#64748b" stroke-width="3"/><rect x="40" y="26" width="40" height="26" rx="4" fill="#fff7ed"/><path d="M46 38h28" stroke="#f97316" stroke-width="4"/><circle cx="46" cy="63" r="4" fill="#334155"/><circle cx="60" cy="63" r="4" fill="#334155"/><circle cx="74" cy="63" r="4" fill="#334155"/></svg>',
  mill:
    '<svg viewBox="0 0 120 90"><rect x="36" y="15" width="48" height="62" rx="8" fill="#d1d5db" stroke="#4b5563" stroke-width="3"/><circle cx="60" cy="44" r="17" fill="#94a3b8"/><circle cx="60" cy="44" r="7" fill="#334155"/><path d="M45 73h30" stroke="#334155" stroke-width="5"/></svg>',
  balance:
    '<svg viewBox="0 0 120 90"><rect x="28" y="55" width="64" height="22" rx="6" fill="#cbd5e1" stroke="#475569" stroke-width="3"/><rect x="43" y="35" width="34" height="18" rx="4" fill="#f8fafc"/><path d="M40 35h40l-6-18H46z" fill="#e2e8f0"/><path d="M49 66h22" stroke="#2563eb" stroke-width="4"/></svg>',
  microwave:
    '<svg viewBox="0 0 120 90"><rect x="20" y="21" width="80" height="49" rx="8" fill="#e2e8f0" stroke="#475569" stroke-width="3"/><rect x="30" y="31" width="39" height="29" rx="4" fill="#dbeafe"/><path d="M36 45c8-7 17 7 26 0" stroke="#2563eb" stroke-width="4"/><circle cx="83" cy="36" r="4" fill="#0f766e"/><circle cx="83" cy="51" r="4" fill="#334155"/></svg>',
  electrode:
    '<svg viewBox="0 0 120 90"><rect x="54" y="12" width="12" height="52" rx="6" fill="#475569"/><path d="M60 64v12" stroke="#38bdf8" stroke-width="6"/><path d="M40 72h40" stroke="#0ea5e9" stroke-width="9"/><path d="M28 46c12 5 21 5 32 0s20-5 32 0" stroke="#bae6fd" stroke-width="5"/></svg>',
  uvvis:
    '<svg viewBox="0 0 120 90"><rect x="19" y="27" width="82" height="42" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/><rect x="31" y="38" width="30" height="19" rx="3" fill="#fff"/><path d="M34 55 44 43l8 8 7-10" stroke="#2563eb" stroke-width="4"/><rect x="70" y="38" width="18" height="19" rx="3" fill="#bfdbfe"/></svg>',
  aas:
    '<svg viewBox="0 0 120 90"><rect x="24" y="31" width="72" height="34" rx="7" fill="#e5e7eb" stroke="#4b5563" stroke-width="3"/><path d="M37 31V18h46v13" stroke="#64748b" stroke-width="5"/><path d="M45 53c6-13 23-13 30 0" stroke="#f97316" stroke-width="6"/><circle cx="87" cy="48" r="4" fill="#2563eb"/></svg>',
  ftir:
    '<svg viewBox="0 0 120 90"><rect x="20" y="24" width="80" height="45" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="3"/><path d="M31 55 43 41l11 12 10-17 15 19" stroke="#15803d" stroke-width="5"/><rect x="78" y="35" width="14" height="22" rx="3" fill="#bbf7d0"/></svg>',
  icp:
    '<svg viewBox="0 0 120 90"><rect x="25" y="17" width="70" height="60" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/><path d="M41 30h38M41 42h25M41 54h38" stroke="#1d4ed8" stroke-width="5"/><path d="M47 77v7M73 77v7" stroke="#475569" stroke-width="5"/><circle cx="80" cy="42" r="5" fill="#38bdf8"/></svg>',
  gcms:
    '<svg viewBox="0 0 120 90"><rect x="18" y="23" width="38" height="49" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="3"/><rect x="64" y="16" width="38" height="56" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/><path d="M56 48h8" stroke="#475569" stroke-width="5"/><path d="M27 58h20M73 31h20M73 43h12" stroke="#475569" stroke-width="4"/></svg>',
  standards:
    '<svg viewBox="0 0 120 90"><rect x="29" y="18" width="18" height="53" rx="6" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/><rect x="51" y="10" width="18" height="61" rx="6" fill="#ccfbf1" stroke="#0f766e" stroke-width="3"/><rect x="73" y="25" width="18" height="46" rx="6" fill="#fde68a" stroke="#d97706" stroke-width="3"/><path d="M31 51h14M53 43h14M75 55h14" stroke="#fff" stroke-width="4"/></svg>',
};

const stages = [
  { id: "sampling", label: "Pobranie / zabezpieczenie / transport próbki", short: "Etap 1", drawing: "soilProbe" },
  { id: "prep", label: "Przygotowanie do analizy", short: "Etap 2", drawing: "microwave" },
  { id: "measurement", label: "Pomiar", short: "Start", drawing: "icp", special: true },
  { id: "quality", label: "Oznaczenie i kontrola jakości", short: "Etap 3", drawing: "standards" },
];

const reservoirs = [
  { id: "devices", label: "Urządzenia", short: "", drawing: "icp" },
  { id: "materials", label: "Materiały", short: "", drawing: "jar" },
  { id: "quality", label: "Jakość", short: "", drawing: "standards" },
];

const materials = [
  { id: "container", category: "materials", defaultStage: "sampling", drawing: "jar", name: "Pojemnik / szkło lab.", desc: "Uniwersalne zabezpieczenie próbki.", cost: 10, risk: 0 },
  { id: "tedlar", category: "materials", defaultStage: "sampling", drawing: "bottle", name: "Worek Tedlara", desc: "Pobór i transport próbek gazowych.", cost: 20, risk: 0 },
  { id: "reagent", category: "materials", defaultStage: "prep", drawing: "reagent", name: "Odczynnik", desc: "Reakcja barwna lub mineralizacja.", cost: 100, risk: 2 },
  { id: "impinger", category: "materials", defaultStage: "sampling", drawing: "bottle", name: "Płuczka (impinger)", desc: "Pochłanianie składników gazowych.", cost: 150, risk: 1 },
  { id: "lle", category: "materials", defaultStage: "prep", drawing: "filter", name: "Lejek rozdzielczy (LLE)", desc: "Ekstrakcja ciecz-ciecz.", cost: 200, risk: 1 },
  { id: "ph-electrode", category: "materials", defaultStage: "measurement", acceptedStages: ["measurement", "prep"], drawing: "electrode", name: "Elektroda pH", desc: "Oznaczanie odczynu.", cost: 200, risk: 0 },
  { id: "gas-pipette", category: "materials", defaultStage: "sampling", drawing: "pipette", name: "Pipeta gazowa", desc: "Pobór lub dozowanie próbek gazu.", cost: 250, risk: 1 },
  { id: "soil-auger", category: "materials", defaultStage: "sampling", drawing: "soilProbe", name: "Laska Egnera / świder", desc: "Pobór gleby i gazów glebowych.", cost: 300, risk: 1 },
  { id: "conductivity-electrode", category: "materials", defaultStage: "measurement", acceptedStages: ["measurement", "prep"], drawing: "electrode", name: "Elektroda konduktometryczna", desc: "Pomiar przewodności.", cost: 300, risk: 0 },
  { id: "sorbent-trap", category: "materials", defaultStage: "sampling", drawing: "sorbent", name: "Pułapka z sorbentem", desc: "Zatrzymuje LZO do analizy TD-GC-MS.", cost: 300, risk: 1 },
  { id: "ise-electrode", category: "materials", defaultStage: "measurement", acceptedStages: ["measurement", "prep"], drawing: "electrode", name: "Elektroda jonoselektywna (ISE)", desc: "Potencjometria wybranego jonu.", cost: 400, risk: 0 },
  { id: "trap-heater", category: "materials", defaultStage: "prep", acceptedStages: ["sampling", "prep", "measurement"], drawing: "transferLine", name: "Grzałka do pułapek", desc: "Podgrzewanie pułapek sorpcyjnych.", cost: 400, risk: 1 },
  { id: "pipette", category: "materials", defaultStage: "prep", acceptedStages: ["prep", "measurement"], drawing: "pipette", name: "Pipeta automatyczna", desc: "Dozowanie próbek i odczynników.", cost: 500, risk: 0 },
  { id: "sieves", category: "materials", defaultStage: "prep", drawing: "filter", name: "Zestaw sit", desc: "Frakcjonowanie i przygotowanie materiału stałego.", cost: 600, risk: 0 },
  { id: "filter", category: "materials", defaultStage: "prep", drawing: "filter", name: "Zestaw filtracyjny próżniowy", desc: "Przygotowanie próbek wodnych.", cost: 700, risk: 0 },
  { id: "stirrer", category: "materials", defaultStage: "prep", acceptedStages: ["prep", "measurement"], drawing: "stirrer", name: "Mieszadło magnetyczne", desc: "Stabilizuje pomiar elektrochemiczny.", cost: 800, risk: 0 },
  { id: "standards", category: "quality", defaultStage: "quality", drawing: "standards", name: "Wzorce + CRM", desc: "Kalibracja i kontrola jakości.", cost: 900, risk: 0 },
  { id: "calibration-curve", category: "quality", defaultStage: "quality", drawing: "standards", name: "Metoda prostej kalibracyjnej", desc: "Oznaczenie z krzywej wzorcowej.", cost: 0, risk: 0 },
  { id: "standard-addition", category: "quality", defaultStage: "quality", drawing: "standards", name: "Metoda dodatku wzorca", desc: "Korekta wpływu matrycy próbki.", cost: 0, risk: 0 },
  { id: "internal-standard", category: "quality", defaultStage: "quality", drawing: "standards", name: "Metoda wzorca wewnętrznego", desc: "Kompensacja strat i zmian sygnału.", cost: 0, risk: 0 },
  { id: "air-pump", category: "materials", defaultStage: "sampling", drawing: "airPump", name: "Pompa powietrza", desc: "Aktywny pobór gazów.", cost: 1000, risk: 1 },
  { id: "garrett", category: "materials", defaultStage: "sampling", drawing: "bottle", name: "Próbnik Garretta", desc: "Pobór próbek gazowych do oznaczeń.", cost: 1500, risk: 1 },
  { id: "water-pump", category: "materials", defaultStage: "sampling", drawing: "waterPump", name: "Pompa do wód / ścieków", desc: "Pobór cieczy w terenie.", cost: 2000, risk: 1 },
  { id: "shaker", category: "materials", defaultStage: "prep", drawing: "stirrer", name: "Wytrząsarka", desc: "Ekstrakcja lub intensywne mieszanie próbek.", cost: 2000, risk: 1 },
  { id: "spe", category: "materials", defaultStage: "prep", drawing: "filter", name: "SPE - ekstrakcja do fazy stałej", desc: "Zatężanie i oczyszczanie analitów.", cost: 2000, risk: 1 },
  { id: "mill", category: "materials", defaultStage: "prep", drawing: "mill", name: "Młynek", desc: "Rozdrobnienie i homogenizacja.", cost: 2500, risk: 1 },
  { id: "drying-oven", category: "materials", defaultStage: "prep", drawing: "oven", name: "Suszarka laboratoryjna", desc: "Suszenie materiału stałego.", cost: 3000, risk: 1 },
  { id: "van-veen", category: "materials", defaultStage: "sampling", drawing: "soilProbe", name: "Próbnik van Veena", desc: "Pobór osadów dennych.", cost: 4000, risk: 2 },
  { id: "balance", category: "materials", defaultStage: "prep", drawing: "balance", name: "Waga analityczna", desc: "Odważka próbki do mineralizacji.", cost: 4000, risk: 0 },
  { id: "heated-line", category: "materials", defaultStage: "sampling", drawing: "transferLine", name: "Grzana linia transferowa z filtrem (30 m)", desc: "Transfer gazów bez kondensacji.", cost: 4500, risk: 2 },
  { id: "centrifuge", category: "materials", defaultStage: "prep", drawing: "mill", name: "Wirówka laboratoryjna", desc: "Oddzielanie faz lub zawiesin.", cost: 5000, risk: 1 },
  { id: "lyophilizer", category: "materials", defaultStage: "prep", drawing: "oven", name: "Liofilizator", desc: "Suszenie przez wymrażanie.", cost: 5000, risk: 1 },
  { id: "microwave", category: "materials", defaultStage: "prep", drawing: "microwave", name: "Mineralizator mikrofalowy", desc: "Roztwarzanie próbek przed AAS/ICP.", cost: 9000, risk: 3 },
  { id: "cx401", category: "devices", defaultStage: "measurement", drawing: "electrode", name: "CX-401", desc: "pH, EC i ISE dla wód oraz ścieków.", cost: 1200, risk: 0 },
  { id: "uvvis", category: "devices", defaultStage: "measurement", drawing: "uvvis", name: "UV-Vis", desc: "Oznaczenia barwne i absorbancja.", cost: 10000, risk: 1 },
  { id: "aas", category: "devices", defaultStage: "measurement", drawing: "aas", name: "AAS", desc: "Pojedyncze metale po mineralizacji.", cost: 30000, risk: 2 },
  { id: "ftir", category: "devices", defaultStage: "measurement", drawing: "ftir", name: "FTIR", desc: "Jakościowa i półilościowa analiza gazów.", cost: 45000, risk: 1 },
  { id: "icp-oes", category: "devices", defaultStage: "measurement", drawing: "icp", name: "ICP-OES", desc: "Wielopierwiastkowe oznaczanie metali.", cost: 70000, risk: 2 },
  { id: "gcms-td", category: "devices", defaultStage: "measurement", drawing: "gcms", name: "GC-MS-TD", desc: "Analiza LZO z desorpcją termiczną.", cost: 120000, risk: 2 },
  { id: "td", category: "devices", defaultStage: "measurement", drawing: "gcms", name: "TD - desorber termiczny", desc: "Moduł uwalniania LZO z pułapek.", cost: 0, risk: 1 },
];

﻿const scenarios = [
  {
    "id": "E1",
    "code": "E1",
    "name": "E1 - Kontrola odczynu wody powierzchniowej – rzeka Prądnik",
    "matrix": "Woda",
    "analytes": "Odczyn pH",
    "quality": "CX-401 – potencjometria, pH",
    "status": "podstawowa",
    "requiredIds": [
      "container",
      "water-pump",
      "pipette",
      "ph-electrode",
      "stirrer",
      "standards",
      "calibration-curve",
      "cx401"
    ]
  },
  {
    "id": "E2",
    "code": "E2",
    "name": "E2 - Ocena mineralizacji wody gruntowej – okolice Olkusza",
    "matrix": "Woda",
    "analytes": "Przewodność elektrolityczna",
    "quality": "CX-401 – konduktometria",
    "status": "podstawowa",
    "requiredIds": [
      "container",
      "water-pump",
      "pipette",
      "stirrer",
      "conductivity-electrode",
      "standards",
      "calibration-curve",
      "cx401"
    ]
  },
  {
    "id": "E3",
    "code": "E3",
    "name": "E3 - Wstępna kwalifikacja wody zbiornika – Zbiornik Dobczycki",
    "matrix": "Woda",
    "analytes": "Odczyn pH",
    "quality": "CX-401 – potencjometria, pH",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "pipette",
      "stirrer",
      "ph-electrode",
      "standards",
      "calibration-curve",
      "cx401"
    ]
  },
  {
    "id": "I4",
    "code": "I4",
    "name": "I4 - Kontrola pH ścieku technologicznego – Strefa Przemysłowa Skawina",
    "matrix": "Ściek",
    "analytes": "Odczyn pH",
    "quality": "CX-401 – potencjometria, pH",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "pipette",
      "stirrer",
      "ph-electrode",
      "standards",
      "calibration-curve",
      "cx401"
    ]
  },
  {
    "id": "I5",
    "code": "I5",
    "name": "I5 - Kontrola przewodności wody obiegowej – elektrociepłownia Łęg",
    "matrix": "Woda",
    "analytes": "Przewodność elektrolityczna",
    "quality": "CX-401 – konduktometria",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "pipette",
      "stirrer",
      "conductivity-electrode",
      "standards",
      "calibration-curve",
      "cx401"
    ]
  },
  {
    "id": "I6",
    "code": "I6",
    "name": "I6 - Oznaczenie jonów w ścieku laboratoryjnym – kampus akademicki Kraków",
    "matrix": "Ściek",
    "analytes": "Jony",
    "quality": "CX-401 – potencjometria z ISE",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "pipette",
      "stirrer",
      "ise-electrode",
      "standards",
      "calibration-curve",
      "cx401"
    ]
  },
  {
    "id": "E7",
    "code": "E7",
    "name": "E7 - Kontrola przewodności wody rzecznej – rzeka Raba",
    "matrix": "Woda",
    "analytes": "Przewodność elektrolityczna",
    "quality": "CX-401 – konduktometria",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "pipette",
      "stirrer",
      "conductivity-electrode",
      "standards",
      "calibration-curve",
      "cx401"
    ]
  },
  {
    "id": "E8",
    "code": "E8",
    "name": "E8 - Oznaczenie azotanów w wodzie powierzchniowej – rzeka Wisła",
    "matrix": "Woda",
    "analytes": "Azotany",
    "quality": "UV–Vis – redukcja kadmowa i reakcja Griessa",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "filter",
      "reagent",
      "pipette",
      "standards",
      "calibration-curve",
      "uvvis"
    ]
  },
  {
    "id": "E8A",
    "code": "E8A",
    "name": "E8A - Oznaczenie azotanów w wodzie powierzchniowej – rzeka Wisła (A)",
    "matrix": "Woda",
    "analytes": "Azotany",
    "quality": "CX-401 – ISE dla azotanów",
    "status": "wariant alternatywny",
    "requiredIds": [
      "water-pump",
      "container",
      "pipette",
      "ise-electrode",
      "stirrer",
      "standards",
      "calibration-curve",
      "cx401"
    ]
  },
  {
    "id": "E9",
    "code": "E9",
    "name": "E9 - Oznaczenie fosforanów w wodzie zbiornika – Zbiornik Czorsztyński",
    "matrix": "Woda",
    "analytes": "Fosforany",
    "quality": "UV–Vis – metoda molibdenianowa",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "reagent",
      "pipette",
      "filter",
      "standards",
      "calibration-curve",
      "uvvis"
    ]
  },
  {
    "id": "E10",
    "code": "E10",
    "name": "E10 - Oznaczenie żelaza ogólnego w wodzie gruntowej – rejon Bochni",
    "matrix": "Woda",
    "analytes": "Żelazo ogólne",
    "quality": "UV–Vis – metoda 1,10-fenantrolinowa",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "reagent",
      "pipette",
      "standards",
      "calibration-curve",
      "uvvis"
    ]
  },
  {
    "id": "E10A",
    "code": "E10A",
    "name": "E10A - Oznaczenie żelaza ogólnego w wodzie gruntowej – rejon Bochni (A)",
    "matrix": "Woda",
    "analytes": "Żelazo ogólne",
    "quality": "AAS – Fe",
    "status": "wariant alternatywny",
    "requiredIds": [
      "water-pump",
      "container",
      "microwave",
      "reagent",
      "pipette",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "E10B",
    "code": "E10B",
    "name": "E10B - Oznaczenie żelaza ogólnego w wodzie gruntowej – rejon Bochni (B)",
    "matrix": "Woda",
    "analytes": "Żelazo ogólne",
    "quality": "ICP-OES – Fe",
    "status": "wariant alternatywny",
    "requiredIds": [
      "water-pump",
      "container",
      "microwave",
      "reagent",
      "pipette",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "I11",
    "code": "I11",
    "name": "I11 - Kontrola fenoli w ścieku przemysłowym – zakład chemiczny Oświęcim",
    "matrix": "Ściek",
    "analytes": "Fenole",
    "quality": "UV–Vis – metoda 4-AAP",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "reagent",
      "pipette",
      "filter",
      "standards",
      "calibration-curve",
      "uvvis"
    ]
  },
  {
    "id": "I12",
    "code": "I12",
    "name": "I12 - Oznaczenie chromu(VI) w ścieku technologicznym – galwanizernia Kraków",
    "matrix": "Ściek",
    "analytes": "Chrom(VI)",
    "quality": "UV–Vis – metoda DPC",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "filter",
      "reagent",
      "pipette",
      "standards",
      "calibration-curve",
      "uvvis"
    ]
  },
  {
    "id": "E13",
    "code": "E13",
    "name": "E13 - Oznaczenie barwy wody po uzdatnianiu – SUW Raba",
    "matrix": "Woda",
    "analytes": "Barwa wody",
    "quality": "UV–Vis – metoda Pt-Co / Hazen",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "pipette",
      "filter",
      "calibration-curve",
      "uvvis"
    ]
  },
  {
    "id": "I14",
    "code": "I14",
    "name": "I14 - Kontrola związków organicznych w wodzie obiegowej – elektrociepłownia Skawina",
    "matrix": "Woda",
    "analytes": "Związki organiczne absorbujące UV",
    "quality": "UV–Vis – UV254",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "pipette",
      "filter",
      "calibration-curve",
      "uvvis"
    ]
  },
  {
    "id": "E15",
    "code": "E15",
    "name": "E15 - Oznaczenie manganu w wodzie surowej – ujęcie Krzeszowice",
    "matrix": "Woda",
    "analytes": "Mangan",
    "quality": "UV–Vis – metoda PAN lub Mn(VII)",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "reagent",
      "pipette",
      "filter",
      "standards",
      "calibration-curve",
      "uvvis"
    ]
  },
  {
    "id": "E15A",
    "code": "E15A",
    "name": "E15A - Oznaczenie manganu w wodzie surowej – ujęcie Krzeszowice (A)",
    "matrix": "Woda",
    "analytes": "Mangan",
    "quality": "AAS – Mn",
    "status": "wariant alternatywny",
    "requiredIds": [
      "water-pump",
      "container",
      "microwave",
      "reagent",
      "pipette",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "E15B",
    "code": "E15B",
    "name": "E15B - Oznaczenie manganu w wodzie surowej – ujęcie Krzeszowice (B)",
    "matrix": "Woda",
    "analytes": "Mangan",
    "quality": "ICP-OES – Mn",
    "status": "wariant alternatywny",
    "requiredIds": [
      "water-pump",
      "container",
      "microwave",
      "reagent",
      "pipette",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "E17",
    "code": "E17",
    "name": "E17 - Oznaczenie ołowiu w glebie z terenu zielonego – park miejski Kraków",
    "matrix": "Gleba",
    "analytes": "Ołów",
    "quality": "AAS – Pb po mineralizacji gleby",
    "status": "podstawowa",
    "requiredIds": [
      "soil-auger",
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "reagent",
      "balance",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "E17A",
    "code": "E17A",
    "name": "E17A - Oznaczenie ołowiu w glebie z terenu zielonego – park miejski Kraków (A)",
    "matrix": "Gleba",
    "analytes": "Ołów",
    "quality": "ICP-OES – Pb",
    "status": "wariant alternatywny",
    "requiredIds": [
      "soil-auger",
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "reagent",
      "balance",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "E18",
    "code": "E18",
    "name": "E18 - Oznaczenie kadmu w osadach dennych – rzeka Skawa",
    "matrix": "Osady",
    "analytes": "Kadm",
    "quality": "AAS – Cd po mineralizacji osadów",
    "status": "podstawowa",
    "requiredIds": [
      "van-veen",
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "reagent",
      "balance",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "E18A",
    "code": "E18A",
    "name": "E18A - Oznaczenie kadmu w osadach dennych – rzeka Skawa (A)",
    "matrix": "Osady",
    "analytes": "Kadm",
    "quality": "ICP-OES – Cd",
    "status": "wariant alternatywny",
    "requiredIds": [
      "van-veen",
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "reagent",
      "balance",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "E19",
    "code": "E19",
    "name": "E19 - Oznaczenie cynku w glebie rolniczej – okolice Proszowic",
    "matrix": "Gleba",
    "analytes": "Cynk",
    "quality": "AAS – Zn po mineralizacji gleby",
    "status": "podstawowa",
    "requiredIds": [
      "soil-auger",
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "reagent",
      "balance",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "E19A",
    "code": "E19A",
    "name": "E19A - Oznaczenie cynku w glebie rolniczej – okolice Proszowic (A)",
    "matrix": "Gleba",
    "analytes": "Cynk",
    "quality": "ICP-OES – Zn",
    "status": "wariant alternatywny",
    "requiredIds": [
      "soil-auger",
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "reagent",
      "balance",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "I20",
    "code": "I20",
    "name": "I20 - Oznaczenie niklu w ścieku przemysłowym – zakład metalowy Skawina",
    "matrix": "Ściek",
    "analytes": "Nikiel",
    "quality": "AAS – Ni po mineralizacji cieczy",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "microwave",
      "reagent",
      "pipette",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "I20A",
    "code": "I20A",
    "name": "I20A - Oznaczenie niklu w ścieku przemysłowym – zakład metalowy Skawina (A)",
    "matrix": "Ściek",
    "analytes": "Nikiel",
    "quality": "ICP-OES – Ni",
    "status": "wariant alternatywny",
    "requiredIds": [
      "water-pump",
      "container",
      "microwave",
      "reagent",
      "pipette",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "I21",
    "code": "I21",
    "name": "I21 - Oznaczenie miedzi w ścieku technologicznym – galwanizernia Nowa Huta",
    "matrix": "Ściek",
    "analytes": "Miedź",
    "quality": "AAS – Cu po mineralizacji cieczy",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "microwave",
      "reagent",
      "pipette",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "I21A",
    "code": "I21A",
    "name": "I21A - Oznaczenie miedzi w ścieku technologicznym – galwanizernia Nowa Huta (A)",
    "matrix": "Ściek",
    "analytes": "Miedź",
    "quality": "ICP-OES – Cu",
    "status": "wariant alternatywny",
    "requiredIds": [
      "water-pump",
      "container",
      "microwave",
      "reagent",
      "pipette",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "I22",
    "code": "I22",
    "name": "I22 - Identyfikacja składników gazowych w spalinach kotła – ciepłownia miejska",
    "matrix": "Spaliny",
    "analytes": "Składniki gazowe",
    "quality": "FTIR – analiza gazów spalinowych",
    "status": "podstawowa",
    "requiredIds": [
      "air-pump",
      "heated-line",
      "calibration-curve",
      "ftir"
    ]
  },
  {
    "id": "I23",
    "code": "I23",
    "name": "I23 - Kontrola emisji gazowych z instalacji technologicznej – zakład chemiczny Tarnów",
    "matrix": "Gaz",
    "analytes": "Składniki gazowe",
    "quality": "FTIR – identyfikacja składników gazowych",
    "status": "podstawowa",
    "requiredIds": [
      "air-pump",
      "heated-line",
      "calibration-curve",
      "ftir"
    ]
  },
  {
    "id": "E24",
    "code": "E24",
    "name": "E24 - Charakterystyka gazów glebowych – Pustynia Błędowska",
    "matrix": "Gleba",
    "analytes": "Gazy glebowe",
    "quality": "FTIR – analiza gazów glebowych",
    "status": "podstawowa",
    "requiredIds": [
      "soil-auger",
      "air-pump",
      "heated-line",
      "calibration-curve",
      "ftir"
    ]
  },
  {
    "id": "I25",
    "code": "I25",
    "name": "I25 - Przesiewowa analiza gazu procesowego – instalacja chemiczna",
    "matrix": "Gaz",
    "analytes": "Skład gazu procesowego",
    "quality": "FTIR – analiza on-line",
    "status": "podstawowa",
    "requiredIds": [
      "air-pump",
      "heated-line",
      "calibration-curve",
      "ftir"
    ]
  },
  {
    "id": "I26",
    "code": "I26",
    "name": "I26 - Analiza składu gazów odlotowych z reaktora – zakład chemiczny Oświęcim",
    "matrix": "Gaz",
    "analytes": "Gazy odlotowe",
    "quality": "FTIR – analiza gazów procesowych",
    "status": "podstawowa",
    "requiredIds": [
      "air-pump",
      "heated-line",
      "calibration-curve",
      "ftir"
    ]
  },
  {
    "id": "E27",
    "code": "E27",
    "name": "E27 - Wielopierwiastkowa analiza gleby z terenu zurbanizowanego – Kraków",
    "matrix": "Gleba",
    "analytes": "Pierwiastki śladowe",
    "quality": "ICP-OES – analiza wielopierwiastkowa",
    "status": "podstawowa",
    "requiredIds": [
      "soil-auger",
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "balance",
      "reagent",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "E28",
    "code": "E28",
    "name": "E28 - Wielopierwiastkowa analiza osadów dennych – rzeka Dunajec",
    "matrix": "Osady",
    "analytes": "Metale",
    "quality": "ICP-OES – analiza wielopierwiastkowa",
    "status": "podstawowa",
    "requiredIds": [
      "van-veen",
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "balance",
      "reagent",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "E29",
    "code": "E29",
    "name": "E29 - Analiza składu pierwiastkowego popiołu – instalacja energetyczna",
    "matrix": "Popiół",
    "analytes": "Pierwiastki",
    "quality": "ICP-OES – analiza pierwiastkowa",
    "status": "podstawowa",
    "requiredIds": [
      "container",
      "drying-oven",
      "microwave",
      "balance",
      "reagent",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "I30",
    "code": "I30",
    "name": "I30 - Kontrola metali w ścieku przemysłowym po oczyszczaniu",
    "matrix": "Ściek",
    "analytes": "Metale",
    "quality": "ICP-OES – analiza wielopierwiastkowa",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "microwave",
      "reagent",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "I31",
    "code": "I31",
    "name": "I31 - Wielopierwiastkowa analiza wody technologicznej – obieg zamknięty",
    "matrix": "Woda",
    "analytes": "Pierwiastki",
    "quality": "ICP-OES – analiza wielopierwiastkowa",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "microwave",
      "reagent",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "I32",
    "code": "I32",
    "name": "I32 - Analiza pierwiastkowa koncentratu procesowego – zakład przeróbczy",
    "matrix": "Koncentrat",
    "analytes": "Pierwiastki",
    "quality": "ICP-OES – analiza pierwiastkowa",
    "status": "podstawowa",
    "requiredIds": [
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "balance",
      "reagent",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "E33",
    "code": "E33",
    "name": "E33 - Oznaczenie metali w biomasie odpadowej – instalacja energetyczna",
    "matrix": "Biomasa",
    "analytes": "Metale",
    "quality": "ICP-OES – analiza wielopierwiastkowa",
    "status": "podstawowa",
    "requiredIds": [
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "balance",
      "reagent",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "I34",
    "code": "I34",
    "name": "I34 - Kontrola składu pierwiastkowego surowca wtórnego – linia recyklingu",
    "matrix": "Surowiec wtórny",
    "analytes": "Pierwiastki śladowe",
    "quality": "ICP-OES – analiza wielopierwiastkowa",
    "status": "podstawowa",
    "requiredIds": [
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "balance",
      "reagent",
      "standards",
      "internal-standard",
      "icp-oes"
    ]
  },
  {
    "id": "E35",
    "code": "E35",
    "name": "E35 - Oznaczenie LZO w powietrzu glebowym – teren poprzemysłowy",
    "matrix": "Gleba",
    "analytes": "LZO",
    "quality": "GC-MS-TD – sorbent, TD, identyfikacja LZO",
    "status": "podstawowa",
    "requiredIds": [
      "air-pump",
      "sorbent-trap",
      "trap-heater",
      "standards",
      "internal-standard",
      "gcms-td"
    ]
  },
  {
    "id": "E36",
    "code": "E36",
    "name": "E36 - Analiza emisji LZO z osadów ściekowych",
    "matrix": "Ściek",
    "analytes": "LZO",
    "quality": "GC-MS-TD – headspace, sorbent, TD-GC-MS",
    "status": "podstawowa",
    "requiredIds": [
      "container",
      "sorbent-trap",
      "trap-heater",
      "standards",
      "internal-standard",
      "gcms-td"
    ]
  },
  {
    "id": "E37",
    "code": "E37",
    "name": "E37 - Oznaczenie LZO w gazach porowych składowiska odpadów",
    "matrix": "Gaz",
    "analytes": "LZO",
    "quality": "GC-MS-TD – sorbent, TD-GC-MS",
    "status": "podstawowa",
    "requiredIds": [
      "air-pump",
      "sorbent-trap",
      "trap-heater",
      "standards",
      "internal-standard",
      "gcms-td"
    ]
  },
  {
    "id": "I38",
    "code": "I38",
    "name": "I38 - Oznaczenie LZO w emisji z instalacji technologicznej",
    "matrix": "Próbka środowiskowa",
    "analytes": "LZO",
    "quality": "GC-MS-TD – sorbent, TD, identyfikacja LZO",
    "status": "podstawowa",
    "requiredIds": [
      "air-pump",
      "sorbent-trap",
      "trap-heater",
      "standards",
      "internal-standard",
      "gcms-td"
    ]
  },
  {
    "id": "E39",
    "code": "E39",
    "name": "E39 - Oznaczenie LZO w gazach glebowych",
    "matrix": "Gleba",
    "analytes": "LZO",
    "quality": "GC-MS-TD – gaz glebowy, sorbent, TD-GC-MS",
    "status": "podstawowa",
    "requiredIds": [
      "soil-auger",
      "air-pump",
      "sorbent-trap",
      "trap-heater",
      "standards",
      "internal-standard",
      "gcms-td"
    ]
  },
  {
    "id": "I40",
    "code": "I40",
    "name": "I40 - Oznaczenie LZO w gazie procesowym",
    "matrix": "Gaz",
    "analytes": "LZO",
    "quality": "GC-MS-TD – sorbent, TD, identyfikacja LZO",
    "status": "podstawowa",
    "requiredIds": [
      "air-pump",
      "sorbent-trap",
      "trap-heater",
      "standards",
      "internal-standard",
      "gcms-td"
    ]
  },
  {
    "id": "I41",
    "code": "I41",
    "name": "I41 - Oznaczenie LZO w gazach odlotowych z reaktora",
    "matrix": "Gaz",
    "analytes": "LZO",
    "quality": "GC-MS-TD – sorbent, TD-GC-MS",
    "status": "podstawowa",
    "requiredIds": [
      "air-pump",
      "sorbent-trap",
      "trap-heater",
      "standards",
      "internal-standard",
      "gcms-td"
    ]
  },
  {
    "id": "E42",
    "code": "E42",
    "name": "E42 - Oznaczenie ołowiu w glebie zurbanizowanej",
    "matrix": "Gleba",
    "analytes": "Ołów",
    "quality": "AAS – Pb po mineralizacji gleby",
    "status": "podstawowa",
    "requiredIds": [
      "soil-auger",
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "reagent",
      "balance",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "E43",
    "code": "E43",
    "name": "E43 - Oznaczenie kadmu w osadach dennych",
    "matrix": "Osady",
    "analytes": "Kadm",
    "quality": "AAS – Cd po mineralizacji osadów",
    "status": "podstawowa",
    "requiredIds": [
      "van-veen",
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "reagent",
      "balance",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "E44",
    "code": "E44",
    "name": "E44 - Oznaczenie ołowiu w popiele",
    "matrix": "Próbka środowiskowa",
    "analytes": "Ołów",
    "quality": "AAS – Pb po mineralizacji popiołu",
    "status": "podstawowa",
    "requiredIds": [
      "container",
      "drying-oven",
      "microwave",
      "balance",
      "reagent",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "I45",
    "code": "I45",
    "name": "I45 - Oznaczenie niklu w ścieku po oczyszczaniu",
    "matrix": "Ściek",
    "analytes": "Nikiel",
    "quality": "AAS – Ni po mineralizacji cieczy",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "microwave",
      "reagent",
      "pipette",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "I46",
    "code": "I46",
    "name": "I46 - Oznaczenie miedzi w wodzie technologicznej",
    "matrix": "Woda",
    "analytes": "Miedź",
    "quality": "AAS – Cu po mineralizacji cieczy",
    "status": "podstawowa",
    "requiredIds": [
      "water-pump",
      "container",
      "microwave",
      "reagent",
      "pipette",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "I47",
    "code": "I47",
    "name": "I47 - Oznaczenie cynku w koncentracie procesowym",
    "matrix": "Próbka środowiskowa",
    "analytes": "Cynk",
    "quality": "AAS – Zn po mineralizacji koncentratu",
    "status": "podstawowa",
    "requiredIds": [
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "balance",
      "reagent",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "E48",
    "code": "E48",
    "name": "E48 - Oznaczenie kadmu w biomasie odpadowej",
    "matrix": "Biomasa",
    "analytes": "Kadm",
    "quality": "AAS – Cd po mineralizacji biomasy",
    "status": "podstawowa",
    "requiredIds": [
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "balance",
      "reagent",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "I49",
    "code": "I49",
    "name": "I49 - Oznaczenie ołowiu w surowcu wtórnym",
    "matrix": "Surowiec wtórny",
    "analytes": "Ołów",
    "quality": "AAS – Pb po mineralizacji materiału stałego",
    "status": "podstawowa",
    "requiredIds": [
      "container",
      "drying-oven",
      "mill",
      "microwave",
      "balance",
      "reagent",
      "standards",
      "calibration-curve",
      "aas"
    ]
  },
  {
    "id": "E50",
    "code": "E50",
    "name": "E50 - Przesiewowa ocena LZO w powietrzu glebowym",
    "matrix": "Gleba",
    "analytes": "LZO",
    "quality": "FTIR – przesiewowa analiza pasm organicznych",
    "status": "podstawowa",
    "requiredIds": [
      "soil-auger",
      "air-pump",
      "heated-line",
      "calibration-curve",
      "ftir"
    ]
  },
  {
    "id": "E51",
    "code": "E51",
    "name": "E51 - Przesiewowa ocena emisji organicznych z osadów ściekowych",
    "matrix": "Ściek",
    "analytes": "Związki organiczne",
    "quality": "FTIR – przesiewowa analiza gazów organicznych",
    "status": "podstawowa",
    "requiredIds": [
      "container",
      "air-pump",
      "heated-line",
      "calibration-curve",
      "ftir"
    ]
  },
  {
    "id": "E52",
    "code": "E52",
    "name": "E52 - Przesiewowa ocena gazów porowych składowiska",
    "matrix": "Gaz",
    "analytes": "Gazy porowe",
    "quality": "FTIR – przesiewowa analiza pasm organicznych",
    "status": "podstawowa",
    "requiredIds": [
      "air-pump",
      "heated-line",
      "calibration-curve",
      "ftir"
    ]
  }
];

const categoryTabs = document.querySelector("#categoryTabs");
const materialGrid = document.querySelector("#materialGrid");
const methodBoard = document.querySelector("#methodBoard");
const selectedCount = document.querySelector("#selectedCount");
const scenarioSelect = document.querySelector("#scenarioSelect");
const randomScenarioBtn = document.querySelector("#randomScenarioBtn");
const answerCodeInput = document.querySelector("#answerCodeInput");
const showAnswerBtn = document.querySelector("#showAnswerBtn");
const answerList = document.querySelector("#answerList");
const matrixText = document.querySelector("#matrixText");
const analytesText = document.querySelector("#analytesText");
const analyteNote = document.querySelector("#analyteNote");
const searchInput = document.querySelector("#searchInput");
const scoreRing = document.querySelector("#scoreRing");
const scoreValue = document.querySelector("#scoreValue");
const feedbackList = document.querySelector("#feedbackList");
const verdictBadge = document.querySelector("#verdictBadge");
const celebration = document.querySelector("#celebration");
const celebrationBurst = document.querySelector("#celebrationBurst");

let activeReservoir = reservoirs[0].id;
let activeBoardStage = "measurement";
let selectedEntries = [];
let isEvaluated = false;

function getScenario() {
  return scenarios.find((scenario) => scenario.id === scenarioSelect.value) ?? scenarios[0];
}

const scenarioExplanations = {
  "E1": "Pomiar pH w wodzie rzecznej pozwala szybko ocenić warunki kwasowo-zasadowe środowiska, które wpływają na mobilność metali, formy chemiczne składników rozpuszczonych oraz przebieg procesów biologicznych. Jest to podstawowy parametr wstępnej oceny jakości wody powierzchniowej.",
  "E2": "Pomiar przewodności elektrolitycznej w wodzie gruntowej pozwala ocenić ogólną mineralizację i zawartość jonów rozpuszczonych. W rejonach oddziaływania przemysłu lub eksploatacji surowców parametr ten pomaga wykrywać zmiany składu wody, zasolenie lub dopływ zanieczyszczeń nieorganicznych.",
  "E3": "Pomiar pH w wodzie zbiornikowej pozwala ocenić stabilność warunków chemicznych wpływających na życie organizmów wodnych, równowagę węglanową oraz możliwość występowania procesów eutrofizacji. Jest to parametr pomocny przy wstępnej kwalifikacji jakości wody.",
  "I4": "Pomiar pH ścieku technologicznego pozwala kontrolować, czy odczyn mieści się w zakresie bezpiecznym dla dalszego oczyszczania, neutralizacji lub odprowadzenia ścieku. Zbyt kwaśny albo zbyt zasadowy ściek może zakłócać procesy oczyszczania i zwiększać mobilność niektórych zanieczyszczeń.",
  "I5": "Pomiar przewodności wody obiegowej pozwala kontrolować wzrost zawartości soli rozpuszczonych, który może sprzyjać korozji, osadzaniu kamienia i zaburzeniom pracy obiegu technologicznego. Jest to szybki wskaźnik stabilności jakości wody w instalacji.",
  "I6": "Oznaczanie wybranych jonów w ścieku laboratoryjnym pozwala ocenić skład nieorganiczny próbki oraz sprawdzić, czy ściek może wymagać neutralizacji, rozcieńczenia lub dodatkowego oczyszczania. Wynik ma znaczenie dla kontroli bezpieczeństwa odprowadzania ścieków z laboratoriów.",
  "E7": "Pomiar przewodności wody rzecznej pozwala szybko wykryć zmiany mineralizacji związane ze spływem powierzchniowym, dopływem ścieków lub zmianą charakteru zasilania rzeki. Parametr ten jest wskaźnikowy i nie identyfikuje pojedynczych jonów.",
  "E8": "Oznaczanie azotanów w wodzie powierzchniowej pozwala ocenić dopływ związków azotu pochodzących m.in. ze spływu rolniczego, ścieków komunalnych i odpływu z terenów zurbanizowanych. Wynik jest ważny przy ocenie presji biogennej i ryzyka eutrofizacji.",
  "E8A": "Oznaczanie azotanów w wodzie powierzchniowej pozwala ocenić dopływ związków azotu pochodzących m.in. ze spływu rolniczego, ścieków komunalnych i odpływu z terenów zurbanizowanych. Wynik jest ważny przy ocenie presji biogennej i ryzyka eutrofizacji.",
  "E9": "Oznaczanie fosforanów w wodzie zbiornika pozwala ocenić dopływ biodostępnych form fosforu, które mogą ograniczać lub nasilać eutrofizację. Wynik jest istotny przy ocenie ryzyka zakwitów glonów i zmian jakości wody retencjonowanej.",
  "E10": "Oznaczanie żelaza ogólnego w wodzie gruntowej pozwala ocenić jej przydatność użytkową i potrzebę uzdatniania. Podwyższona zawartość żelaza może powodować barwę, mętność, osady oraz problemy eksploatacyjne w instalacjach wodnych.",
  "E10A": "Oznaczanie żelaza ogólnego w wodzie gruntowej pozwala ocenić jej przydatność użytkową i potrzebę uzdatniania. Podwyższona zawartość żelaza może powodować barwę, mętność, osady oraz problemy eksploatacyjne w instalacjach wodnych.",
  "E10B": "Oznaczanie żelaza ogólnego w wodzie gruntowej pozwala ocenić jej przydatność użytkową i potrzebę uzdatniania. Podwyższona zawartość żelaza może powodować barwę, mętność, osady oraz problemy eksploatacyjne w instalacjach wodnych.",
  "I11": "Oznaczanie fenoli w ścieku przemysłowym służy kontroli zanieczyszczeń organicznych typowych dla części procesów chemicznych, koksowniczych i petrochemicznych. Wynik pozwala ocenić skuteczność oczyszczania oraz ryzyko toksycznego oddziaływania ścieku.",
  "I12": "Oznaczanie chromu(VI) w ścieku z galwanizerni jest istotne, ponieważ ta forma chromu cechuje się wysoką toksycznością i mobilnością. Wynik pozwala kontrolować proces technologiczny, skuteczność redukcji lub oczyszczania oraz ryzyko wprowadzania chromu(VI) do środowiska.",
  "E13": "Pomiar barwy wody po uzdatnianiu pozwala ocenić skuteczność usuwania substancji wpływających na wygląd wody, takich jak związki humusowe, żelazo, mangan lub produkty procesów technologicznych. Parametr ma znaczenie dla kontroli jakości użytkowej wody.",
  "I14": "Pomiar absorbancji UV254 w wodzie obiegowej jest przesiewowym wskaźnikiem obecności frakcji związków organicznych absorbujących UV, zwłaszcza związków aromatycznych lub produktów degradacji materiałów organicznych. Parametr pomaga kontrolować zmiany jakości wody obiegowej, ale nie identyfikuje pojedynczych związków.",
  "E15": "Oznaczanie manganu w wodzie surowej pozwala ocenić potrzebę i skuteczność odmanganiania przed podaniem wody do sieci. Podwyższone stężenie manganu może powodować przebarwienia, osady oraz problemy eksploatacyjne w instalacjach wodociągowych.",
  "E15A": "Oznaczanie manganu w wodzie surowej pozwala ocenić potrzebę i skuteczność odmanganiania przed podaniem wody do sieci. Podwyższone stężenie manganu może powodować przebarwienia, osady oraz problemy eksploatacyjne w instalacjach wodociągowych.",
  "E15B": "Oznaczanie manganu w wodzie surowej pozwala ocenić potrzebę i skuteczność odmanganiania przed podaniem wody do sieci. Podwyższone stężenie manganu może powodować przebarwienia, osady oraz problemy eksploatacyjne w instalacjach wodociągowych.",
  "E17": "Oznaczanie ołowiu w glebie miejskiej lub na terenie zielonym pozwala ocenić trwałe zanieczyszczenie związane z presją komunikacyjną, przemysłową lub historycznym użytkowaniem terenu. Wynik jest ważny przy ocenie bezpieczeństwa użytkowania terenu przez ludzi.",
  "E17A": "Oznaczanie ołowiu w glebie miejskiej lub na terenie zielonym pozwala ocenić trwałe zanieczyszczenie związane z presją komunikacyjną, przemysłową lub historycznym użytkowaniem terenu. Wynik jest ważny przy ocenie bezpieczeństwa użytkowania terenu przez ludzi.",
  "E18": "Oznaczanie kadmu w osadach dennych pozwala ocenić kumulację toksycznego metalu śladowego w materiale osadowym, który może stanowić wtórne źródło zanieczyszczenia wód. Wynik jest istotny przy ocenie presji przemysłowej i jakości środowiska wodnego.",
  "E18A": "Oznaczanie kadmu w osadach dennych pozwala ocenić kumulację toksycznego metalu śladowego w materiale osadowym, który może stanowić wtórne źródło zanieczyszczenia wód. Wynik jest istotny przy ocenie presji przemysłowej i jakości środowiska wodnego.",
  "E19": "Oznaczanie cynku w glebie rolniczej pozwala ocenić wpływ nawożenia, środków ochrony roślin, osadów ściekowych lub dopływu zanieczyszczeń przemysłowych. Cynk jest mikroelementem, ale jego podwyższona zawartość może wskazywać na nadmierne obciążenie gleby metalami.",
  "E19A": "Oznaczanie cynku w glebie rolniczej pozwala ocenić wpływ nawożenia, środków ochrony roślin, osadów ściekowych lub dopływu zanieczyszczeń przemysłowych. Cynk jest mikroelementem, ale jego podwyższona zawartość może wskazywać na nadmierne obciążenie gleby metalami.",
  "I20": "Oznaczanie niklu w ścieku przemysłowym pozwala kontrolować obecność metalu związanego m.in. z obróbką metali, galwanizacją i procesami technologicznymi. Wynik jest ważny dla oceny skuteczności oczyszczania ścieku oraz ograniczenia emisji niklu do środowiska.",
  "I20A": "Oznaczanie niklu w ścieku przemysłowym pozwala kontrolować obecność metalu związanego m.in. z obróbką metali, galwanizacją i procesami technologicznymi. Wynik jest ważny dla oceny skuteczności oczyszczania ścieku oraz ograniczenia emisji niklu do środowiska.",
  "I21": "Oznaczanie miedzi w ścieku z galwanizerni pozwala kontrolować straty metalu z procesu oraz skuteczność oczyszczania ścieków technologicznych. Wynik ma znaczenie dla ograniczania toksycznego oddziaływania miedzi na środowisko wodne.",
  "I21A": "Oznaczanie miedzi w ścieku z galwanizerni pozwala kontrolować straty metalu z procesu oraz skuteczność oczyszczania ścieków technologicznych. Wynik ma znaczenie dla ograniczania toksycznego oddziaływania miedzi na środowisko wodne.",
  "I22": "Identyfikacja składników gazowych w spalinach kotła pozwala ocenić charakter procesu spalania, obecność produktów niecałkowitego spalania oraz ogólną stabilność pracy źródła ciepła. Jest to etap diagnostyczny wspierający dalszą kontrolę emisji.",
  "I23": "Identyfikacja składników gazowych w emisji z instalacji technologicznej pozwala rozpoznać dominujące składniki strumienia gazowego i wykryć odchylenia od normalnej pracy procesu. Wynik wspiera ocenę bezpieczeństwa procesu i potrzebę dalszych analiz szczegółowych.",
  "E24": "Analiza gazów glebowych pozwala rozpoznać warunki tlenowe, aktywność procesów biologicznych oraz ewentualną migrację substancji lotnych w gruncie. W matrycy glebowej wynik ma charakter diagnostyczny i pomaga wskazać miejsca wymagające dokładniejszych badań.",
  "I25": "Przesiewowa analiza gazu procesowego pozwala ocenić skład mieszaniny gazowej powstającej lub wykorzystywanej w instalacji chemicznej. Wynik umożliwia szybkie wykrycie zmian składu, obecności niepożądanych składników lub niestabilnej pracy procesu.",
  "I26": "Analiza gazów odlotowych z reaktora pozwala ocenić skład strumienia opuszczającego instalację oraz rozpoznać produkty reakcji, uboczne składniki gazowe i potencjalne źródła emisji. Wynik wspiera diagnostykę procesu i ocenę oddziaływania instalacji na środowisko.",
  "E27": "Wielopierwiastkowa analiza gleby miejskiej pozwala ocenić zanieczyszczenie metalami i metaloidami pochodzącymi z komunikacji, przemysłu, pyłów atmosferycznych lub historycznego użytkowania terenu. Wynik wspiera ocenę jakości gleby i potencjalnego ryzyka środowiskowego.",
  "E28": "Oznaczanie metali w osadach dennych pozwala ocenić kumulację zanieczyszczeń nieorganicznych w materiale osadowym. Osady mogą rejestrować długotrwałą presję zlewni i stanowić wtórne źródło metali dla środowiska wodnego.",
  "E29": "Analiza składu pierwiastkowego popiołu pozwala ocenić jego właściwości chemiczne, potencjalne zanieczyszczenie metalami oraz możliwość dalszego zagospodarowania lub konieczność traktowania jako odpadu wymagającego kontroli.",
  "I30": "Kontrola metali w ścieku po oczyszczaniu pozwala ocenić skuteczność procesu usuwania zanieczyszczeń nieorganicznych przed odprowadzeniem ścieku. Wynik wskazuje, czy oczyszczanie ogranicza emisję metali do środowiska wodnego.",
  "I31": "Wielopierwiastkowa analiza wody technologicznej w obiegu zamkniętym pozwala kontrolować narastanie składników nieorganicznych, które mogą powodować korozję, osady, zanieczyszczenie produktu lub zaburzenia procesu.",
  "I32": "Analiza pierwiastkowa koncentratu procesowego pozwala ocenić skład surowca lub półproduktu, zawartość składników użytecznych oraz obecność pierwiastków niepożądanych. Wynik wspiera kontrolę jakości i decyzje dotyczące dalszego przerobu.",
  "E33": "Oznaczanie metali w biomasie odpadowej pozwala ocenić jej przydatność do wykorzystania energetycznego oraz ryzyko wprowadzania metali do popiołów i emisji. Wynik wspiera decyzję o bezpiecznym zagospodarowaniu biomasy.",
  "I34": "Kontrola pierwiastków śladowych w surowcu wtórnym pozwala ocenić obecność zanieczyszczeń metalicznych, które mogą ograniczać recykling, pogarszać jakość produktu lub wymagać dodatkowego oczyszczania strumienia materiałowego.",
  "E35": "Oznaczanie LZO w powietrzu glebowym pozwala wykryć lotne zanieczyszczenia organiczne migrujące w strefie aeracji gruntu. Wynik jest przydatny do lokalizacji ognisk zanieczyszczenia, oceny migracji par i planowania dalszych badań terenu poprzemysłowego.",
  "E36": "Analiza LZO emitowanych z osadów ściekowych pozwala ocenić obecność lotnych związków organicznych uwalnianych podczas magazynowania, stabilizacji lub przetwarzania osadów. Wynik ma znaczenie dla oceny uciążliwości zapachowej, ryzyka emisji i bezpieczeństwa procesu.",
  "E37": "Oznaczanie LZO w gazach porowych składowiska pozwala ocenić obecność lotnych zanieczyszczeń organicznych przemieszczających się w przestrzeniach porowych odpadów i gruntu. Wynik pomaga rozpoznać migrację zanieczyszczeń i ryzyko emisji do atmosfery.",
  "I38": "Oznaczanie LZO w emisji z instalacji technologicznej pozwala kontrolować uwalnianie lotnych związków organicznych z procesu produkcyjnego. Wynik jest ważny przy ocenie skuteczności ograniczania emisji, strat rozpuszczalników i oddziaływania instalacji na otoczenie.",
  "E39": "Oznaczanie LZO w gazach glebowych pozwala ocenić obecność lotnych zanieczyszczeń organicznych w gruncie oraz ich potencjalną migrację w kierunku powierzchni lub obiektów budowlanych. Wynik jest ważny w rozpoznaniu terenów zanieczyszczonych.",
  "I40": "Oznaczanie LZO w gazie procesowym pozwala kontrolować skład lotnych związków organicznych obecnych w strumieniu technologicznym. Wynik pomaga ocenić stabilność procesu, straty surowców organicznych lub obecność niepożądanych produktów ubocznych.",
  "I41": "Oznaczanie LZO w gazach odlotowych z reaktora pozwala ocenić, czy lotne związki organiczne opuszczają układ reakcyjny wraz ze strumieniem gazowym. Wynik wspiera kontrolę procesu, ocenę emisji oraz dobór lub ocenę skuteczności układów oczyszczania gazów.",
  "E42": "Oznaczanie ołowiu w glebie zurbanizowanej pozwala ocenić trwałe zanieczyszczenie związane z presją komunikacyjną, przemysłową lub historycznym użytkowaniem terenu. Wynik jest ważny przy ocenie bezpieczeństwa użytkowania terenu przez ludzi.",
  "E43": "Oznaczanie kadmu w osadach dennych pozwala ocenić kumulację toksycznego metalu śladowego w materiale osadowym, który może stanowić wtórne źródło zanieczyszczenia wód. Wynik jest istotny przy ocenie presji przemysłowej i jakości środowiska wodnego.",
  "E44": "Oznaczanie ołowiu w popiele pozwala ocenić koncentrację toksycznego metalu w pozostałości po procesie spalania. Wynik jest istotny dla klasyfikacji odpadu, oceny możliwości zagospodarowania oraz ryzyka uwalniania ołowiu do środowiska.",
  "I45": "Oznaczanie niklu w ścieku po oczyszczaniu pozwala sprawdzić, czy proces oczyszczania skutecznie ograniczył zawartość tego metalu przed odprowadzeniem ścieku. Wynik jest ważny dla kontroli emisji niklu do środowiska wodnego.",
  "I46": "Oznaczanie miedzi w wodzie technologicznej pozwala kontrolować obecność metalu pochodzącego z korozji instalacji, procesów technologicznych lub zanieczyszczenia obiegu. Wynik ma znaczenie dla ochrony urządzeń, jakości procesu i ograniczania emisji metali.",
  "I47": "Oznaczanie cynku w koncentracie procesowym pozwala określić zawartość składnika technologicznie istotnego lub zanieczyszczającego, zależnie od charakteru procesu. Wynik wspiera ocenę jakości koncentratu, jego dalszego przerobu lub wartości surowcowej.",
  "E48": "Oznaczanie kadmu w biomasie odpadowej pozwala ocenić, czy materiał może być bezpiecznie zagospodarowany, np. energetycznie lub materiałowo. Kadm może przechodzić do popiołu lub emisji, dlatego jego kontrola jest ważna przy ocenie ryzyka środowiskowego.",
  "I49": "Oznaczanie ołowiu w surowcu wtórnym pozwala ocenić obecność toksycznego metalu, który może ograniczać recykling, pogarszać jakość produktu lub wymagać separacji zanieczyszczonej frakcji. Wynik wspiera decyzję o dalszym zagospodarowaniu materiału.",
  "E50": "Przesiewowa ocena LZO w powietrzu glebowym pozwala wykryć obecność lotnych zanieczyszczeń organicznych migrujących w strefie aeracji gruntu. Wynik wskazuje, czy teren wymaga dokładniejszej identyfikacji i ilościowego oznaczania związków.",
  "E51": "Przesiewowa ocena emisji organicznych z osadów ściekowych pozwala sprawdzić, czy podczas magazynowania lub przetwarzania osadów uwalniają się lotne lub półlotne związki organiczne. Wynik wskazuje, czy potrzebna jest dokładniejsza identyfikacja składników emisji.",
  "E52": "Analiza gazów porowych składowiska pozwala ocenić skład gazów przemieszczających się w porach odpadów i gruntu. Wynik pomaga rozpoznać aktywność procesów rozkładu, migrację substancji lotnych oraz potencjalne ryzyko emisji poza obszar składowiska."
};

const analyteExplanations = {
  "Odczyn pH": "Pomiar pH pozwala szybko ocenić, czy próbka ma odczyn sprzyjający migracji zanieczyszczeń lub zaburzeniom procesów technologicznych. Jest to podstawowy parametr kontroli wód i ścieków.",
  "Przewodność elektrolityczna": "Przewodność informuje o ogólnej mineralizacji próbki i obecności jonów rozpuszczonych. Pomaga szybko wychwycić dopływ zanieczyszczeń lub zmianę charakteru wody.",
  "Jony": "Oznaczanie wybranych jonów pozwala kontrolować skład chemiczny próbki i skuteczność neutralizacji lub oczyszczania. Wynik wskazuje, czy dany jon może przekraczać poziom dopuszczalny.",
  "Azotany": "Azotany są wskaźnikiem presji rolniczej, ściekowej i eutrofizacji wód. Ich oznaczanie pomaga ocenić jakość wody oraz ryzyko nadmiernego dopływu biogenów.",
  "Fosforany": "Fosforany są jednym z kluczowych czynników eutrofizacji zbiorników wodnych. Ich pomiar pozwala ocenić ryzyko zakwitów i dopływ zanieczyszczeń biogennych.",
  "Żelazo ogólne": "Żelazo wpływa na barwę, smak i przydatność technologiczną wody. Jego oznaczanie pomaga ocenić jakość ujęcia oraz potrzebę uzdatniania.",
  "Fenole": "Fenole są toksycznymi zanieczyszczeniami organicznymi często związanymi z działalnością przemysłową. Ich pomiar służy kontroli skuteczności oczyszczania ścieków.",
  "Chrom(VI)": "Chrom(VI) jest formą chromu o wysokiej toksyczności i mobilności. Oznacza się go szczególnie w ściekach przemysłowych, aby kontrolować proces i ograniczać ryzyko środowiskowe.",
  "Barwa wody": "Barwa wody jest wskaźnikiem obecności substancji naturalnych lub produktów ubocznych procesów technologicznych. Pomiar pozwala ocenić skuteczność uzdatniania i jakość wizualną wody.",
  "Związki organiczne absorbujące UV": "Absorbancja UV254 jest szybkim wskaźnikiem obecności związków organicznych w wodzie. Pomaga w przesiewowej kontroli zmian jakości i pracy instalacji.",
  "Mangan": "Mangan wpływa na jakość użytkową wody i może powodować problemy w procesach uzdatniania. Jego oznaczanie pomaga zdecydować, czy potrzebne są dodatkowe etapy oczyszczania.",
  "Ołów": "Ołów jest toksycznym metalem ciężkim, który może kumulować się w środowisku i organizmach. Jego pomiar służy ocenie ryzyka środowiskowego i bezpieczeństwa terenów użytkowanych przez ludzi.",
  "Kadm": "Kadm jest toksycznym metalem śladowym o dużym znaczeniu środowiskowym. Oznacza się go w glebach, osadach i materiałach odpadowych, aby ocenić stopień zanieczyszczenia.",
  "Cynk": "Cynk jest pierwiastkiem potrzebnym biologicznie, ale w podwyższonych stężeniach wskazuje na presję przemysłową lub rolniczą. Jego oznaczanie pomaga ocenić wpływ nawożenia i zanieczyszczeń.",
  "Nikiel": "Nikiel jest metalem związanym m.in. z przemysłem metalowym i ściekami technologicznymi. Pomiar pozwala kontrolować skuteczność oczyszczania i ryzyko wprowadzania metali do środowiska.",
  "Miedź": "Miedź może pochodzić z procesów galwanicznych, instalacji technicznych i materiałów odpadowych. Jej oznaczanie jest ważne przy kontroli ścieków oraz ocenie wpływu przemysłu.",
  "Składniki gazowe": "Identyfikacja składników gazowych pozwala ocenić charakter emisji i stabilność procesu spalania lub technologii. Jest to szybki etap diagnostyczny przed analizami szczegółowymi.",
  "Gazy glebowe": "Analiza gazów glebowych pomaga rozpoznać warunki biogeochemiczne oraz obecność zanieczyszczeń lotnych. Wynik może wskazać miejsca wymagające dokładniejszych badań.",
  "Skład gazu procesowego": "Pomiar składu gazu procesowego służy kontroli stabilności instalacji i identyfikacji dominujących składników. Pomaga szybko wykrywać odchylenia od normalnej pracy procesu.",
  "Gazy odlotowe": "Analiza gazów odlotowych pozwala ocenić emisje z reaktora lub instalacji przemysłowej. Wyniki wspierają diagnostykę procesu i kontrolę oddziaływania na środowisko.",
  "Pierwiastki śladowe": "Oznaczanie pierwiastków śladowych pozwala ocenić zanieczyszczenie środowiska metalami i metaloidami. Jest szczególnie przydatne przy analizie gleb, surowców i odpadów.",
  "Pierwiastki": "Analiza pierwiastkowa określa skład próbki i wspiera decyzje o jej klasyfikacji, przetwarzaniu lub zagospodarowaniu. Jest używana dla materiałów stałych i wód technologicznych.",
  "Metale": "Oznaczanie metali pozwala ocenić obciążenie próbki zanieczyszczeniami nieorganicznymi. Wyniki są ważne dla kontroli ścieków, odpadów, gleb i osadów.",
  "LZO": "Lotne związki organiczne łatwo migrują do powietrza i mogą wskazywać na zanieczyszczenia przemysłowe lub składowiskowe. Ich oznaczanie pomaga ocenić ryzyko emisji i rozprzestrzeniania się zanieczyszczeń.",
  "Związki organiczne": "Związki organiczne w emisjach lub próbkach środowiskowych mogą świadczyć o procesach przemysłowych, rozkładzie materiału albo zanieczyszczeniu. Pomiar przesiewowy wskazuje, czy potrzebna jest analiza dokładniejsza.",
  "Gazy porowe": "Gazy porowe pokazują, jakie substancje lotne przemieszczają się w przestrzeniach gruntu lub składowiska. Ich ocena pomaga rozpoznać kierunki migracji zanieczyszczeń."
};

function explanationForScenario(scenario) {
  return scenarioExplanations[scenario.id]
    ?? analyteExplanations[scenario.analytes]
    ?? "Pomiar tego parametru pomaga ocenić skład próbki i wskazać, czy wymaga ona dalszej kontroli. Wynik wspiera dobór właściwej metody analitycznej i interpretację ryzyka środowiskowego.";
}
function selectedItems() {
  return selectedEntries
    .map((entry) => ({ ...materials.find((item) => item.id === entry.id), placedStage: entry.stage }))
    .filter((item) => item.id);
}

function renderScenarioOptions() {
  scenarios.forEach((scenario) => {
    const option = document.createElement("option");
    option.value = scenario.id;
    option.textContent = scenario.name;
    scenarioSelect.append(option);
  });
}

function renderScenario() {
  const scenario = getScenario();
  matrixText.textContent = scenario.matrix;
  analytesText.textContent = scenario.analytes;
  analyteNote.innerHTML = `<strong>Po co mierzymy:</strong> ${explanationForScenario(scenario)}`;
  hideAnswers();
  clearEvaluation();
}

function hideAnswers() {
  answerList.hidden = true;
  answerList.classList.remove("denied");
  answerList.textContent = "";
  answerCodeInput.value = "";
}

function showRequiredElements() {
  answerList.hidden = false;
  if (answerCodeInput.value !== "WEiP") {
    answerList.classList.add("denied");
    answerList.textContent = "Nieprawidłowe hasło.";
    return;
  }

  const scenario = getScenario();
  const names = scenario.requiredIds
    .map((id) => materials.find((material) => material.id === id)?.name)
    .filter(Boolean);
  answerList.classList.remove("denied");
  answerList.textContent = names.join(", ");
}

function renderTabs() {
  categoryTabs.innerHTML = "";
  reservoirs.forEach((reservoir) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tab-button${reservoir.id === activeReservoir ? " active" : ""}`;
    button.innerHTML = `${drawingSet[reservoir.drawing]}<div>${reservoir.label}${reservoir.short ? `<span>${reservoir.short}</span>` : ""}</div>`;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", reservoir.id === activeReservoir ? "true" : "false");
    button.addEventListener("click", () => {
      activeReservoir = reservoir.id;
      renderTabs();
      renderMaterials();
    });
    categoryTabs.append(button);
  });
}

function renderMaterials() {
  const query = searchInput.value.trim().toLocaleLowerCase("pl-PL");
  const template = document.querySelector("#materialTemplate");
  materialGrid.innerHTML = "";

  materials
    .filter((item) => item.category === activeReservoir)
    .filter((item) => !query || `${item.name} ${item.desc}`.toLocaleLowerCase("pl-PL").includes(query))
    .forEach((item) => {
      const node = template.content.firstElementChild.cloneNode(true);
      node.dataset.id = item.id;
      node.querySelector(".material-art").innerHTML = drawingSet[item.drawing];
      node.querySelector("h3").textContent = item.name;
      node.querySelector("p").textContent = item.desc;
      node.querySelector(".card-meta").innerHTML = `<span class="chip">${categoryLabel(item.category, false)}</span>`;
      node.querySelector(".add-button").addEventListener("click", () => addElement(item.id, activeBoardStage));
      node.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", item.id);
        node.classList.add("dragging");
      });
      node.addEventListener("dragend", () => node.classList.remove("dragging"));
      materialGrid.append(node);
    });
}

function addElement(id, stageId) {
  const item = materials.find((material) => material.id === id);
  const targetStage = stageId || item?.defaultStage || "prep";
  if (item && !selectedEntries.some((entry) => entry.id === id)) {
    selectedEntries.push({ id, stage: targetStage });
    renderBoard();
    clearEvaluation();
  }
}

function removeElement(id) {
  selectedEntries = selectedEntries.filter((entry) => entry.id !== id);
  renderBoard();
  clearEvaluation();
}

function moveElement(id, stageId) {
  const entry = selectedEntries.find((selectedEntry) => selectedEntry.id === id);
  if (!entry) return;
  entry.stage = stageId;
  renderBoard();
  clearEvaluation();
}

function renderBoard() {
  const stageTemplate = document.querySelector("#stageTemplate");
  const selectedTemplate = document.querySelector("#selectedTemplate");
  methodBoard.innerHTML = "";

  stages.forEach((stage) => {
    const stageNode = stageTemplate.content.firstElementChild.cloneNode(true);
    const dropzone = stageNode.querySelector(".stage-dropzone");
    stageNode.dataset.stage = stage.id;
    stageNode.classList.toggle("active", stage.id === activeBoardStage);
    stageNode.classList.toggle("special", Boolean(stage.special));
    stageNode.querySelector(".stage-icon").innerHTML = drawingSet[stage.drawing];
    stageNode.querySelector(".caption").textContent = stage.short;
    stageNode.querySelector("h3").textContent = stage.label;
    stageNode.querySelector("header").addEventListener("click", () => {
      activeBoardStage = stage.id;
      renderBoard();
    });

    const items = selectedItems().filter((item) => item.placedStage === stage.id);
    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "stage-empty";
      empty.textContent = "Upuść tutaj element";
      dropzone.append(empty);
    }

    items.forEach((item) => {
      const node = selectedTemplate.content.firstElementChild.cloneNode(true);
      node.draggable = true;
      node.dataset.id = item.id;
      node.querySelector(".selected-art").innerHTML = drawingSet[item.drawing];
      node.querySelector("h3").textContent = item.name;
      node.querySelector("p").textContent = item.desc;
      node.querySelector(".remove-button").addEventListener("click", () => removeElement(item.id));
      node.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", item.id);
        event.dataTransfer.setData("application/x-board-item", item.id);
        node.classList.add("dragging");
      });
      node.addEventListener("dragend", () => node.classList.remove("dragging"));
      dropzone.append(node);
    });

    stageNode.addEventListener("dragover", (event) => {
      event.preventDefault();
      stageNode.classList.add("over");
    });
    stageNode.addEventListener("dragleave", () => stageNode.classList.remove("over"));
    stageNode.addEventListener("drop", (event) => {
      event.preventDefault();
      stageNode.classList.remove("over");
      const id = event.dataTransfer.getData("text/plain");
      const item = materials.find((material) => material.id === id);
      if (!item) return;
      if (event.dataTransfer.types.includes("application/x-board-item")) {
        moveElement(id, stage.id);
      } else {
        addElement(id, stage.id);
      }
    });

    methodBoard.append(stageNode);
  });

  const activeStage = stages.find((stage) => stage.id === activeBoardStage);
  selectedCount.textContent = `${selectedEntries.length} ${selectedEntries.length === 1 ? "element" : "elementów"} -> ${activeStage?.label ?? ""}`;
}

function feedbackNode(type, title, body) {
  const node = document.createElement("div");
  node.className = `feedback-item ${type}`;
  node.innerHTML = `<span class="feedback-dot"></span><div><strong>${title}</strong><p>${body}</p></div>`;
  return node;
}

function stageForItem(id) {
  const item = materials.find((material) => material.id === id);
  return stages.find((stage) => stage.id === item?.defaultStage);
}

function acceptedStagesForItem(item) {
  return item?.acceptedStages ?? [item?.defaultStage];
}

function categoryLabel(category, plural = true) {
  const labels = {
    materials: plural ? "materiały" : "materiał",
    devices: plural ? "urządzenia" : "urządzenie",
    quality: plural ? "elementy jakości" : "element jakości",
  };
  return labels[category] ?? (plural ? "elementy" : "element");
}

function categoryGenitive(category) {
  const labels = {
    materials: "materiałów",
    devices: "urządzeń",
    quality: "elementów jakości",
  };
  return labels[category] ?? "elementów";
}

function groupItemsByStageAndCategory(ids, stageResolver) {
  return ids.reduce((groups, id) => {
    const item = materials.find((material) => material.id === id);
    const stage = stageResolver(id, item);
    if (!item || !stage) return groups;

    const key = `${stage.id}:${item.category}`;
    if (!groups[key]) groups[key] = { stage, category: item.category, items: [] };
    groups[key].items.push(item);
    return groups;
  }, {});
}

function groupEntriesByStageAndCategory(entries) {
  return entries.reduce((groups, entry) => {
    const item = materials.find((material) => material.id === entry.id);
    const stage = stages.find((candidate) => candidate.id === entry.stage);
    if (!item || !stage) return groups;

    const key = `${stage.id}:${item.category}`;
    if (!groups[key]) groups[key] = { stage, category: item.category, items: [] };
    groups[key].items.push(item);
    return groups;
  }, {});
}

function renderFeedback({ missing, extra, score, scenario }) {
  feedbackList.innerHTML = "";

  if (!selectedEntries.length) {
    feedbackList.append(feedbackNode("warn", "Brak zestawu", "Na polu roboczym nie ma jeszcze elementów metody."));
    return;
  }

  if (!missing.length && !extra.length) {
    feedbackList.append(feedbackNode("good", "Zestaw zgodny ze zleceniem", "Układ metody jest poprawny."));
  }

  Object.values(groupItemsByStageAndCategory(missing, (id) => stageForItem(id))).forEach((group) => {
    feedbackList.append(
      feedbackNode("bad", `${group.stage.short}. ${group.stage.label}`, `Brak ${categoryGenitive(group.category)}.`)
    );
  });

  Object.values(groupEntriesByStageAndCategory(extra)).forEach((group) => {
    feedbackList.append(
      feedbackNode("warn", `${group.stage.short}. ${group.stage.label}`, `Nadmiarowe ${categoryLabel(group.category)}.`)
    );
  });

  if (score >= 90 && (!missing.length && !extra.length)) {
    feedbackList.append(feedbackNode("good", "Gotowe", "Można przejść do kolejnego ćwiczenia."));
  }
}

function evaluate(showDetailed = true) {
  isEvaluated = true;
  const scenario = getScenario();
  const required = new Set(scenario.requiredIds);
  const selectedInExpectedStage = new Set(
    selectedEntries
      .filter((entry) => {
        const item = materials.find((material) => material.id === entry.id);
        return item && acceptedStagesForItem(item).includes(entry.stage);
      })
      .map((entry) => entry.id)
  );
  const missing = scenario.requiredIds.filter((id) => !selectedInExpectedStage.has(id));
  const extra = selectedEntries
    .filter((entry) => {
      const item = materials.find((material) => material.id === entry.id);
      return !required.has(entry.id) || !acceptedStagesForItem(item).includes(entry.stage);
    });
  let score = 100 - missing.length * 12 - extra.length * 5;
  if (!selectedEntries.length) score = 0;
  score = Math.max(0, Math.min(100, score));

  scoreRing.style.setProperty("--score-pct", `${score}%`);
  scoreValue.textContent = score;

  const verdict = score >= 90 ? "Zgodne" : score >= 65 ? "Do poprawy" : score > 0 ? "Niepełne" : "Nieocenione";
  verdictBadge.textContent = verdict;
  verdictBadge.style.background = score >= 90 ? "#dcfce7" : score >= 65 ? "#fef3c7" : score > 0 ? "#ffe4e6" : "#edf3f7";
  verdictBadge.style.color = score >= 90 ? "#166534" : score >= 65 ? "#92400e" : score > 0 ? "#9f1239" : "#405164";

  if (!showDetailed && !items.length) return;
  renderFeedback({ missing, extra, score, scenario });
  if (score === 100) showCelebration();
}

function showCelebration() {
  if (!celebration || !celebrationBurst) return;

  const colors = ["#0f766e", "#2563eb", "#f59e0b", "#be123c", "#7c3aed", "#16a34a"];
  celebrationBurst.innerHTML = "";
  celebration.hidden = false;

  for (let i = 0; i < 54; i += 1) {
    const piece = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 54;
    const radius = 120 + Math.random() * 260;
    piece.className = "confetti-piece";
    piece.style.setProperty("--x", `${Math.cos(angle) * radius}px`);
    piece.style.setProperty("--y", `${Math.sin(angle) * radius + 90}px`);
    piece.style.setProperty("--r", `${Math.random() * 720 - 360}deg`);
    piece.style.setProperty("--piece-color", colors[i % colors.length]);
    piece.style.animationDelay = `${Math.random() * 280}ms`;
    celebrationBurst.append(piece);
  }

  window.setTimeout(() => {
    celebration.hidden = true;
    celebrationBurst.innerHTML = "";
  }, 3800);
}

function clearEvaluation() {
  isEvaluated = false;
  scoreRing.style.setProperty("--score-pct", "0%");
  scoreValue.textContent = "0";
  verdictBadge.textContent = "Nieocenione";
  verdictBadge.style.background = "#edf3f7";
  verdictBadge.style.color = "#405164";
  feedbackList.innerHTML = "<p>Złóż zestaw metody i kliknij Gotowe.</p>";
}

document.querySelector("#evaluateBtn").addEventListener("click", () => evaluate(true));
showAnswerBtn.addEventListener("click", showRequiredElements);
answerCodeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") showRequiredElements();
});
randomScenarioBtn.addEventListener("click", () => {
  if (scenarios.length < 2) return;
  const current = scenarioSelect.value;
  const pool = scenarios.filter((scenario) => scenario.id !== current);
  const next = pool[Math.floor(Math.random() * pool.length)];
  scenarioSelect.value = next.id;
  selectedEntries = [];
  activeBoardStage = "measurement";
  renderBoard();
  renderScenario();
});
document.querySelector("#resetBtn").addEventListener("click", () => {
  selectedEntries = [];
  renderBoard();
  clearEvaluation();
});
scenarioSelect.addEventListener("change", renderScenario);
searchInput.addEventListener("input", renderMaterials);

renderScenarioOptions();
renderTabs();
renderMaterials();
renderBoard();
renderScenario();
