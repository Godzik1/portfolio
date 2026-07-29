import Image from "next/image";
import { ExternalLink } from "lucide-react";

// TODO: Zastąp prawdziwymi projektami - podmień image, link i opisy
const projects = [
  {
    title: "Trattoria Bella",
    description:
      "Elegancka strona restauracji z interaktywnym menu, galerią ze lightboxem, live rezerwacją stolika, odliczaniem dania tygodnia i mapą.",
    tags: ["Next.js", "Tailwind CSS v4", "TypeScript"],
    category: "Wizytówka",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    accentColor: "text-amber-400",
    image: "/images/trattoria_hero.webp",
    link: "http://localhost:3001",
    liveLabel: "Otwórz demo →",
  },
  {
    title: "Vitalis Fizjoterapia",
    description:
      "Nowoczesna strona centrum fizjoterapii z cennikiem, galerią ze lightboxem, formularzem rezerwacji, sekcją zespołu i opiniami pacjentów.",
    tags: ["Next.js", "Tailwind CSS v4", "TypeScript"],
    category: "Wizytówka",
    gradient: "from-sky-500/20 via-teal-500/10 to-transparent",
    accentColor: "text-sky-400",
    image: "/images/physio_hero.webp",
    link: "http://localhost:3002",
    liveLabel: "Otwórz demo →",
  },
  {
    title: "APEX Detailing",
    description:
      "Ekskluzywna strona studia detailingu premium z ciemnym motywem, galerią ze lightboxem, cennikiem pakietów, formularzem rezerwacji i procesem realizacji.",
    tags: ["Next.js", "Tailwind CSS v4", "TypeScript"],
    category: "Wizytówka",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
    accentColor: "text-yellow-400",
    image: "/images/detailing_hero.webp",
    link: "http://localhost:3003",
    liveLabel: "Otwórz demo →",
  },
  {
    title: "Lumière Clinic",
    description:
      "Elegancka strona kliniki medycyny estetycznej i PMU z cennikiem, galerią ze lightboxem, formularzem rezerwacji, sekcją o specjalistce i procesem zabiegu.",
    tags: ["Next.js", "Tailwind CSS v4", "TypeScript"],
    category: "Wizytówka",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    accentColor: "text-rose-400",
    image: "/images/pmu_hero.webp",
    link: "http://localhost:3004",
    liveLabel: "Otwórz demo →",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-14 lg:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Przykładowe realizacje
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Gotowe demo{" "}<span className="text-gradient">kliknij i sprawdź</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Każde z poniższych demo to w pełni działająca strona w prawdziwej branży. Taka może wyglądać Twoja wizytówka.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:scale-[1.01] flex flex-col"
            >
              {/* Preview image or gradient placeholder */}
              <div className="relative h-48 border-b border-slate-800 overflow-hidden">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={`Podgląd: ${project.title}`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    {/* Live badge */}
                    <span className="absolute top-3 right-3 bg-green-500/20 border border-green-500/40 text-green-400 text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-widest uppercase">
                      Live demo
                    </span>
                  </>
                ) : (
                  <div
                    className={`h-full bg-gradient-to-br ${project.gradient} bg-slate-900 flex items-center justify-center`}
                  >
                    <p className="text-slate-600 text-xs font-medium">
                      Podgląd strony
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest ${project.accentColor}`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="text-white text-xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                  <a
                    href={project.link}
                    className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {project.liveLabel}
                  </a>
                  <a
                    href="#kontakt"
                    className="text-slate-500 hover:text-white text-sm transition-colors"
                  >
                    Chcę podobny →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">Chcesz coś podobnego dla swojej firmy?</p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-[1.03] shadow-xl shadow-indigo-600/25"
          >
            Zamów bezpłatną wycenę →
          </a>
        </div>
      </div>
    </section>
  );
}
