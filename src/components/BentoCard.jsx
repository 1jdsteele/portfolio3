import { Paper } from "@mui/material";

export default function BentoCard({ children, sx = {}, ...rest }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        height: "100%",
        borderRadius: 3,

        bgcolor: "var(--bento-card-bg, rgba(15,23,42,0.85))",
        borderColor: "var(--bento-outline, rgba(148,163,184,0.3))",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        // hover polish
        transition:
          "transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease",
        willChange: "transform",

        "&:hover": {
          transform: "translateY(-2px)",
          bgcolor: "var(--bento-card-hover-bg, rgba(15,23,42,0.92))",
          borderColor: "var(--bento-card-hover-outline, rgba(148,163,184,0.4))",
          boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
        },

        "&:active": { transform: "translateY(-1px)" },

        // accessibility: don’t animate for users who prefer reduced motion
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
          "&:hover": { transform: "none" },
        },

        ...sx,
      }}
      {...rest}
    >
      {children}
    </Paper>
  );
}
