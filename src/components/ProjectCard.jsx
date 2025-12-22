import { Chip, Link as MuiLink, Stack, Typography } from "@mui/material";
import BentoCard from "./BentoCard";

export default function ProjectCard({
  title,
  description,
  tech = [],
  href,
  linkLabel,
}) {
  return (
    <BentoCard
      sx={{
        gridColumn: { xs: "1 / -1", sm: "span 3", md: "span 4" },
        justifyContent: "space-between",
        py: 5,
      }}
    >
      {/* TITLE */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          mb: 1,
        }}
      >
        {title}
      </Typography>

      {/* DESCRIPTION */}
      <Typography variant="body2" sx={{ mb: 1.5, opacity: 0.85 }}>
        {description}
      </Typography>

      {/* STACK */}
      <Stack direction="row" flexWrap="wrap" gap={0.5} sx={{ mb: 1.5 }}>
        {tech.map((t) => (
          <Chip key={t} label={t} size="small" />
        ))}
      </Stack>

      {/* LINKS */}
      {href && (
        <MuiLink
          href={href}
          underline="hover"
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
          {linkLabel}
        </MuiLink>
      )}
    </BentoCard>
  );
}
