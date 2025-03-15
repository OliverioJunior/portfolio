"use client";

import React from "react";
import styles from "./hero.module.css";
import { Button, ButtonSize, ButtonVariant } from "@/components";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>Olivério Júnior</h1>
        <h2 className={styles.hero__subtitle}>Software Engineer</h2>
        <p className={styles.hero__description}>
          Building modern web applications with a focus on user experience and
          performance
        </p>
        <div className={styles.hero__actions}>
          <Button size={ButtonSize.MEDIUM} variant={ButtonVariant.GHOST}>
            <a href="#projects" className={styles.hero__button__primary}>
              {"View Projects "}
            </a>
          </Button>
          <Button size={ButtonSize.MEDIUM} variant={ButtonVariant.GHOST}>
            <a href="#contact" className={styles.hero__button__secondary}>
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
