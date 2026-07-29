import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "wizytówki.dev — Nowoczesne strony wizytówkowe dla firm",
  description:
    "Tworzę piękne strony wizytówkowe dla małych firm w 7–14 dni. Restauracje, gabinety, salony, usługodawcy. Pakiety od 799 zł z hostingiem i SSL.",
  keywords: [
    "strona wizytówkowa",
    "strona internetowa dla firmy",
    "tworzenie stron",
    "strona dla małej firmy",
    "web developer Warszawa",
  ],
  metadataBase: new URL("https://wizytowki.dev"),
  openGraph: {
    title: "wizytówki.dev — Nowoczesne strony wizytówkowe dla firm",
    description:
      "Piękne strony wizytówkowe dla małych firm w 7–14 dni. Pakiety od 799 zł.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body suppressHydrationWarning className="bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
