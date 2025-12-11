// src/components/sections/ProjectsSection.jsx
import { Box } from "@mui/material";
import { projects } from "../../services/projectsData";
import BentoSection from "../BentoSection";
import ProjectCard from "../ProjectCard";

export default function ProjectsSection() {
  return (
    <BentoSection
      id="projects"
      title="Projects"
      subtitle="A few things I’ve been building lately"
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
          gap: 2.5,
        }}
      >
        {projects.map((project) => (
          <ProjectCard
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
      </Box>
    </BentoSection>
  );
}
