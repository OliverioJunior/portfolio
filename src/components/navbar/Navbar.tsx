"use client";
import React, { memo, useState, useCallback } from "react";
import { NavbarProps, NavItem } from "./types";
import { useScrollSpy, scrollToSection } from "@/shared/hooks";
import "./Navbar.styles.css";

const NavbarItem = memo<{
  item: NavItem;
  onClick?: (item: NavItem) => void;
  activeSection?: string;
}>(({ item, onClick, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      // Handle internal navigation with scroll
      if (item.href.startsWith("/#")) {
        const sectionId = item.href.substring(2); // Remove '/#'
        scrollToSection(sectionId);
      } else if (item.href.startsWith("/")) {
        // Handle route navigation
        window.location.href = item.href;
      } else {
        // Handle external links
        window.open(item.href, "_blank", "noopener noreferrer");
      }

      onClick?.(item);
    },
    [item, onClick]
  );

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <li
      className={`navbar__item ${
        item.href.startsWith("/#") && activeSection === item.href.substring(2)
          ? "navbar__item--active"
          : item.isActive
          ? "navbar__item--active"
          : ""
      }`}
      onMouseEnter={hasChildren ? handleMouseEnter : undefined}
      onMouseLeave={hasChildren ? handleMouseLeave : undefined}
    >
      <a href={item.href} className="navbar__link" onClick={handleClick}>
        {item.icon && <span className="navbar__icon">{item.icon}</span>}
        {item.label}
      </a>

      {hasChildren && isOpen && (
        <ul className="navbar__dropdown">
          {item?.children?.map((child) => (
            <NavbarItem
              key={child.href}
              item={child}
              onClick={onClick}
              activeSection={activeSection}
            />
          ))}
        </ul>
      )}
    </li>
  );
});

NavbarItem.displayName = "NavbarItem";

export const Navbar = memo<NavbarProps>(
  ({
    items,
    logo,
    className = "",
    variant = "default",
    position = "static",
    onNavItemClick,
  }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Get section IDs from navigation items
    const sectionIds = items
      .filter((item) => item.href.startsWith("/#"))
      .map((item) => item.href.substring(2));

    const activeSection = useScrollSpy({ sectionIds, offset: 100 });

    const navbarClassName = `
    navbar
    navbar--${variant}
    navbar--${position}
    ${isMobileMenuOpen ? "navbar--mobile-open" : ""}
    ${className}
  `.trim();

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

    return (
      <nav className={navbarClassName}>
        <div className="navbar__container">
          {logo && <div className="navbar__logo navbar__icon">{logo}</div>}

          <button
            className="navbar__mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="navbar__mobile-icon">
              <span className="hamburger-line"></span>
            </span>
          </button>

          <ul className="navbar__items">
            {items.map((item) => (
              <NavbarItem
                key={item.href}
                item={item}
                onClick={onNavItemClick}
                activeSection={activeSection}
              />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";
