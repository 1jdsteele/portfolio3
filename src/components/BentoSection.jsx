import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
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
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const childArray = useMemo(
    () => React.Children.toArray(children),
    [children],
  );

  const headerChild = childArray[0] ?? null;
  const contentChildren = childArray.slice(1);

  const [open, setOpen] = useState(defaultOpenOnXs);

  // Desktop/tablet always expanded; xs follows its default.
  useEffect(() => {
    if (!collapseOnXs) return;

    if (isXs) setOpen(defaultOpenOnXs);
    else setOpen(true);
  }, [isXs, collapseOnXs, defaultOpenOnXs]);

  const canCollapse = Boolean(collapseOnXs && isXs && headerChild);

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

  // Timing shared by the shell, content, and chevron.
  const expandDuration = 500; //HERE
  const expandEasing = "cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <Box
      id={id}
      sx={{
        scrollMarginTop: { xs: "84px", md: "96px" },
      }}
    >
      {/* Legacy heading support, preserved */}
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
        elevation={canCollapse ? 0 : 2}
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 3,

          // Needed for the animated shell
          position: "relative",
          isolation: "isolate",

          // Existing responsive grid
          display: "grid",
          // gridTemplateColumns: {
          //   xs: "1fr",
          //   sm: "repeat(6, minmax(0, 1fr))",
          //   md: "repeat(12, minmax(0, 1fr))",
          // },
          gridTemplateColumns: {
            xs: "minmax(0, 1fr)",
            sm: "repeat(6, minmax(0, 1fr))",
            md: "repeat(12, minmax(0, 1fr))",
          },
          minWidth: 0,

          // Remove unused grid space when collapsed.
          // Keep the original spacing when expanded.
          gap: {
            xs: canCollapse && !open ? 0 : 2,
            md: 2.5,
          },

          alignItems: "stretch",

          // Existing CSS tone variables
          "--bento-section-bg": t.sectionBg,
          "--bento-card-bg": t.cardBg,
          "--bento-outline": t.outline,
          "--bento-card-hover-bg": t.cardHoverBg ?? t.cardBg,
          "--bento-card-hover-outline": t.cardHoverOutline ?? t.outline,
          "--bento-link": t.link ?? "rgba(226, 232, 240, 0.95)",
          "--bento-link-hover": t.linkHover ?? "rgba(255,255,255,1)",

          // ------------------------------------------------
          // OUTER SECTION APPEARANCE
          // ------------------------------------------------

          // On xs, hide the Paper's own background when
          // collapsible. The animated shell replaces it.
          bgcolor: {
            xs: canCollapse ? "transparent" : "var(--bento-section-bg)",
            sm: "var(--bento-section-bg)",
          },

          border: "1px solid",
          borderColor: {
            xs: canCollapse ? "transparent" : "var(--bento-outline)",
            sm: "var(--bento-outline)",
          },

          // Prevent MUI's elevation background overlay
          // from showing through on the collapsed xs Paper.
          backgroundImage: canCollapse ? "none" : undefined,

          // No outer shadow when closed; restore it on open.
          boxShadow: canCollapse ? (open ? 2 : 0) : undefined,

          // ------------------------------------------------
          // ANIMATED SHELL (XS ONLY)
          // ------------------------------------------------

          ...(canCollapse && {
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              zIndex: -1,
              pointerEvents: "none",

              borderRadius: "inherit",
              bgcolor: "var(--bento-section-bg)",
              border: "1px solid var(--bento-outline)",

              // Reveal downwards from the header
              clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",

              transition: `clip-path ${expandDuration}ms ${expandEasing}`,

              "@media (prefers-reduced-motion: reduce)": {
                transition: "none",
              },

              transition: `
                clip-path ${expandDuration}ms ${expandEasing},
                opacity ${expandDuration}ms ease
              `,

              "@media (prefers-reduced-motion: reduce)": {
                transition: "none",
              },
            },
          }),

          // ------------------------------------------------
          // EXISTING SCROLL REVEAL
          // ------------------------------------------------

          "--reveal-y": inView ? "0px" : "10px",

          opacity: inView ? 1 : 0,
          transform: "translateY(var(--reveal-y))",
          willChange: "transform, opacity",

          // Existing transitions, with gap timing aligned
          // to the new expand/collapse animation.
          transition: `
            opacity 900ms ease,
            transform 520ms ease,
            background-color 200ms ease,
            border-color 200ms ease,
            box-shadow 260ms ease,
            padding 240ms ease,
            gap ${expandDuration}ms ${expandEasing},
            border-radius 240ms ease
          `,

          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
            transform: "none",
            opacity: 1,
          },
        }}
      >
        {/* HEADER: always visible */}
        {headerChild && (
          <Box
            sx={{
              gridColumn: {
                xs: "1 / -1",
                sm: "span 6",
                md: "span 4",
              },

              // Anchor for the chevron overlay
              position: "relative",
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

            {/* XS expand/collapse indicator */}
            {canCollapse && (
              <ExpandMoreRoundedIcon
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  left: "50%",
                  bottom: 10,
                  fontSize: 24,
                  color: "text.secondary",
                  opacity: 0.75,
                  pointerEvents: "none",

                  transform: `translateX(-50%) rotate(${open ? 180 : 0}deg)`,

                  transition: `transform ${expandDuration}ms ${expandEasing}`,

                  "@media (prefers-reduced-motion: reduce)": {
                    transition: "none",
                  },
                }}
              />
            )}
          </Box>
        )}

        {/* CONTENT */}
        {canCollapse ? (
          // <Box id={`${id}-content`} sx={{ gridColumn: "1 / -1" }}>
          <Box
            id={`${id}-content`}
            sx={{
              gridColumn: "1 / -1",
              minWidth: 0,
            }}
          >
            <Collapse
              in={open}
              timeout={expandDuration}
              // Keep the contents mounted so opacity can
              // transition smoothly from 0 to 1.
            >
              {/* HERE (not here, opacity below) */}
              <Box
                sx={{
                  opacity: open ? 1 : 0,

                  transform: open ? "translateY(0)" : "translateY(8px)",

                  transition: `
            opacity ${open ? 300 : 160}ms ease ${open ? 200 : 0}ms, 
            transform ${expandDuration}ms ${expandEasing}
          `,

                  "@media (prefers-reduced-motion: reduce)": {
                    transition: "none",
                    transform: "none",
                  },
                }}
              >
                {/* Original content grid */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "minmax(0, 1fr)",
                    },
                    minWidth: 0,
                    gap: { xs: 2, md: 2.5 },
                    mt: 2,
                  }}
                >
                  {contentChildren}
                </Box>

                {/* Bottom collapse chevron */}
                <Box
                  component="button"
                  type="button"
                  onClick={toggle}
                  aria-label={`Collapse ${id} section`}
                  aria-controls={`${id}-content`}
                  aria-expanded={open}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    minHeight: 44,
                    mt: 1,
                    border: 0,
                    bgcolor: "transparent",
                    color: "text.secondary",
                    cursor: "pointer",

                    "&:focus-visible": {
                      outline: "2px solid currentColor",
                      outlineOffset: 2,
                      borderRadius: 2,
                    },
                  }}
                >
                  <ExpandMoreRoundedIcon
                    aria-hidden="true"
                    sx={{
                      fontSize: 26,
                      opacity: 0.75,
                      transform: "rotate(180deg)",
                    }}
                  />
                </Box>
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
