import { Link as MuiLink, Stack, Typography } from "@mui/material";
import BentoCard from "../BentoCard";
import BentoSection from "../BentoSection";
import SectionHeaderCard from "../SectionHeaderCard";

export default function ContactSection() {
  return (
    <BentoSection id="contact" tone="rose">
      <SectionHeaderCard
        title="Contact"
        subtitle="Let’s talk about opportunitites, collaborations, or fun side projects"
        // gridColumn={{ xs: "1 / -1", md: "span " }}
      />

      {/* Blurb card */}
      {/* <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
          justifyContent: "center",
        }}
      >
        <Typography variant="body1">
          The best way to reach me is via email.
        </Typography>
      </BentoCard> */}
      {/* Quick link card */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
          justifyContent: "center",
        }}
      >
        {" "}
        <Typography variant="overline" sx={{ opacity: 0.7 }}>
          Get my resume
        </Typography>
        <MuiLink
          href="/jake_steele_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF
        </MuiLink>
        <MuiLink
          href="https://docs.google.com/document/d/1nuHO0XlHvSYjspqXFmsEjGacaGBIh6cpV8rRui80Zk8/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          // underline="hover"
          sx={{ mt: 1.25, display: "inline-block" }}
        >
          Google Drive for other downloads
        </MuiLink>
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
              href="mailto:jakesteele.engineer@gmail.com"
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
              jakesteele.engineer@gmail.com
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
