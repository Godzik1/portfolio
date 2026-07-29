# Moja Wizytówka

Profesjonalna strona-wizytówka zbudowana z **Next.js 15**, **Tailwind CSS v4** i **TypeScript**.

## Szybki start (uruchomienie lokalnie)

```bash
# 1. Zainstaluj zależności (tylko raz)
npm install

# 2. Uruchom serwer deweloperski
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

---

## Co musisz dostosować (TODO)

Wyszukaj `TODO` w całym projekcie — każdy komentarz wskazuje co zmienić:

| Plik | Co zmienić |
|---|---|
| `app/layout.tsx` | Tytuł strony, opis, URL |
| `components/Navbar.tsx` | Logo / inicjały |
| `components/sections/Hero.tsx` | Nagłówek, opis, CTA |
| `components/sections/About.tsx` | Imię, bio, zdjęcie, statystyki |
| `components/sections/Services.tsx` | Usługi, ceny |
| `components/sections/Portfolio.tsx` | Projekty, screenshoty, linki |
| `components/sections/Contact.tsx` | E-mail, telefon, integracja wysyłki |
| `components/Footer.tsx` | Imię, e-mail, linki social media |

---

## Dodanie prawdziwego zdjęcia (sekcja "O mnie")

1. Wrzuć zdjęcie do folderu `public/` np. `public/foto.jpg`
2. W `components/sections/About.tsx` zastąp div z inicjałami:

```tsx
import Image from "next/image";

// Zamiast:
<div className="w-72 h-72 rounded-3xl bg-gradient-to-br ...">
  <span className="text-7xl">JK</span>
</div>

// Wstaw:
<Image
  src="/foto.jpg"
  alt="Jan Kowalski"
  width={288}
  height={288}
  className="w-72 h-72 rounded-3xl object-cover"
  priority
/>
```

---

## Podpięcie formularza kontaktowego

Formularz w `Contact.tsx` jest gotowy — musisz podpiąć wysyłkę e-mail.

### Opcja A — Formspree (najprościej, 5 minut)

1. Zarejestruj się na [formspree.io](https://formspree.io)
2. Utwórz formularz, skopiuj endpoint
3. W `Contact.tsx` zamień `handleSubmit`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("sending");
  await fetch("https://formspree.io/f/TWOJ_ID", {
    method: "POST",
    body: JSON.stringify(form),
    headers: { "Content-Type": "application/json" },
  });
  setStatus("sent");
};
```

### Opcja B — Resend (profesjonalnie)

1. Utwórz konto na [resend.com](https://resend.com) (darmowy plan: 3000 e-mail/mies.)
2. Dodaj `npm install resend`
3. Utwórz `app/api/contact/route.ts` jako Route Handler

---

## Deploy na Cloudflare Pages

### Krok 1 — Wrzuć na GitHub

```bash
git init
git add .
git commit -m "init: strona wizytówka"
# Utwórz repo na github.com, potem:
git remote add origin https://github.com/TWOJ-LOGIN/moja-wizytowka.git
git push -u origin main
```

### Krok 2 — Połącz z Cloudflare Pages

1. Wejdź na [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages**
2. Kliknij **Create** → **Pages** → **Connect to Git**
3. Wybierz repozytorium GitHub
4. Ustaw build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npx @cloudflare/next-on-pages@1`
   - **Output directory:** `.vercel/output/static`
5. Kliknij **Save and Deploy**

Dostaniesz bezpłatny adres: `moja-wizytowka.pages.dev` + SSL.

### Krok 3 — Własna domena

1. Kup domenę (np. przez [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) ~$10/rok dla .com)
2. W Cloudflare Pages → **Custom domains** → wpisz domenę
3. Cloudflare automatycznie ustawi DNS i SSL

---

## Technologie

- [Next.js 15](https://nextjs.org) — framework React
- [Tailwind CSS v4](https://tailwindcss.com) — stylowanie
- [Lucide React](https://lucide.dev) — ikony
- [TypeScript](https://www.typescriptlang.org) — typowanie

## Struktura projektu

```
├── app/
│   ├── globals.css       # style globalne + Tailwind
│   ├── layout.tsx        # HTML layout + metadata SEO
│   └── page.tsx          # strona główna
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       └── Contact.tsx
├── lib/
│   └── utils.ts          # helper cn()
└── public/               # statyczne pliki (zdjęcia)
```
