"use client";

import { useState } from "react";
import { Mail, Phone, MessageSquare, Send, CheckCircle, Clock } from "lucide-react";

const processSteps = [
  "Wypełniasz formularz - opisujesz firmę i czego potrzebujesz",
  "W ciągu 24h odpisuję z wyceną i propozycją pakietu",
  "Pokazuję gotowy projekt / demo przed podpisaniem umowy",
  "Po akceptacji realizuję stronę w ustalonym terminie",
  "Przekazuję gotową stronę z instruktażem i pełnym dostępem",
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", business: "", budget: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", business: "", budget: "", message: "" });
  };

  return (
    <section id="kontakt" className="py-14 lg:py-24 bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-4">Kontakt</p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Zacznijmy od <span className="text-gradient">bezpłatnej wyceny</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Opisz swoją firmę i czego potrzebujesz. Odezwę się w ciągu 24 godzin z propozycją i wyceną - bez zobowiązań.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-5">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-5">Dane kontaktowe</h3>
              <div className="space-y-4">
                <a href="mailto:kontakt@wizytowki.dev"
                  className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">E-mail</p>
                    <p className="font-medium">kontakt@wizytowki.dev</p>
                  </div>
                </a>
                <a href="tel:+48123456789"
                  className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Telefon / WhatsApp</p>
                    <p className="font-medium">+48 123 456 789</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Czas odpowiedzi</p>
                    <p className="font-medium text-white">Do 24 godzin</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Preferowany kontakt</p>
                    <p className="font-medium text-white">E-mail lub WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-5">Jak wygląda współpraca?</h3>
              <ol className="space-y-3">
                {processSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="w-6 h-6 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 font-bold flex-shrink-0 mt-0.5 text-xs">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {status === "sent" ? (
              <div className="h-full min-h-64 flex flex-col items-center justify-center text-center bg-slate-900 border border-slate-800 rounded-2xl p-10">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Wiadomość wysłana!</h3>
                <p className="text-slate-400 max-w-xs">Odezwę się w ciągu 24 godzin z wyceną i propozycją.</p>
                <button onClick={() => setStatus("idle")}
                  className="mt-6 text-indigo-400 hover:text-indigo-300 text-sm transition-colors">
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Imię i nazwisko *</label>
                    <input type="text" required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jan Kowalski"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Adres e-mail *</label>
                    <input type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jan@firma.pl"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">Czym zajmuje się Twoja firma? *</label>
                  <input type="text" required value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    placeholder="np. gabinet fizjoterapii, restauracja, salon fryzjerski..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm" />
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">Orientacyjny budżet</label>
                  <select value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm appearance-none">
                    <option value="" className="bg-slate-800">Wybierz zakres...</option>
                    <option value="1000-1500" className="bg-slate-800">1 000–1 500 zł</option>
                    <option value="1500-2500" className="bg-slate-800">1 500–2 500 zł</option>
                    <option value="2500-4000" className="bg-slate-800">2 500–4 000 zł</option>
                    <option value="4000+" className="bg-slate-800">Powyżej 4 000 zł</option>
                    <option value="unknown" className="bg-slate-800">Nie wiem - proszę o wycenę</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">Co ma zawierać strona? *</label>
                  <textarea required value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Np. galeria zdjęć, formularz rezerwacji, cennik usług, mapa dojazdu, opinie klientów..."
                    rows={4}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none text-sm" />
                </div>

                <button type="submit" disabled={status === "sending"}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 hover:scale-[1.01]">
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Wyślij zapytanie o wycenę
                    </>
                  )}
                </button>

                <p className="text-slate-600 text-xs text-center">
                  Bezpłatna wycena · Odpowiedź w 24h · Bez zobowiązań
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
