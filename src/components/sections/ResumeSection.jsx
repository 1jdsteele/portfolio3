import { Box, Link as MuiLink, Typography } from "@mui/material";
import {
  BriefcaseBusiness,
  CodeXml,
  Database,
  GraduationCap,
} from "lucide-react";
import BentoCard from "../BentoCard";
import BentoSection from "../BentoSection";
import SectionHeaderCard from "../SectionHeaderCard";

export default function ResumeSection() {
  return (
    <BentoSection id="resume" tone="slate">
      <SectionHeaderCard
        title="Resume"
        subtitle="Quick snapshot + a link to the full PDF"
      />

      {/* Quick link card */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
          justifyContent: "center",
        }}
      >
        {" "}
        <Typography variant="overline" sx={{ opacity: 0.7 }}>
          Get it now
        </Typography>
        <MuiLink
          href="/jake-steele-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF
        </MuiLink>
        <MuiLink
          href="https://docs.google.com/document/d/1qpIAVoFEX92gaLbfp_lyuuz6-wGz4JIqRv0q7WdShmI/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          // underline="hover"
          sx={{ mt: 1.25, display: "inline-block" }}
        >
          Google Drive for other downloads
        </MuiLink>
      </BentoCard>

      {/* Summary / what I'm looking for */}
      <BentoCard
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
      </BentoCard>

      {/* Highlights card */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 6", md: "span 12" },
          justifyContent: "center",
        }}
      >
        {/* <Typography variant="h6" sx={{ mb: 1 }}> */}
        <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
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
            gridTemplateColumns: { md: "repeat(2, minmax(0, 1fr))" },
            gap: { xs: 1, md: 3 },
            columnGap: { md: 4 },
          }}
        >
          <Box
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
          </Box>

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
        </Box>
      </BentoCard>
    </BentoSection>
  );
}
