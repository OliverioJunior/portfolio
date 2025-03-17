"use client";
import React from "react";
import "./Projects.styles.css";
import Image from "next/image";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "web" | "mobile";
}

export const Projects = () => {
  const projects: ProjectItem[] = [
    {
      title: "Project Name",
      description: "A brief description of the project and its main features.",
      image: "/sabedoria-logo.svg",
      technologies: ["React", "TypeScript", "Node.js"],
      liveUrl: "https://project.com",
      githubUrl: "https://github.com/username/project",
      category: "web",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Featured Projects</h2>
      <div className="projects__filters">
        <button className="projects__filter projects__filter--active">
          All
        </button>
        <button className="projects__filter">Web</button>
        <button className="projects__filter">Mobile</button>
      </div>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-card__image">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="project-card__img"
              />
            </div>
            <div className="project-card__content">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="project-card__tech-item">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-card__links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="project-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="project-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
