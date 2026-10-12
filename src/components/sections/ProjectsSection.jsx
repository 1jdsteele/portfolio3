// // src/components/sections/ProjectsSection.jsx
// import { projects } from "../../services/projectsData";
// import BentoSection from "../BentoSection";
// import ProjectCard from "../ProjectCard";
// import SectionHeaderCard from "../SectionHeaderCard";

// export default function ProjectsSection() {
//   return (
//     <BentoSection id="projects" tone="emerald">
//       <SectionHeaderCard
//         title="Projects"
//         subtitle="Things I have explored, built, shipped"
//       />

//       {projects.map((project) => (
//         <ProjectCard
//           key={project.id}
//           title={project.name}
//           description={project.shortDescription}
//           tech={project.techStack}
//           links={project.links}
//         />
//       ))}
//     </BentoSection>
//   );
// }

// import { Typography } from "@mui/material";
// import { projects } from "../../services/projectsData";
// import BentoCard from "../BentoCard";
// import BentoSection from "../BentoSection";
// import ProjectCard from "../ProjectCard";
// import SectionHeaderCard from "../SectionHeaderCard";

// export default function ProjectsSection() {
//   return (
//     <BentoSection id="projects" tone="emerald">
//       <SectionHeaderCard
//         title="Projects"
//         subtitle="A few things I’ve been building lately"
//       />

//       {projects.map((project) => (
//         <ProjectCard
//           key={project.id}
//           title={project.name}
//           description={project.shortDescription}
//           tech={project.techStack}
//           links={project.links}
//         />
//       ))}

//       {/* View all projects card - visual only for now */}
//       <BentoCard
//         sx={{
//           gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           gap: 2,
//         }}
//       >
//         <Typography variant="h6" sx={{ fontWeight: 700 }}>
//           Explore More
//         </Typography>

//         <Typography variant="body2" sx={{ opacity: 0.75 }}>
//           Browse all {projects.length} projects
//         </Typography>

//         <Typography
//           variant="subtitle1"
//           sx={{
//             fontWeight: 600,
//             color: "var(--bento-link)",
//           }}
//         >
//           View All Projects →
//         </Typography>
//       </BentoCard>
//     </BentoSection>
//   );
// }

import { Button, Typography, useMediaQuery } from "@mui/material";
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

  const visibleProjects = showAll ? projects : projects.slice(0, featuredCount);

  return (
    <BentoSection id="projects" tone="emerald">
      <SectionHeaderCard
        title="Projects"
        subtitle="Things I have explored, built, shipped"
      />

      {visibleProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.name}
          description={project.shortDescription}
          tech={project.techStack}
          links={project.links}
        />
      ))}

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
            onClick={() => setShowAll((prev) => !prev)}
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
