"use client";
import Image from "next/image";
import "./page.styles.css";
import { Header, Navbar, NavItem } from "@/components";
import { FaHome, FaBlog } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdOutlineWork, MdContactPhone } from "react-icons/md";
import { Hero, Experience, Projects } from "@/modules/portfolio/ui";

export default function Home() {
  const navItems = [
    {
      label: "Home",
      href: "/",
      isActive: true,
      icon: <FaHome />,
    },
    {
      label: "Experiências",
      href: "/experiences",
      icon: <MdOutlineWork />,
    },
    {
      label: "Projetos",
      href: "/projects",
      icon: <GrProjects />,
      children: [
        { label: "Web", href: "/projects/web" },
        { label: "Mobile", href: "/projects/mobile" },
      ],
    },
    {
      label: "Entrar em Contato",
      href: "/contactme",
      icon: <MdContactPhone />,
    },
    {
      label: "Blog",
      href: "/blog",
      icon: <FaBlog />,
    },
  ];

  const handleNavItemClick = (item: NavItem) => {
    console.log("Clicked:", item.label);
  };
  return (
    <div className="page">
      <Header>
        <Navbar
          items={navItems}
          logo={
            <Image
              width={50}
              height={50}
              src="/Sabedoria.svg"
              alt="Sabedoria"
              title="Sabedoria"
              priority
            />
          }
          variant="colored"
          position="sticky"
          onNavItemClick={handleNavItemClick}
        />
      </Header>
      <main className="main">
        <Hero />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
