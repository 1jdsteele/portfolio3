import { Box, Chip, Stack, Typography } from "@mui/material";
import headshot from "../../assets/portrait.jpeg";
import BentoCard from "../BentoCard";
import BentoSection from "../BentoSection";
import SectionHeaderCard from "../SectionHeaderCard";

const skills = [
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "SQL",
  "React",
  "Spring Boot",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Distributed Systems",
  "Docker",
  "AWS",
  "CI/CD",
  "Supabase",
  "K8s",
  "React Native",
];

export default function AboutSection() {
  return (
    <BentoSection id="about" tone="indigo">
      {/* Header card: span 6 */}
      <SectionHeaderCard
        title="About me"
        subtitle="I'm on a quest for better software"
        // gridColumn={{ xs: "1 / -1", md: "span " }}
      />

      {/* Right-side vertical stack: span 4 */}
      <Box
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
          textAlign: "center",
        }}
      >
        <BentoCard sx={{ py: 1.75, justifyContent: "center", gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            CS grad student
          </Typography>
        </BentoCard>

        <BentoCard sx={{ py: 1.75, justifyContent: "center", gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Full-stack irl dev
          </Typography>
        </BentoCard>

        <BentoCard sx={{ py: 1.75, justifyContent: "center", gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Los Angeles
          </Typography>
        </BentoCard>
      </Box>

      {/* Photo card: span 6 */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
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

      {/* Main text + skills: */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 8" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "flex-start", md: "center" },
            height: "100%",
          }}
        >
          <Typography variant="body1" sx={{ mb: 2 }}>
            I’m Jake, a CS grad student interested in how real systems are
            designed, built, and maintained. I enjoy full-stack development
            where clean architecture meets business impact.
          </Typography>
          <Typography variant="body1">
            I’ve worked on cross-disciplinary teams at AppFolio and Snapchat,
            shipping revenue-driving features and prototyping new ideas. Most
            recently, I led a team building a full-stack hotel inventory web
            application from the ground up.
          </Typography>
        </Box>
      </BentoCard>

      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
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
