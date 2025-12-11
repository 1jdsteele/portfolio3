import { Box } from "@mui/material";
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
        <ProjectCard
          title="Innventory"
          description="Hotel inventory management app with Supabase auth, low-stock email alerts, and responsive React UI."
          tech={["React", "Supabase", "PostgreSQL", "Vercel"]}
          linkLabel="View project"
          href="#"
        />

        <ProjectCard
          title="Dolphins Swim Academy"
          description="Spring Boot/JTE web app to manage swim classes, sessions, and student enrollment."
          tech={["Spring Boot", "JTE", "MySQL"]}
          linkLabel="View project"
          href="#"
        />

        <ProjectCard
          title="Minesweeper Solver"
          description="C++ + SFML backtracking visualizer that learns bomb configurations across boards."
          tech={["C++", "SFML", "Algorithms"]}
          linkLabel="View project"
          href="#"
        />
      </Box>
    </BentoSection>
  );
}
