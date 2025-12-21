import { Link as MuiLink, Stack, Typography } from "@mui/material";
import BentoCard from "../BentoCard";
import BentoSection from "../BentoSection";
import SectionHeaderCard from "../SectionHeaderCard";

export default function ContactSection() {
  return (
    <BentoSection id="contact">
      <SectionHeaderCard
        title="Contact"
        subtitle="Let’s talk about internships, collaborations, or fun side projects"
        // gridColumn={{ xs: "1 / -1", md: "span " }}
      />

      {/* Blurb card */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
          justifyContent: "center",
        }}
      >
        <Typography variant="body1">
          The best way to reach me is via email. I’m always open to chatting
          about internships, research opportunities, or building something weird
          and useful.
        </Typography>
      </BentoCard>

      {/* Links card */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
          justifyContent: "center",
        }}
      >
        <Stack spacing={1}>
          <Typography variant="body2">
            Email:{" "}
            <MuiLink href="mailto:jdsteeleprofessional@gmail.com">
              jdsteeleprofessional@gmail.com
            </MuiLink>
          </Typography>
          <Typography variant="body2">
            GitHub:{" "}
            <MuiLink
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noreferrer"
            >
              JAKE PUT GH LINK HERE
            </MuiLink>
          </Typography>
          <Typography variant="body2">
            LinkedIn:{" "}
            <MuiLink
              href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
              target="_blank"
              rel="noreferrer"
            >
              JAKE PUT LINKED IN LINK HJERE
            </MuiLink>
          </Typography>
        </Stack>
      </BentoCard>
    </BentoSection>
  );
}
