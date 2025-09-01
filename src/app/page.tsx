"use client";
import "./page.styles.css";
import { Header, Navbar, NavItem } from "@/components";
import {
  Hero,
  About,
  Experience,
  Projects,
  Contact,
  Footer,
} from "@/modules/portfolio/ui";

export default function Home() {
  const navItems = [
    {
      label: "Início",
      href: "/#home",
      isActive: true,
    },
    {
      label: "Sobre",
      href: "/#about",
    },
    {
      label: "Experiência",
      href: "/#experience",
    },
    {
      label: "Projetos",
      href: "/#projects",
    },
    {
      label: "Contato",
      href: "/#contact",
    },
  ];

  const handleNavItemClick = (item: NavItem) => {
    console.log("Clicked:", item.label);
  };
  return (
    <>
      <div className="page">
        <Header>
          <Navbar
            items={navItems}
            logo={
              <div
                className="text-xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                OJ
              </div>
            }
            variant="colored"
            position="sticky"
            onNavItemClick={handleNavItemClick}
          />
        </Header>
        <main className="main">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
