"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/shared/hooks";
import styles from "./About.module.css";

interface Skill {
  name: string;
  items: string[];
  color: string;
}

interface Stat {
  value: string;
  label: string;
}

export const About = () => {
  const { ref: titleRef, controls: titleControls } = useScrollAnimation();
  const { ref: contentRef, controls: contentControls } = useScrollAnimation({
    delay: 200,
  });
  const { ref: skillsRef, controls: skillsControls } = useScrollAnimation({
    delay: 400,
  });

  const skills: Skill[] = [
    {
      name: "Frontend",
      items: ["React", "TypeScript", "Next.js", "React Native"],
      color: "blue",
    },
    {
      name: "Backend",
      items: ["Node.js", "GraphQL", "Apollo", "Docker"],
      color: "purple",
    },
    {
      name: "Ferramentas",
      items: ["Git", "GitHub", "Figma", "Scrum"],
      color: "green",
    },
  ];

  const stats: Stat[] = [
    { value: "3+", label: "Anos de Experiência" },
    { value: "15+", label: "Projetos Concluídos" },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            className={styles.content}
            ref={contentRef}
            initial="hidden"
            animate={contentControls}
            variants={fadeInLeft}
          >
            <motion.h2
              className={styles.title}
              ref={titleRef}
              initial="hidden"
              animate={titleControls}
              variants={fadeInUp}
            >
              Sobre <span className={styles.gradientText}>Mim</span>
            </motion.h2>
            <motion.p className={styles.description} variants={staggerItem}>
              Com mais de 3 anos de experiência em desenvolvimento de software,
              especializo-me em criar soluções digitais inovadoras que combinam
              funcionalidade robusta com design intuitivo.
            </motion.p>
            <motion.p className={styles.description} variants={staggerItem}>
              Minha paixão é transformar ideias complexas em aplicações simples
              e eficientes, sempre priorizando a qualidade do código e a
              experiência do usuário final.
            </motion.p>

            <motion.div
              className={styles.statsGrid}
              variants={staggerContainer}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={styles.statCard}
                  variants={staggerItem}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.skillsContainer}
            ref={skillsRef}
            initial="hidden"
            animate={skillsControls}
            variants={fadeInRight}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={styles.skillCard}
                variants={staggerItem}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <h3 className={styles.skillTitle}>{skill.name}</h3>
                <motion.div
                  className={styles.skillItems}
                  variants={staggerContainer}
                >
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      className={`${styles.skillItem} ${
                        styles[`skill${skill.color}`]
                      }`}
                      variants={staggerItem}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      custom={itemIndex}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
