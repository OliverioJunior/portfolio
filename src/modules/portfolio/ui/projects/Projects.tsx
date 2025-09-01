"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  useScrollAnimation,
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/shared/hooks";
import "./Projects.styles.css";

interface ProjectItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export const Projects = () => {
  const projects: ProjectItem[] = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com painel administrativo e integração de pagamento.",
      icon: (
        <svg
          className="w-16 h-16 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-600/20 to-purple-600/20",
    },
    {
      title: "Mobile App",
      description:
        "Aplicativo mobile para gestão de tarefas com sincronização em tempo real.",
      icon: (
        <svg
          className="w-16 h-16 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      technologies: ["React Native", "Firebase", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-600/20 to-pink-600/20",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Dashboard analítico com visualizações interativas e relatórios em tempo real.",
      icon: (
        <svg
          className="w-16 h-16 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ></path>
        </svg>
      ),
      technologies: ["Next.js", "D3.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-green-600/20 to-teal-600/20",
    },
  ];

  const { ref: titleRef, controls: titleControls } = useScrollAnimation();
  const { ref: gridRef, controls: gridControls } = useScrollAnimation({
    delay: 400,
  });

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2
          className="projects__title"
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={fadeInUp}
        >
          Projetos em <span className="gradient-text">Destaque</span>
        </motion.h2>

        <motion.div
          className="projects__grid"
          ref={gridRef}
          initial="hidden"
          animate={gridControls}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="project-card glass-effect"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <div
                className={`project-card__image bg-gradient-to-br ${project.gradient}`}
              >
                {project.icon}
              </div>
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>
                <motion.div
                  className="project-card__tech"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="project-card__tech-item"
                      variants={staggerItem}
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
                <div className="project-card__links">
                  <motion.a
                    href={project.liveUrl}
                    className="project-card__link project-card__link--primary"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="project-card__link project-card__link--secondary"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
