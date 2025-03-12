"use client";
import React, { memo, useState, useCallback } from "react";
import { NavbarProps, NavItem } from "./types";
import "./Navbar.styles.css";

const NavbarItem = memo<{ item: NavItem; onClick?: (item: NavItem) => void }>(
  ({ item, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    const handleClick = useCallback(() => {
      onClick?.(item);
    }, [item, onClick]);

    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    return (
      <li
        className={`navbar__item ${
          item.isActive ? "navbar__item--active" : ""
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
              <NavbarItem key={child.href} item={child} onClick={onClick} />
            ))}
          </ul>
        )}
      </li>
    );
  }
);

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
            <NavbarItem key={item.href} item={item} onClick={onNavItemClick} />
          ))}
        </ul>
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";
