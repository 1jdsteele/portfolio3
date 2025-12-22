import { Paper } from "@mui/material";
import { bentoHoverMotion } from "../styles/bentoMotions";

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

        gap: 1.25,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",

        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 55%, rgba(255,255,255,0) 100%)",

        "&:hover": {
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 55%, rgba(255,255,255,0) 100%)",
        },

        ...bentoHoverMotion,
        ...sx,
        contentVisibility: "auto",
        containIntrinsicSize: "280px",
      }}
      {...rest}
    >
      {children}
    </Paper>
  );
}
