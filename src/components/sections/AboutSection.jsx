import { Box, Chip, Stack, Typography } from "@mui/material";
import { BriefcaseBusiness, CodeXml, Database } from "lucide-react";
import headshot from "../../assets/portrait.jpeg";
import BentoCard from "../BentoCard";
import BentoSection from "../BentoSection";

const skills = [
  "Python",
  "SQL",
  "Apache Airflow",
  "ClickHouse",
  "PostgreSQL",
  "Docker",
  "K8s",
  "JavaScript",
  "React",
  "React Native",
  "Node.js",
  "C++",
  "Java",
];

export default function AboutSection() {
  return (
    <BentoSection
      id="about"
      tone="indigo"
      title="About me"
      subtitle="hello, world"
    >
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
            M.S. Computer Science · 2027
          </Typography>
        </BentoCard>

        <BentoCard sx={{ py: 1.75, justifyContent: "center", gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Software & Data Engineer
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
      {/* <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 6", md: "span 8" },
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
            I’m Jake, a CS grad student building data pipelines and backend
            systems at VS Media.
          </Typography>
          <Typography variant="body1">
            I’ve worked on cross-disciplinary teams at AppFolio and Snapchat,
            shipping revenue-driving features and prototyping new ideas. I enjoy
            full-stack development where clean architecture meets business
            impact.
          </Typography>
        </Box>
      </BentoCard> */}

      {/* Highlights card */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 6", md: "span 8" },
          justifyContent: "center",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            opacity: 0.7,
            // fontSize: "0.9rem",
            // fontWeight: 600,
            // letterSpacing: "0.1em",
            // pl: 1,
            // mb: 1.5,
          }}
        >
          Highlights
        </Typography>

        <Box
          component="ul"
          sx={{
            listStyle: "none",
            pl: 0,
            m: 0,
            display: { xs: "flex", md: "grid" },
            flexDirection: "column",
            gridTemplateColumns: "1fr",
            gap: { xs: 1, md: 3 },
            columnGap: { md: 4 },
          }}
        >
          <Box
            component="li"
            sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
          >
            <BriefcaseBusiness
              size={24}
              strokeWidth={2}
              style={{ flexShrink: 0 }}
            />
            <Typography variant="body1" sx={{ mt: 1.25 }}>
              Cross-functional engineering experience at VS Media, Snapchat, and
              AppFolio.
            </Typography>
          </Box>
          {/* <Box
            component="li"
            sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
          >
            <GraduationCap
              size={24}
              strokeWidth={2}
              style={{ flexShrink: 0 }}
            />
            <Typography variant="body1" sx={{ mt: 1.25 }}>
              MS in Computer Science at CSULA, graduating May 2027; conducting
              graduate research on algorithmic fairness.
            </Typography>
          </Box> */}

          <Box
            component="li"
            sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
          >
            <Database size={24} strokeWidth={2} style={{ flexShrink: 0 }} />
            <Typography variant="body1" sx={{ mt: 1.25 }}>
              Professional data engineer: experience building production data
              pipelines with Python, SQL, and Apache Airflow.
            </Typography>
          </Box>

          <Box
            component="li"
            sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
          >
            <CodeXml size={24} strokeWidth={2} style={{ flexShrink: 0 }} />
            <Typography variant="body1" sx={{ mt: 1.25 }}>
              Full-stack development experience with React, React Native, REST
              APIs, and relational databases.
            </Typography>
          </Box>
        </Box>
      </BentoCard>

      {/* <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 6", md: "span 4" },
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
      </BentoCard> */}

      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 6", md: "span 4" },
          justifyContent: "flex-start",
          py: 2.5,
        }}
      >
        <Typography variant="subtitle2" sx={{ opacity: 0.7, mb: 0.75 }}>
          Tech I enjoy
        </Typography>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {skills.map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Stack>
        </Box>
      </BentoCard>

      {/* Summary / what I'm looking for */}
      {/* <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
          justifyContent: "center",
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.7 }}>
          What I’m looking for
        </Typography>
        <Typography variant="body1" sx={{ mt: 1.25 }}>
          I'm looking for opportunities in data engineering, machine learning,
          or full-stack development where I can build reliable systems, solve
          interesting problems, and continue growing as an engineer.
        </Typography>
      </BentoCard> */}
    </BentoSection>
  );
}
