import { Link as MuiLink, Stack, Typography } from "@mui/material";
import BentoCard from "../BentoCard";
import BentoSection from "../BentoSection";
import SectionHeaderCard from "../SectionHeaderCard";

export default function ContactSection() {
  return (
    <BentoSection id="contact" tone="rose">
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
          The best way to reach me is via email.
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
            <MuiLink
              href="mailto:jdsteeleprofessional@gmail.com"
              sx={{
                color: "var(--bento-link)",
                textDecorationColor:
                  "color-mix(in srgb, var(--bento-link) 50%, transparent)",
                "&:hover": {
                  color: "var(--bento-link-hover)",
                  textDecorationColor: "var(--bento-link-hover)",
                },
              }}
            >
              jdsteeleprofessional@gmail.com
            </MuiLink>
          </Typography>
          <Typography variant="body2">
            GitHub:{" "}
            <MuiLink
              href="https://github.com/1jdsteele?tab=repositories"
              target="_blank"
              rel="noreferrer"
              sx={{
                color: "var(--bento-link)",
                textDecorationColor:
                  "color-mix(in srgb, var(--bento-link) 50%, transparent)",
                "&:hover": {
                  color: "var(--bento-link-hover)",
                  textDecorationColor: "var(--bento-link-hover)",
                },
              }}
            >
              1jdsteele
            </MuiLink>
          </Typography>
          <Typography variant="body2">
            LinkedIn:{" "}
            <MuiLink
              href="https://www.linkedin.com/in/1jdsteele/"
              target="_blank"
              rel="noreferrer"
              sx={{
                color: "var(--bento-link)",
                textDecorationColor:
                  "color-mix(in srgb, var(--bento-link) 50%, transparent)",
                "&:hover": {
                  color: "var(--bento-link-hover)",
                  textDecorationColor: "var(--bento-link-hover)",
                },
              }}
            >
              Jake Steele
            </MuiLink>
          </Typography>
        </Stack>
      </BentoCard>
    </BentoSection>
  );
}
