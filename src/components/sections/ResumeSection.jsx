import { Link as MuiLink, Stack, Typography } from "@mui/material";
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
          Other Downloads and Comment
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
          I’m looking for a backend or full-stack role that I can balance
          alongside my studies, focused on modern web stacks, distributed
          systems, and data-heavy workflows.
        </Typography>
      </BentoCard>

      {/* Highlights card */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 6", md: "span 8" },
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
          Highlights:
        </Typography>
        <Stack component="ul" sx={{ pl: 3, m: 0 }} spacing={1}>
          <li>
            <Typography variant="body2">
              MS in Computer Science at CSULA (in progress), focused on software
              engineering and algorithms.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Experience with production deployments (Vercel, Netlify),
              relational data modeling, and REST API design.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Strong background in algorithms, data structures, and C++/Java.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Collaborated in cross-disciplinary teams at Snapchat and AppFolio.
            </Typography>
          </li>
        </Stack>
      </BentoCard>
    </BentoSection>
  );
}
