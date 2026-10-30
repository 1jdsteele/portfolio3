import {
  Box,
  Button,
  Collapse,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

import { projects } from "../../services/projectsData";
import BentoCard from "../BentoCard";
import BentoSection from "../BentoSection";
import ProjectCard from "../ProjectCard";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  // Number of featured projects shown at each breakpoint
  const featuredCount = isXs ? 3 : isBelowMd ? 4 : 5;

  const featuredProjects = projects.slice(0, featuredCount);
  const additionalProjects = projects.slice(featuredCount);

  const handleToggleProjects = () => {
    // Expand additional projects
    if (!showAll) {
      setShowAll(true);
      return;
    }

    // Scroll to the Projects section before collapsing
    const section = document.getElementById("projects");

    if (!section) {
      setShowAll(false);
      return;
    }

    const finishCollapse = () => setShowAll(false);

    const scrollMargin =
      parseFloat(getComputedStyle(section).scrollMarginTop) || 0;

    const alreadyAtTop =
      Math.abs(section.getBoundingClientRect().top - scrollMargin) < 6;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (alreadyAtTop || reducedMotion || !("onscrollend" in window)) {
      section.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
      finishCollapse();
      return;
    }

    // Wait until scrolling finishes before collapsing
    window.addEventListener("scrollend", finishCollapse, {
      once: true,
    });

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <BentoSection
      id="projects"
      tone="emerald"
      title="Projects"
      subtitle="It worked on my machine"
    >
      {/* Featured projects — always visible when section is open */}
      {featuredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.name}
          description={project.shortDescription}
          tech={project.techStack}
          links={project.links}
        />
      ))}

      {/* Additional projects — animated expansion */}
      <Collapse
        in={showAll}
        timeout={350}
        unmountOnExit
        sx={{
          gridColumn: "1 / -1",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(6, minmax(0, 1fr))",
              md: "repeat(12, minmax(0, 1fr))",
            },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {additionalProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              description={project.shortDescription}
              tech={project.techStack}
              links={project.links}
            />
          ))}
        </Box>
      </Collapse>

      {/* Explore More / Show Less */}
      {projects.length > featuredCount && (
        <BentoCard
          sx={{
            gridColumn: "1 / -1",

            // Match the width of a normal project card
            width: {
              xs: "min(100%, 340px)",
              sm: "calc((100% - 16px) / 2)",
              md: "calc((100% - 40px) / 3)",
            },

            // Center the card within its row
            justifySelf: "center",
            boxSizing: "border-box",

            // Center card contents
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {showAll ? "Show Less" : "Explore More"}
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.75 }}>
            {showAll
              ? "Return to featured projects"
              : `Browse all ${projects.length} projects`}
          </Typography>

          <Button
            onClick={handleToggleProjects}
            aria-expanded={showAll}
            variant="text"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
              color: "var(--bento-link)",
              textDecoration: "underline",

              "&:hover": {
                color: "var(--bento-link-hover)",
                bgcolor: "transparent",
              },
            }}
          >
            {showAll ? "Show Featured Projects Only" : "View All Projects"}
          </Button>
        </BentoCard>
      )}
    </BentoSection>
  );
}
