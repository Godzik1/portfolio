import { CheckCircle, ArrowRight, Plus } from "lucide-react";

const baseFeatures = [
  "Projekt indywidualny dopasowany do branży",
  "Responsywna na telefonie i tablecie",
  "Certyfikat SSL (HTTPS)",
  "Hosting przez 12 miesięcy",
  "Podłączenie pod domenę",
  "Formularz kontaktowy",
  "Optymalizacja SEO (meta, tytuły, Open Graph)",
  "Projekt do akceptacji przed realizacją",
];

const extras = [
  { label: "Galeria zdjęć ze lightboxem", badge: null },
  { label: "Sekcja opinii / testimoniali", badge: null },
  { label: "Mapa dojazdu (Google Maps / OSM)", badge: null },
  { label: "Cennik usług lub pakiety", badge: null },
  { label: "Sekcja zespołu / o nas", badge: null },
  { label: "Formularz rezerwacji / booking", badge: null },
  { label: "Blog / aktualności", badge: null },
  { label: "Integracja z Google Analytics", badge: null },
  { label: "Animacje i efekty interaktywne", badge: null },
  { label: "Zdjęcia stockowe / dobór grafik", badge: null },
  { label: "Opieka techniczna po wdrożeniu", badge: "popularne" },
  { label: "Copywriting (treści na stronę)", badge: null },
];

export default function Services() {
  return (
    <section id="uslugi" className="py-14 lg:py-24 bg-slate-900/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-4">Oferta</p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Strona wizytówkowa<br className="sm:hidden" />{" "}<span className="text-gradient whitespace-nowrap">od 1 000 zł</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Jedna przejrzysta oferta. Cena zależy od zakresu - im więcej sekcji i funkcji, tym wyższa wycena. Zawsze wiesz za co płacisz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Base */}
          <div className="bg-slate-900 border border-indigo-500/40 rounded-2xl p-8 shadow-2xl shadow-indigo-600/10">
            <div className="mb-6">
              <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-1">Zawsze w cenie</p>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-2xl font-bold text-white">Strona wizytówkowa</h3>
                <p className="text-3xl font-bold text-white whitespace-nowrap">od 1 000 zł</p>
              </div>
              <p className="text-slate-500 text-xs mt-1">cena rośnie wraz z zakresem</p>
            </div>

            <ul className="space-y-3 mb-8">
              {baseFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a href="#kontakt"
              className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] group">
              Poproś o bezpłatną wycenę
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Extras */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-2">
              <Plus className="w-4 h-4 text-slate-400" />
              <p className="text-slate-300 text-sm font-semibold">Opcje dodatkowe wpływające na cenę</p>
            </div>
            <p className="text-slate-500 text-xs mb-6 leading-relaxed">
              Wybierz tylko to, czego naprawdę potrzebujesz - nie płacisz za zbędne funkcje.
            </p>

            <ul className="space-y-2.5">
              {extras.map((e) => (
                <li key={e.label} className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0" />
                  <span className="flex-1">{e.label}</span>
                  {e.badge && (
                    <span className="bg-violet-500/20 border border-violet-500/30 text-violet-300 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {e.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-slate-800">
              <p className="text-slate-500 text-xs leading-relaxed">
                Nie wiesz czego potrzebujesz? Napisz do mnie - razem ustalimy co ma znaleźć się na Twojej stronie i wyślę wycenę w ciągu 24h.
              </p>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { title: "Bezpłatna wycena", desc: "Opisz projekt - wycenię bez zobowiązań." },
            { title: "Projekt przed płatnością", desc: "Akceptujesz wygląd zanim przelew dotrze." },
            { title: "Termin w umowie", desc: "Czas realizacji zawsze zapisany na papierze." },
          ].map((g) => (
            <div key={g.title} className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-slate-700 transition-colors">
              <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-white font-semibold text-sm mb-1">{g.title}</p>
              <p className="text-slate-500 text-xs">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
