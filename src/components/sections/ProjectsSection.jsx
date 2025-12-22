// src/components/sections/ProjectsSection.jsx
import { projects } from "../../services/projectsData";
import BentoSection from "../BentoSection";
import ProjectCard from "../ProjectCard";
import SectionHeaderCard from "../SectionHeaderCard";

export default function ProjectsSection() {
  return (
    <BentoSection id="projects" tone="emerald">
      <SectionHeaderCard
        title="Projects"
        subtitle="A few things I’ve been building lately"
      />

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.name}
          description={project.shortDescription}
          tech={project.techStack}
          links={project.links}
        />
      ))}
    </BentoSection>
  );
}
