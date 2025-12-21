// src/styles/bentoMotion.js
export const bentoHoverMotion = {
  transition:
    "transform 160ms ease, background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease",
  willChange: "transform",
  "&:hover": {
    transform: "translateY(-2px)",
    bgcolor: "var(--bento-card-hover-bg, var(--bento-card-bg))",
    borderColor: "var(--bento-card-hover-outline, var(--bento-outline))",
    boxShadow: "0 14px 30px rgba(0,0,0,0.25)",
  },
  "&:active": {
    transform: "translateY(-1px)",
  },
};
