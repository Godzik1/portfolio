const stats = [
  { label: "Stron wizytówkowych", value: "4+" },
  { label: "Zadowolonych klientów", value: "4+" },
  { label: "Śr. czas realizacji", value: "10 dni" },
  { label: "Technologii w stacku", value: "10+" },
];

const whys = [
  {
    title: "Specjalizacja, nie generalizacja",
    desc: "Robię wyłącznie strony wizytówkowe - dlatego robię je szybciej, taniej i lepiej niż duże agencje, które traktują wizytówkę jako najmniejszy projekt.",
  },
  {
    title: "Nowoczesny stack technologiczny",
    desc: "Każda strona to czysty, ręcznie pisany kod - Next.js, React, Tailwind CSS. Żadnych kreatorów stron. Efekt? Szybkość, kontrola i możliwość rozbudowy w każdej chwili.",
  },
  {
    title: "Stack nowej generacji",
    desc: "Next.js, Tailwind CSS, Cloudflare Pages. Twoja strona ładuje się poniżej sekundy, działa na każdym urządzeniu i jest zoptymalizowana pod Google.",
  },
  {
    title: "Gotowe demo przed decyzją",
    desc: "Zanim zapłacisz - pokażę Ci gotową stronę w Twojej branży. Wiesz dokładnie co dostajesz, bez niespodzianek.",
  },
];

const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS v4", "Cloudflare Pages", "SEO", "Figma", "Git"];

export default function About() {
  return (
    <section id="o-mnie" className="py-14 lg:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Dlaczego ja?
            </p>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Wizytówki firmowe
              <br />
              <span className="text-gradient">to moja specjalność</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-5">
              Tworzę strony wizytówkowe dla małych firm - restauracji, gabinetów, salonów, warsztatów i usługodawców. To moja nisza i właśnie dlatego robię to lepiej.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Każda strona, którą widzisz w moim portfolio, to w pełni działające demo - możesz kliknąć, sprawdzić i zobaczyć, jak Twoja przyszła strona może wyglądać. Bez prezentacji w PowerPoint, bez oczekiwania tygodniami na projekt.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((s) => (
                <span key={s}
                  className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
                  {s}
                </span>
              ))}
            </div>

            <a href="#kontakt"
              className="flex sm:inline-flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-[1.03] shadow-lg shadow-indigo-600/20">
              Porozmawiajmy o Twojej stronie →
            </a>
          </div>

          {/* Right - Why me cards */}
          <div className="space-y-4">
            {whys.map((w, i) => (
              <div key={w.title}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors flex gap-4">
                <div className="w-8 h-8 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 font-bold text-sm flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{w.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {stats.map((stat) => (
            <div key={stat.label}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-slate-700 transition-colors">
              <p className="text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
