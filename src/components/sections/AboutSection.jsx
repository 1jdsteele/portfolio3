import { Box, Chip, Stack, Typography } from "@mui/material";
import headshot from "../../assets/portrait.jpeg";
import BentoCard from "../BentoCard";
import BentoSection from "../BentoSection";
import SectionHeaderCard from "../SectionHeaderCard";

const skills = [
  "React",
  "Supabase",
  "PostgreSQL",
  "Spring Boot",
  "C++",
  "Python",
  "Java",
  "K8s",
  "React Native",
];

export default function AboutSection() {
  return (
    <BentoSection id="about">
      {/* Header card: span 6 */}
      <SectionHeaderCard
        title="About me"
        subtitle="I'm on a quest for better software"
        // gridColumn={{ xs: "1 / -1", md: "span " }}
      />

      {/* Photo card: span 6 */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", md: "span 8" },
          p: 0,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={headshot}
          alt="Jake"
          sx={{
            width: "100%",
            height: 320, // key: controls the photo’s “dominance”
            objectFit: "cover",
            borderRadius: "inherit",
            display: "block",
            // transform: "scale(0.5)",
          }}
        />
      </BentoCard>

      {/* Three small cards: span 4 each */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", md: "span 4" },
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          CS grad student
        </Typography>
      </BentoCard>

      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", md: "span 4" },
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Full-stack irl dev
        </Typography>
      </BentoCard>

      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", md: "span 4" },
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Los Angeles
        </Typography>
      </BentoCard>

      {/* Main text + skills: 8/4 split */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", md: "span 8" },
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          I’m Jake, a CS grad student in Los Angeles focused on building
          real-world, production-ready software. I enjoy backend-heavy
          full-stack work: React + Supabase, Spring Boot, and distributed
          systems/algorithms.
        </Typography>
        <Typography variant="body1">
          Recent projects include an inventory system for hotels, a swim school
          management portal, and a bunch of algorithm-heavy toys like a
          Minesweeper solver and learning AIs for games.
        </Typography>
      </BentoCard>

      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", md: "span 4" },
          // justifyContent: "flex-start",
          justifyContent: "space-between",
          py: 2.5,
        }}
      >
        <Typography variant="subtitle2" sx={{ opacity: 0.7, mb: 0.75 }}>
          Tech I enjoy
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {skills.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>
      </BentoCard>
    </BentoSection>
  );
}
