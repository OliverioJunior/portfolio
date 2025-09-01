"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { staggerContainer, staggerItem } from "@/shared/hooks";
import styles from "./hero.module.css";

export const Hero = () => {
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const nameVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },

    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="home" className={styles.hero}>
      <motion.div
        className={styles.hero__content}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 className={styles.hero__title} variants={titleVariants}>
          Olivério
          <motion.span className={styles.hero__name} variants={nameVariants}>
            Júnior
          </motion.span>
        </motion.h1>

        <motion.p className={styles.hero__subtitle} variants={staggerItem}>
          Engenheiro de Software
        </motion.p>

        <motion.p className={styles.hero__description} variants={staggerItem}>
          Especializado em desenvolvimento full-stack com foco em soluções
          escaláveis e experiência do usuário excepcional
        </motion.p>

        <motion.div
          className={styles.hero__actions}
          variants={staggerContainer}
        >
          <motion.a
            href="#projects"
            className={styles.hero__button__primary}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Ver Projetos
          </motion.a>

          <motion.a
            href="#contact"
            className={styles.hero__button__secondary}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Entre em Contato
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
