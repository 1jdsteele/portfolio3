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
import SectionHeaderCard from "../SectionHeaderCard";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  // Number of projects shown in collapsed mode
  const featuredCount = isXs ? 3 : isBelowMd ? 4 : 5;

  const featuredProjects = projects.slice(0, featuredCount);
  const additionalProjects = projects.slice(featuredCount);

  const handleToggleProjects = () => {
    // Expanding: keep the current behavior
    if (!showAll) {
      setShowAll(true);
      return;
    }

    // Collapsing: scroll to the Projects header first
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

    // Collapse immediately if we're already at the target,
    // or if smooth scrolling isn't appropriate/supported.
    if (alreadyAtTop || reducedMotion || !("onscrollend" in window)) {
      section.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
      finishCollapse();
      return;
    }

    // Wait until the smooth scroll finishes before collapsing
    window.addEventListener("scrollend", finishCollapse, {
      once: true,
    });

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <BentoSection id="projects" tone="emerald">
      <SectionHeaderCard
        title="Projects"
        subtitle="Things I have explored, built, shipped"
      />

      {/* {visibleProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.name}
          description={project.shortDescription}
          tech={project.techStack}
          links={project.links}
        />
      ))} */}

      {/* Featured projects — always visible */}
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

      {projects.length > featuredCount && (
        <BentoCard
          // sx={{
          //   gridColumn: {
          //     xs: "1 / -1",
          //     sm: showAll ? "span 3" : "span 6",
          //     md: showAll ? "span 4" : "span 12",
          //   },
          //   justifyContent: "center",
          //   alignItems: "center",
          //   textAlign: "center",
          //   gap: 2,
          // }}

          sx={{
            // Reserve a full row
            gridColumn: "1 / -1",

            // Match the width of a normal project card
            width: {
              xs: "100%",
              sm: "calc((100% - 16px) / 2)",
              md: "calc((100% - 40px) / 3)",
            },

            // Center the card in its row
            justifySelf: "center",
            boxSizing: "border-box",

            // Center the content inside the card
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
