import { Paper } from "@mui/material";

export default function BentoCard({ children, sx = {}, ...rest }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        height: "100%",
        borderRadius: 3,

        // section-scoped theming (with fallbacks)
        bgcolor: "var(--bento-card-bg, rgba(15,23,42,0.85))",
        borderColor: "var(--bento-outline, rgba(148,163,184,0.3))",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Paper>
  );
}
