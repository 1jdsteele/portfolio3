import { Link as MuiLink, Stack, Typography } from "@mui/material";
import BentoSection from "../BentoSection";

export default function ResumeSection() {
  return (
    <BentoSection
      id="resume"
      title="Resume"
      subtitle="Quick snapshot + a link to the full PDF"
    >
      <Stack spacing={2}>
        <Typography variant="body1">
          I’m currently looking at backend or full-stack roles where I can work
          with modern web stacks, distributed systems, and data-heavy workflows.
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Highlights:
        </Typography>
        <ul style={{ marginTop: 0 }}>
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
        </ul>

        <MuiLink
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Download full resume (PDF)
        </MuiLink>
      </Stack>
    </BentoSection>
  );
}
