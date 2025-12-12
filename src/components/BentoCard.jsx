import { Paper } from "@mui/material";

export default function BentoCard({ children, sx = {}, ...rest }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        height: "100%",
        borderRadius: 3,
        borderColor: "rgba(148,163,184,0.3)",
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
