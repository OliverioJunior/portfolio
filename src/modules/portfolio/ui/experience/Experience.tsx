"use client";
import React from "react";
import styles from "./Experience.module.css";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Arena Sportlucky",
      role: "Full Stack Developer",
      period: "2023 - 2025",
      description:
        "Led development of multiple web applications using React and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.",
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "Nextjs",
        "Electron",
        "Git",
        "Github",
        "Docker",
        "Figma",
        "Agile",
      ],
    },
    {
      company: "Startup Zam",
      role: "Desenvolvedor Front-end Voluntário",
      period: "Mai 2022 - Set 2022",
      description:
        "Colaborei em equipes ágeis utilizando o framework Scrum, aprimorando habilidades em metodologias de desenvolvimento.",
      technologies: [
        "React Native",
        "Apollo",
        "GraphQL",
        "TypeScript",
        "Figma",
      ],
    },
    {
      company: "Triple Axis",
      role: "Trainee",
      period: "2021 - 2022",
      description:
        "Colaborei em equipes ágeis utilizando o framework Scrum, aprimorando habilidades em metodologias de desenvolvimento.",
      technologies: ["React"],
    },
  ];

  return (
    <section className={styles.experience} id="experiences">
      <h2 className={styles.experience__title}>Professional Experience</h2>
      <div className={styles.experience__timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experience__item}>
            <div className={styles.experience__header}>
              <h3 className={styles.experience__company}>{exp.company}</h3>
              <span className={styles.experience__period}>{exp.period}</span>
            </div>
            <h4 className={styles.experience__role}>{exp.role}</h4>
            <p className={styles.experience__description}>{exp.description}</p>
            <div className={styles.experience__tech}>
              {exp.technologies.map((tech) => (
                <span key={tech} className={styles.experience__tech_item}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
