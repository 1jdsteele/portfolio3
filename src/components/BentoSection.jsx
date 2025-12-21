import { Box, Paper, Stack, Typography } from "@mui/material";

const SECTION_TONES = {
  // Neutral base (your “default world”)
  slate: {
    sectionBg: "rgba(15, 23, 42, 0.62)",
    cardBg: "rgba(15, 23, 42, 0.86)",
    cardHoverBg: "rgba(15, 23, 42, 0.93)",
    outline: "rgba(148, 163, 184, 0.22)",
    cardHoverOutline: "rgba(148, 163, 184, 0.36)",
  },

  // Cool accent
  indigo: {
    sectionBg: "rgba(30, 27, 75, 0.58)",
    cardBg: "rgba(30, 27, 75, 0.84)",
    cardHoverBg: "rgba(30, 27, 75, 0.92)",
    outline: "rgba(165, 180, 252, 0.22)",
    cardHoverOutline: "rgba(165, 180, 252, 0.36)",
  },

  // Green accent (kept from feeling too bright)
  // emerald: {
  //   sectionBg: "rgba(6, 78, 59, 0.54)",
  //   cardBg: "rgba(6, 78, 59, 0.82)",
  //   cardHoverBg: "rgba(6, 78, 59, 0.90)",
  //   outline: "rgba(110, 231, 183, 0.20)",
  //   cardHoverOutline: "rgba(110, 231, 183, 0.34)",
  // },
  emerald: {
    // chaparral-ish, darker + calmer
    sectionBg: "rgba(6, 42, 34, 0.58)",
    cardBg: "rgba(6, 42, 34, 0.84)",
    cardHoverBg: "rgba(6, 42, 34, 0.92)",
    outline: "rgba(110, 231, 183, 0.16)",
    cardHoverOutline: "rgba(110, 231, 183, 0.28)",
  },

  // Warm accent (kept subtle so it still feels “night mode”)
  // rose: {
  //   sectionBg: "rgba(76, 5, 25, 0.54)",
  //   cardBg: "rgba(76, 5, 25, 0.82)",
  //   cardHoverBg: "rgba(76, 5, 25, 0.90)",
  //   outline: "rgba(251, 113, 133, 0.20)",
  //   cardHoverOutline: "rgba(251, 113, 133, 0.34)",
  // },
  rose: {
    // poppy-ish, but “night mode” muted
    sectionBg: "rgba(55, 10, 20, 0.58)",
    cardBg: "rgba(55, 10, 20, 0.84)",
    cardHoverBg: "rgba(55, 10, 20, 0.92)",
    outline: "rgba(251, 113, 133, 0.16)",
    cardHoverOutline: "rgba(251, 113, 133, 0.28)",
  },
};

export default function BentoSection({ title, subtitle, children, id, tone }) {
  const t = tone ? SECTION_TONES[tone] : SECTION_TONES.slate;

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

          bgcolor: "var(--bento-section-bg)",
          border: "1px solid var(--bento-outline)",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}
