import { Box, Paper, Stack, Typography } from "@mui/material";

// JAKE THIS WAS THE LAST THING YOU ADDED - YOU WERE ABOUT TO ADD A PROP HERE TO USE THESE MAYBE?
const SECTION_TONES = {
  slate: {
    sectionBg: "rgba(15, 23, 42, 0.65)",
    cardBg: "rgba(15, 23, 42, 0.85)",
    outline: "rgba(148,163,184,0.22)",
  },
  indigo: {
    sectionBg: "rgba(30, 27, 75, 0.55)",
    cardBg: "rgba(30, 27, 75, 0.80)",
    outline: "rgba(165,180,252,0.22)",
  },
  emerald: {
    sectionBg: "rgba(6, 78, 59, 0.45)",
    cardBg: "rgba(6, 78, 59, 0.72)",
    outline: "rgba(110,231,183,0.18)",
  },
  rose: {
    sectionBg: "rgba(76, 5, 25, 0.45)",
    cardBg: "rgba(76, 5, 25, 0.72)",
    outline: "rgba(251,113,133,0.18)",
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

          bgcolor: "var(--bento-section-bg)",
          border: "1px solid var(--bento-outline)",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}
