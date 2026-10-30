import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Box, Typography } from "@mui/material";

const CHEVRON_MS = 230;
const CHEVRON_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Visual appearance and accessible toggle for a Bento section.
 *
 * This component owns the centered title/subtitle, chevron positioning,
 * hover feedback, and focus styling. BentoSection owns the actual section
 * dimensions, breakpoint layout, and expand/collapse state.
 */
export default function SectionHeader({
  title,
  subtitle,
  open,
  onToggle,
  contentId,
}) {
  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: { xs: 0.7, sm: 0.8 },
        width: "100%",
        height: "100%",
        minWidth: 0,
        px: { xs: 1, sm: 2, md: 1 },
        py: { xs: 1, sm: 1.25, md: 1.5 },
        transform: "translateY(0)",
        transition: "transform 180ms ease",
        "@media (hover: hover)": {
          // On a closed section, BentoSection already lifts the whole panel.
          // On an open section, lift just the header content instead.
          ...(open && {
            "&:hover": { transform: "translateY(-2px)" },
          }),
          "&:hover .section-header-chevron": {
            color: "text.primary",
            opacity: 1,
            filter: "drop-shadow(0 0 5px rgba(255,255,255,0.38))",
          },
        },
        "@media (prefers-reduced-motion: reduce)": {
          transform: "none",
          transition: "none",
          "&:hover": { transform: "none" },
        },
      }}
    >
      <Typography component="h2" variant="h4" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>

      {subtitle && (
        <Typography variant="body2" sx={{ opacity: 0.65 }}>
          {subtitle}
        </Typography>
      )}

      <ExpandMoreRoundedIcon
        className="section-header-chevron"
        aria-hidden="true"
        sx={{
          display: "block",
          fontSize: 26,
          color: "text.secondary",
          opacity: 0.8,
          mt: 0.5,
          flexShrink: 0,
          transform: `rotate(${open ? 180 : 0}deg)`,
          transition: [
            `transform ${CHEVRON_MS}ms ${CHEVRON_EASING}`,
            `opacity ${CHEVRON_MS}ms ease`,
            `color ${CHEVRON_MS}ms ease`,
            `filter ${CHEVRON_MS}ms ease`,
          ].join(", "),
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
          },
        }}
      />

      {/* The heading remains semantic; the invisible button makes the entire
          header clickable and keyboard accessible. */}
      <Box
        component="button"
        type="button"
        onClick={onToggle}
        aria-label={`${open ? "Collapse" : "Expand"} ${title} section`}
        aria-expanded={open}
        aria-controls={contentId}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          p: 0,
          m: 0,
          border: 0,
          borderRadius: 2,
          bgcolor: "transparent",
          cursor: "pointer",
          "&:hover": {
            bgcolor: "transparent",
            borderColor: "transparent",
          },
          "&:focus": { outline: "none" },
          "&:focus-visible": {
            outline: "2px solid var(--bento-link, currentColor)",
            outlineOffset: 2,
          },
        }}
      />
    </Box>
  );
}
