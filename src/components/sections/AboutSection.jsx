import { Box, Chip, Stack, Typography } from "@mui/material";
import BentoSection from "../BentoSection";

export default function AboutSection() {
  return (
    <BentoSection
      id="about"
      title="About me"
      subtitle="Software engineering grad student • Backend-leaning full-stack dev"
    >
      <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
        <Box flex={2}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            I’m Jake, a CS grad student in Los Angeles focused on building
            real-world, production-ready software. I enjoy backend-heavy
            full-stack work: React + Supabase, Spring Boot, and distributed
            systems/algorithms.
          </Typography>
          <Typography variant="body1">
            Recent projects include an inventory system for hotels, a swim
            school management portal, and a bunch of algorithm-heavy toys like a
            Minesweeper solver and learning AIs for games.
          </Typography>
        </Box>

        <Stack
          flex={1}
          spacing={1}
          alignItems={{ xs: "flex-start", md: "flex-end" }}
        >
          <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
            Tech I enjoy:
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1}
            justifyContent={{ md: "flex-end" }}
          >
            {[
              "React",
              "Supabase",
              "PostgreSQL",
              "Spring Boot",
              "C++",
              "Python",
            ].map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </BentoSection>
  );
}
