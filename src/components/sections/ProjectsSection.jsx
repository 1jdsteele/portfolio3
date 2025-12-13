// src/components/sections/ProjectsSection.jsx
import { projects } from "../../services/projectsData";
import BentoSection from "../BentoSection";
import ProjectCard from "../ProjectCard";
import SectionHeaderCard from "../SectionHeaderCard";

export default function ProjectsSection() {
  return (
    <BentoSection id="projects">
      <SectionHeaderCard
        title="Projects"
        subtitle="A few things I’ve been building lately"
        // gridColumn={{ xs: "1 / -1", md: "span " }}
      />

      {projects.map((project) => (
        <ProjectCard
          // TO DO : PROBABLY CHANGE PROJECT CARDS AS A CHILD OF BENTO CARDS???
          // sx={{
          //   gridColumn: { xs: "1 / -1", md: "span 4" },
          //   p: 0,
          //   overflow: "hidden",
          // }}
          key={project.id}
          title={project.name}
          description={project.shortDescription}
          tech={project.techStack}
          href={project.links.live || project.links.github}
          linkLabel={
            project.links.live
              ? "View live"
              : project.links.github
              ? "View code"
              : "Learn more"
          }
        />
      ))}
    </BentoSection>
  );
}
