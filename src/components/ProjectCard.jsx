import { Chip, Link as MuiLink, Stack, Typography } from "@mui/material";
import BentoCard from "./BentoCard";

export default function ProjectCard({
  title,
  description,
  tech = [],
  links = [],
}) {
  return (
    <BentoCard
      sx={{
        gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
        justifyContent: "space-between",
        py: 5,
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        {title}
      </Typography>

      <Typography variant="body2" sx={{ mb: 1.5, opacity: 0.85 }}>
        {description}
      </Typography>

      <Stack direction="row" flexWrap="wrap" gap={0.5} sx={{ mb: 1.5 }}>
        {tech.map((t) => (
          <Chip key={t} label={t} size="small" />
        ))}
      </Stack>

      {links.length > 0 && (
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {links.map((link) => (
            <MuiLink
              key={link.href + link.label}
              href={link.href}
              underline="hover"
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
              {link.label}
            </MuiLink>
          ))}
        </Stack>
      )}
    </BentoCard>
  );
}
