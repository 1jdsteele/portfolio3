import {
  Box,
  Collapse,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useMemo, useState } from "react";
import useInView from "../hooks/useInView";
import useResizeSettleClass from "../hooks/useResizeSettleClass";
import { bentoHoverMotion } from "../styles/bentoMotions";
import { getBentoTone } from "../styles/bentoTones";

export default function BentoSection({
  title,
  subtitle,
  children,
  id,
  tone,
  collapseOnXs = true,
  defaultOpenOnXs = false,
}) {
  const t = getBentoTone(tone);

  const { ref: revealRef, inView } = useInView({
    threshold: 0.05,
    rootMargin: "0px 0px -2% 0px",
  });

  const resizePulse = useResizeSettleClass(220);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // < 600px

  const childArray = useMemo(
    () => React.Children.toArray(children),
    [children]
  );
  const headerChild = childArray[0] ?? null;
  const contentChildren = childArray.slice(1);

  const [open, setOpen] = useState(defaultOpenOnXs);

  // When leaving xs, force open so desktop/tablet always shows everything
  useEffect(() => {
    if (!collapseOnXs) return;

    if (isXs) setOpen(defaultOpenOnXs);
    else setOpen(true);
  }, [isXs, collapseOnXs, defaultOpenOnXs]);

  const canCollapse = collapseOnXs && isXs && headerChild;

  const toggle = () => {
    if (!canCollapse) return;
    setOpen((prev) => !prev);
  };

  const onHeaderKeyDown = (e) => {
    if (!canCollapse) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <Box
      id={id}
      sx={{
        scrollMarginTop: { xs: "84px", md: "96px" }, // tweak these
      }}
    >
      {/* very certain I no longer use, can delete in clean up*/}
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
        ref={revealRef}
        className={`resize-settle ${resizePulse}`}
        elevation={2}
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 4,

          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(6, minmax(0, 1fr))",
            md: "repeat(12, minmax(0, 1fr))",
          },
          gap: { xs: 2, md: 2.5 },
          alignItems: "stretch",

          // CSS vars
          "--bento-section-bg": t.sectionBg,
          "--bento-card-bg": t.cardBg,
          "--bento-outline": t.outline,
          "--bento-card-hover-bg": t.cardHoverBg ?? t.cardBg,
          "--bento-card-hover-outline": t.cardHoverOutline ?? t.outline,
          "--bento-link": t.link ?? "rgba(226, 232, 240, 0.95)",
          "--bento-link-hover": t.linkHover ?? "rgba(255,255,255,1)",

          // HERE trying to ge the background color (and border) to be invisible in xs
          bgcolor: "var(--bento-section-bg)",
          // bgcolor: { xs: "none", sm: "var(--bento-section-bg)" },
          border: "1px solid var(--bento-outline)",
          // border: { xs: "none", sm: "1px solid var(--bento-outline)" },

          //Reveal state (composes with hover)
          "--reveal-y": inView ? "0px" : "10px",
          opacity: inView ? 1 : 0,
          transform: "translateY(var(--reveal-y))",
          willChange: "transform, opacity",

          ...bentoHoverMotion,

          "&:hover": {
            // hover lift relative to reveal position
            transform: "translateY(calc(var(--reveal-y) - 4px))",
            borderColor:
              "color-mix(in srgb, var(--bento-outline) 85%, transparent)",
            boxShadow: `
    0 28px 70px rgba(0,0,0,0.30),
    0 0 0 1px color-mix(in srgb, var(--bento-outline) 75%, transparent),
    0 0 40px color-mix(in srgb, var(--bento-outline) 65%, transparent)
  `,
          },
          "&:active": {
            transform: "translateY(calc(var(--reveal-y) - 2px))",
          },

          // make sure opacity is included for reveal transition
          transition:
            "opacity 900ms ease, transform 520ms ease, background-color 200ms ease, border-color 200ms ease, box-shadow 260ms ease, padding 240ms ease, gap 240ms ease, border-radius 240ms ease",

          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
            transform: "none",
            opacity: 1,
          },
        }}
      >
        {/* HEADER (always visible) */}
        {headerChild && (
          <Box
            //RIGHT HERE JAKEY
            sx={{
              gridColumn: { xs: "1 / -1", sm: "span 6", md: "span 4" },
            }}
            onClick={toggle}
            onKeyDown={onHeaderKeyDown}
            role={canCollapse ? "button" : undefined}
            tabIndex={canCollapse ? 0 : undefined}
            aria-expanded={canCollapse ? open : undefined}
            aria-controls={canCollapse ? `${id}-content` : undefined}
            style={canCollapse ? { cursor: "pointer" } : undefined}
          >
            {headerChild}
          </Box>
        )}

        {/* CONTENT */}
        {canCollapse ? (
          <Box id={`${id}-content`} sx={{ gridColumn: "1 / -1" }}>
            <Collapse in={open} timeout={250} unmountOnExit>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr" },
                  gap: { xs: 2, md: 2.5 },
                  mt: 2,
                }}
              >
                {contentChildren}
              </Box>
            </Collapse>
          </Box>
        ) : (
          // Non-xs: render everything normally
          contentChildren
        )}
      </Paper>
    </Box>
  );
}
