import { Globe, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { href: "#o-mnie", label: "O mnie" },
  { href: "#uslugi", label: "Oferta" },
  { href: "#portfolio", label: "Realizacje" },
  { href: "#kontakt", label: "Kontakt" },
];

const offerings = [
  { label: "Strona wizytówkowa - od 1 000 zł" },
  { label: "Galeria, mapa, rezerwacje" },
  { label: "Hosting + SSL w cenie" },
  { label: "Bezpłatna wycena" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-xl font-bold text-gradient mb-3">
              <Globe className="w-5 h-5 text-indigo-400" />
              wizytówki.dev
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Tworzę nowoczesne strony wizytówkowe dla małych firm. Szybko, pięknie, w cenie.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:kontakt@wizytowki.dev" aria-label="E-mail"
                className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Nawigacja</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-500 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Pakiety</p>
            <ul className="space-y-2">
              {offerings.map((o) => (
                <li key={o.label}>
                  <a href="#uslugi" className="text-slate-500 hover:text-white text-sm transition-colors">
                    {o.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <p className="text-white font-semibold text-sm mb-4">Kontakt</p>
            <p className="text-slate-500 text-sm mb-1">kontakt@wizytowki.dev</p>
            <p className="text-slate-500 text-sm mb-4">+48 123 456 789</p>
            <a href="#kontakt"
              className="block text-center bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors lg:inline-block lg:text-left">
              Bezpłatna wycena →
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
          <p>© {year} wizytówki.dev · Wszelkie prawa zastrzeżone.</p>
          <p className="flex items-center gap-1.5">
            Zbudowane z <span className="text-indigo-500 font-medium">Next.js</span> &{" "}
            <span className="text-indigo-500 font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
