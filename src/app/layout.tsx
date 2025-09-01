import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olivério Júnior - Engenheiro de Software Full-Stack",
  description:
    "Desenvolvedor Full-Stack especializado em React, Node.js e TypeScript. Mais de 3 anos de experiência criando soluções digitais inovadoras e escaláveis.",
  keywords: [
    "Desenvolvedor Full-Stack",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "Frontend",
    "Backend",
    "Portfolio",
    "Olivério Júnior",
  ],
  authors: [{ name: "Olivério Júnior" }],
  creator: "Olivério Júnior",
  publisher: "Olivério Júnior",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://oliverio-junior.vercel.app",
    title: "Olivério Júnior - Engenheiro de Software Full-Stack",
    description:
      "Desenvolvedor Full-Stack especializado em React, Node.js e TypeScript. Mais de 3 anos de experiência criando soluções digitais inovadoras.",
    siteName: "Olivério Júnior Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Olivério Júnior - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivério Júnior - Engenheiro de Software Full-Stack",
    description:
      "Desenvolvedor Full-Stack especializado em React, Node.js e TypeScript.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div id="root">{children}</div>

        <Analytics />
      </body>
    </html>
  );
}
