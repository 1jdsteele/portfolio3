// src/pages/HomePage.jsx
import { Box } from "@mui/material";

import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import HeroIntroSection from "../components/sections/HeroIntroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ResumeSection from "../components/sections/ResumeSection";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        pb: 6,
      }}
    >
      <HeroIntroSection />

      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </Box>
  );
}
