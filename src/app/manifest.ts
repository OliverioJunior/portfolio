import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Olivério Júnior - Portfolio",
    short_name: "OJ Portfolio",
    description:
      "Portfolio profissional de Olivério Júnior - Engenheiro de Software Full-Stack",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#4F46E5",
    orientation: "portrait-primary",
    categories: ["portfolio", "developer", "technology"],
    lang: "pt-BR",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32",
        type: "image/x-icon",
      },
      {
        src: "/sabedoria-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    screenshots: [
      {
        src: "/screenshot-desktop.jpg",
        sizes: "1280x720",
        type: "image/jpeg",
        form_factor: "wide",
        label: "Portfolio Desktop View",
      },
      {
        src: "/screenshot-mobile.jpg",
        sizes: "375x667",
        type: "image/jpeg",
        form_factor: "narrow",
        label: "Portfolio Mobile View",
      },
    ],
  };
}
