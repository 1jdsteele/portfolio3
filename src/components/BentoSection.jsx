import { Box, Paper, Stack, Typography } from "@mui/material";
import { getBentoTone } from "../theme/bentoTones";

export default function BentoSection({ title, subtitle, children, id, tone }) {
  const t = getBentoTone(tone);

  return (
    <Box id={id}>
      {(title || subtitle) && (
        <Stack spacing={0.5} sx={{ mb: 2 }}>
          {title && (
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, letterSpacing: 0.5 }}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {subtitle}
            </Typography>
          )}
        </Stack>
      )}

      <Paper
        elevation={2}
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 4,
          border: "1px solid rgba(148,163,184,0.2)",

          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(6, minmax(0, 1fr))",
            md: "repeat(12, minmax(0, 1fr))",
          },
          gap: { xs: 2, md: 2.5 },
          alignItems: "stretch",

          // 🔥 CSS variable “theme” for this section
          "--bento-section-bg": t.sectionBg,
          "--bento-card-bg": t.cardBg,
          "--bento-outline": t.outline,
          "--bento-card-hover-bg": t.cardHoverBg ?? t.cardBg,
          "--bento-card-hover-outline": t.cardHoverOutline ?? t.outline,
          "--bento-link": t.link,
          "--bento-link-hover": t.linkHover,

          bgcolor: "var(--bento-section-bg)",
          border: "1px solid var(--bento-outline)",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}
