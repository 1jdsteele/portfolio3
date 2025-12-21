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
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          mb: 1,
        }}
      >
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

      {href && (
        <MuiLink href={href} underline="hover">
          {linkLabel}
        </MuiLink>
      )}
    </BentoCard>
  );
}
