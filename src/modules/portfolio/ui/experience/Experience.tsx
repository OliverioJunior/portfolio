"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer } from "@/shared/hooks";
import styles from "./Experience.module.css";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  color: string;
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Arena Sportlucky",
      role: "Full Stack Developer",
      period: "2023 - 2025",
      description:
        "Liderei o desenvolvimento de múltiplas aplicações web utilizando tecnologias modernas. Implementei pipelines de CI/CD e melhorei a performance das aplicações em 40%.",
      technologies: ["React", "Node.js", "TypeScript", "Next.js", "Docker"],
      color: "blue",
    },
    {
      company: "Startup Zam",
      role: "Desenvolvedor Front-end Voluntário",
      period: "Mai 2022 - Set 2022",
      description:
        "Colaborei em equipes ágeis utilizando metodologias Scrum, desenvolvendo interfaces mobile com React Native e integrações GraphQL.",
      technologies: ["React Native", "GraphQL", "Apollo", "Scrum"],
      color: "purple",
    },
    {
      company: "Triple Axis",
      role: "Trainee",
      period: "2021 - 2022",
      description:
        "Participei de programa de trainee focado em desenvolvimento ágil e metodologias de projeto, construindo bases sólidas em desenvolvimento de software.",
      technologies: ["Agile", "Scrum", "Team Work"],
      color: "green",
    },
  ];

  const { ref: titleRef, controls: titleControls } = useScrollAnimation();
  const { ref: timelineRef, controls: timelineControls } = useScrollAnimation({
    delay: 300,
  });

  const timelineVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const techVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <motion.h2
          className={styles.experience__title}
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={fadeInUp}
        >
          Experiência <span className={styles.gradient_text}>Profissional</span>
        </motion.h2>

        <div className={styles.timeline_wrapper}>
          <motion.div
            className={styles.timeline_content}
            ref={timelineRef}
            initial="hidden"
            animate={timelineControls}
            variants={timelineVariants}
          >
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isSecond = index === 1;

              return (
                <div
                  key={index}
                  className={`${styles.timeline_item} ${
                    isSecond ? styles.timeline_item_second : ""
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`${styles.card_wrapper} ${
                      isEven
                        ? styles.card_wrapper_left
                        : styles.card_wrapper_right
                    }`}
                  >
                    <motion.div
                      className={styles.card_content}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <span
                        className={`${styles.period} ${
                          styles[`period_${exp.color}`]
                        }`}
                      >
                        {exp.period}
                      </span>
                      <h3 className={styles.company}>{exp.company}</h3>
                      <p
                        className={`${styles.role} ${
                          styles[`role_${exp.color}`]
                        }`}
                      >
                        {exp.role}
                      </p>
                      <p className={styles.description}>{exp.description}</p>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className={styles.timeline_dot_wrapper}>
                    <div
                      className={`${styles.timeline_dot} ${
                        styles[`timeline_dot_${exp.color}`]
                      }`}
                    ></div>
                  </div>

                  {/* Technologies */}
                  <div
                    className={`${styles.tech_wrapper} ${
                      isEven
                        ? styles.tech_wrapper_right
                        : styles.tech_wrapper_left
                    }`}
                  >
                    <motion.div
                      className={styles.tech_list}
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className={`${styles.tech_item} ${
                            styles[`tech_item_${exp.color}`]
                          }`}
                          variants={techVariants}
                          custom={techIndex}
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
