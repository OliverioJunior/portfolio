"use client";
import React, { memo } from "react";
import { HeaderProps } from "./types";
import "./Header.styles.css";

export const Header = memo<HeaderProps>(({ children, className = "" }) => {
  const headerClassName = `header header--fixed ${className}`.trim();

  return <header className={headerClassName}>{children}</header>;
});

Header.displayName = "Header";
