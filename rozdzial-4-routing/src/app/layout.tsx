import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Katalog Użytkowników",
  description: "Projekt z routingu w Next.js",
};

export default function RootLayout({
  children,
  stats,
}: Readonly<{
  children: React.ReactNode;
  stats: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col antialiased bg-[#fffdfd]`}
      >
        {/* Pasek nawigacyjny */}
        <nav style={{ 
          display: 'flex', 
          gap: '2rem', 
          padding: '1.2rem 2rem', 
          background: '#ffffff', 
          borderBottom: '2px solid #fecdd3',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <Link href="/" style={{ fontWeight: 'bold', color: '#9f1239', textDecoration: 'none', fontSize: '1.1rem' }}>
            Strona główna
          </Link>
          <Link href="/users" style={{ fontWeight: 'bold', color: '#9f1239', textDecoration: 'none', fontSize: '1.1rem' }}>
            Użytkownicy
          </Link>
        </nav>

        {/* Główna treść strony */}
        <main style={{ padding: '2.5rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          {children}
          {/* Wyświetlenie naszego slotu równoległego */}
          {stats}
        </main>
      </body>
    </html>
  );
}