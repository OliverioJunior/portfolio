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
      company: "Company Name",
      role: "Full Stack Developer",
      period: "2022 - Present",
      description:
        "Led development of multiple web applications using React and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.",
      technologies: ["React", "Node.js", "TypeScript", "AWS"],
    },
    // Add more experiences...
  ];

  return (
    <section className={styles.experience} id="experiences">
      <h2 className="experience__title">Professional Experience</h2>
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
