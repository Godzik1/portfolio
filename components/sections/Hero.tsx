import { ArrowDown, CheckCircle, Sparkles } from "lucide-react";

const perks = [
  "Realizacja w 7–14 dni",
  "Responsywna na telefonie",
  "Widoczna w Google (SEO)",
  "Certyfikat SSL gratis",
  "Hosting w cenie przez rok",
];

const industries = [
  "restauracja", "gabinet fizjo", "salon beauty",
  "sklep detailingowy", "klinika estetyczna", "usługi budowlane",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 pb-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700/80 rounded-full px-4 py-1.5 text-sm text-slate-300 mb-8 backdrop-blur-sm whitespace-nowrap">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
          <span className="hidden sm:inline">Przyjmuję nowe zlecenia - czas realizacji do 14 dni</span>
          <span className="sm:hidden">Przyjmuję zlecenia · realizacja do 14 dni</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Twoja firma w sieci
          <br />
          <span className="text-gradient">pięknie i szybko</span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
          Tworzę nowoczesne strony wizytówkowe dla małych firm i freelancerów.
          Klienci Cię znajdą, zaufają i zadzwonią - zanim trafi do konkurencji.
        </p>

        {/* Scrolling industries */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {industries.map((ind) => (
            <span key={ind}
              className="bg-slate-800/60 border border-slate-700/50 text-slate-400 px-3 py-1 rounded-full text-xs font-medium">
              {ind}
            </span>
          ))}
        </div>

        {/* Perks */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 mb-12">
          {perks.map((perk) => (
            <div key={perk} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              {perk}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#portfolio"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.03] shadow-xl shadow-indigo-600/25 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Zobacz przykładowe realizacje
          </a>
          <a href="#kontakt"
            className="border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all">
            Poproś o bezpłatną wycenę
          </a>
        </div>
      </div>

      <a href="#o-mnie"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
        aria-label="Przewiń w dół">
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
