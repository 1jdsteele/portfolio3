import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { Divider, Link as MuiLink, Stack, Typography } from "@mui/material";

import BentoCard from "../BentoCard";
import BentoSection from "../BentoSection";
import SectionHeaderCard from "../SectionHeaderCard";

const linkSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1.25,
  width: "fit-content",
  color: "var(--bento-link)",
  fontWeight: 500,
  textDecoration: "none",
  transition: "color 160ms ease",
  "&:hover": {
    color: "var(--bento-link-hover)",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  },
  "&:focus-visible": {
    outline: "2px solid var(--bento-link)",
    outlineOffset: 3,
    borderRadius: 1,
  },
};

export default function ContactSection() {
  return (
    <BentoSection id="contact" tone="rose">
      <SectionHeaderCard title="Contact" subtitle="Let's connect the nodes" />

      {/* What I'm looking for */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
          justifyContent: "center",
          py: 3,
        }}
      >
        <Typography variant="overline" sx={{ opacity: 0.7 }}>
          What I’m looking for
        </Typography>
        <Typography variant="body1">
          I’m interested in data engineering, machine learning, and full-stack
          opportunities where I can build reliable systems and solve interesting
          problems.
        </Typography>
      </BentoCard>

      {/* Contact links and résumé downloads */}
      <BentoCard
        sx={{
          gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
          justifyContent: "center",
          py: 3,
        }}
      >
        <Stack spacing={2}>
          {/* Contact links */}
          <Stack spacing={1.25}>
            <Typography variant="overline" sx={{ opacity: 0.7 }}>
              Connect
            </Typography>

            {/* Row 1: Email */}
            <MuiLink href="mailto:jakesteele.engineer@gmail.com" sx={linkSx}>
              <EmailOutlinedIcon fontSize="small" aria-hidden="true" />
              Email me
            </MuiLink>

            {/* Row 2: LinkedIn + GitHub */}
            <Stack
              direction="row"
              useFlexGap
              flexWrap="wrap"
              gap={2.5}
              justifyContent="space-between"
            >
              <MuiLink
                href="https://www.linkedin.com/in/1jdsteele/"
                target="_blank"
                rel="noopener noreferrer"
                sx={linkSx}
              >
                <LinkedInIcon fontSize="small" aria-hidden="true" />
                LinkedIn
              </MuiLink>

              <MuiLink
                href="https://github.com/1jdsteele?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ...linkSx, ml: "auto" }}
              >
                <GitHubIcon fontSize="small" aria-hidden="true" />
                GitHub
              </MuiLink>
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: "var(--bento-outline)" }} />

          {/* Résumé links */}
          <Stack spacing={1.25}>
            <Typography variant="overline" sx={{ opacity: 0.7 }}>
              Résumé
            </Typography>

            {/* Row 3: Resume downloads */}
            <Stack
              direction="row"
              useFlexGap
              flexWrap="wrap"
              gap={2.5}
              justifyContent="space-between"
            >
              <MuiLink
                href="/jake_steele_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={linkSx}
              >
                <PictureAsPdfOutlinedIcon fontSize="small" aria-hidden="true" />
                PDF
              </MuiLink>

              <MuiLink
                href="https://docs.google.com/document/d/1nuHO0XlHvSYjspqXFmsEjGacaGBIh6cpV8rRui80Zk8/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ...linkSx, ml: "auto" }}
              >
                <DescriptionOutlinedIcon fontSize="small" aria-hidden="true" />
                Other formats
              </MuiLink>
            </Stack>
          </Stack>
        </Stack>
      </BentoCard>
    </BentoSection>
  );
}
