"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Header, Navbar, NavItem } from "@/components";
import { FaHome, FaBlog } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdOutlineWork } from "react-icons/md";
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
      label: "Projects",
      href: "/projects",
      icon: <GrProjects />,
      children: [
        { label: "Web", href: "/projects/web" },
        { label: "Mobile", href: "/projects/mobile" },
      ],
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
    <div className={styles.page}>
      <Header>
        <Navbar
          items={navItems}
          logo={
            <Image
              width={50}
              height={50}
              src="/Sabedoria.svg"
              alt="Logo"
              priority
            />
          }
          variant="colored"
          position="sticky"
          onNavItemClick={handleNavItemClick}
        />
      </Header>
    </div>
  );
}
