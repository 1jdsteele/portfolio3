// import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
// import { Box, Paper, useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import React, {
//   useEffect,
//   useLayoutEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import useInView from "../hooks/useInView";
// import { getBentoTone } from "../styles/bentoTones";
// import SectionHeader from "./SectionHeader";

// // Open (sm+): horizontal -> vertical -> cards.
// // Close (sm+): cards -> vertical -> horizontal.
// // xs skips the horizontal phase.
// const WIDTH_MS = 360;
// const HEIGHT_MS = 480;
// const FADE_MS = 300;
// const GAP_MS = 15;
// const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
// const COMPACT_WIDTH = "460px";
// const CLOSED_HEADER_HEIGHT = { xs: 112, sm: 125, md: 125 };

// export default function BentoSection({
//   id,
//   tone,
//   title,
//   subtitle,
//   children,
//   defaultOpenOnXs = false,
// }) {
//   const theme = useTheme();
//   const isXs = useMediaQuery(theme.breakpoints.down("sm"));
//   const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
//   const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
//   const viewport = isXs ? "xs" : isMdUp ? "md" : "sm";
//   const t = getBentoTone(tone);

//   const { ref: revealRef, inView } = useInView({
//     threshold: 0.05,
//     rootMargin: "0px 0px -2% 0px",
//   });

//   // Backwards compatible with existing <SectionHeaderCard ... /> children.
//   // After the visual design is finalized, those can be replaced with props.
//   const childArray = useMemo(
//     () => React.Children.toArray(children),
//     [children],
//   );
//   const firstChild = childArray[0] ?? null;
//   const hasHeaderChild =
//     React.isValidElement(firstChild) && firstChild.props.title != null;
//   const headerTitle = hasHeaderChild ? firstChild.props.title : title;
//   const headerSubtitle = hasHeaderChild ? firstChild.props.subtitle : subtitle;
//   const contentChildren = hasHeaderChild ? childArray.slice(1) : childArray;

//   // xs and sm/md remember their own choices. A resize never resets them.
//   const [openXs, setOpenXs] = useState(defaultOpenOnXs);
//   const [openWide, setOpenWide] = useState(true);
//   const open = isXs ? openXs : openWide;
//   const [hasToggled, setHasToggled] = useState(false);

//   const toggle = () => {
//     setHasToggled(true);
//     if (isXs) setOpenXs((value) => !value);
//     else setOpenWide((value) => !value);
//   };

//   const contentId = `${id}-content`;
//   const contentRef = useRef(null);
//   const firstRowSpacerRef = useRef(null);
//   const [firstRowHeight, setFirstRowHeight] = useState(170);

//   // Measure the actual first desktop grid row BEFORE paint so the header
//   // doesn't visibly descend from an estimated height after a page refresh.
//   useLayoutEffect(() => {
//     if (!isMdUp || !open || !firstRowSpacerRef.current) return;
//     const spacer = firstRowSpacerRef.current;
//     const measure = () => {
//       const height = Math.ceil(spacer.getBoundingClientRect().height);
//       if (height > 0) {
//         setFirstRowHeight((previous) =>
//           previous === height ? previous : height,
//         );
//       }
//     };
//     measure();
//     if (typeof ResizeObserver === "undefined") return;
//     const observer = new ResizeObserver(measure);
//     observer.observe(spacer);
//     return () => observer.disconnect();
//   }, [isMdUp, open]);

//   // Avoid the instant sm <-> md card reflow being visible underneath the
//   // moving header. Fade cards out for the breakpoint transition, move the
//   // header and vertical spacer, then fade the settled grid back in.
//   // Unlike width-driven window resizing, this fires only when crossing 900px.
//   const priorViewport = useRef(viewport);
//   const [reflowStage, setReflowStage] = useState("none");
//   useLayoutEffect(() => {
//     const previous = priorViewport.current;
//     priorViewport.current = viewport;
//     if (previous === viewport) return;
//     if (
//       reducedMotion ||
//       !open ||
//       !(["sm", "md"].includes(previous) && ["sm", "md"].includes(viewport))
//     ) {
//       setReflowStage("none");
//       return;
//     }

//     setReflowStage("hiding");
//     const reveal = window.setTimeout(
//       () => setReflowStage("appearing"),
//       HEIGHT_MS + 60,
//     );
//     const finish = window.setTimeout(
//       () => setReflowStage("none"),
//       HEIGHT_MS + 60 + FADE_MS + 30,
//     );
//     return () => {
//       window.clearTimeout(reveal);
//       window.clearTimeout(finish);
//     };
//   }, [viewport, open, reducedMotion]);

//   useEffect(() => {
//     if (contentRef.current) contentRef.current.inert = !open;
//   }, [open]);

//   const reflowing = reflowStage !== "none";
//   const openHeightDelay = isXs || reflowing ? 0 : WIDTH_MS + GAP_MS;
//   const closeHeightDelay = FADE_MS + GAP_MS;
//   const closeWidthDelay = closeHeightDelay + HEIGHT_MS + GAP_MS;
//   const openFadeDelay = openHeightDelay + HEIGHT_MS;

//   const transition = (property, duration, delay = 0, easing = EASE) =>
//     reducedMotion ? "none" : `${property} ${duration}ms ${easing} ${delay}ms`;

//   return (
//     <Box
//       component="section"
//       id={id}
//       ref={revealRef}
//       sx={{
//         scrollMarginTop: { xs: "84px", md: "96px" },
//         minWidth: 0,
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(10px)",
//         transition: "opacity 900ms ease, transform 520ms ease",
//         "@media (prefers-reduced-motion: reduce)": {
//           opacity: 1,
//           transform: "none",
//           transition: "none",
//         },
//       }}
//     >
//       <Paper
//         elevation={0}
//         onClick={
//           !open && headerTitle
//             ? (event) => {
//                 // SectionHeader owns an actual button; don't double-toggle it.
//                 if (!event.target.closest("button")) toggle();
//               }
//             : undefined
//         }
//         sx={{
//           boxSizing: "border-box",
//           width: { xs: "100%", sm: open ? "100%" : COMPACT_WIDTH },
//           maxWidth: "100%",
//           mx: "auto",
//           p: { xs: 2, md: 3 },
//           borderRadius: { xs: 3, sm: 4 },
//           position: "relative",
//           isolation: "isolate",
//           minWidth: 0,
//           overflow: "hidden",
//           cursor: !open ? "pointer" : "default",

//           "--section-pad": { xs: "16px", md: "24px" },
//           "--section-gap": { xs: "16px", md: "20px" },
//           "--bento-section-bg": t.sectionBg,
//           "--bento-card-bg": t.cardBg,
//           "--bento-outline": t.outline,
//           "--bento-card-hover-bg": t.cardHoverBg ?? t.cardBg,
//           "--bento-card-hover-outline": t.cardHoverOutline ?? t.outline,
//           "--bento-link": t.link ?? "rgba(226,232,240,0.95)",
//           "--bento-link-hover": t.linkHover ?? "rgba(255,255,255,1)",

//           bgcolor: "var(--bento-section-bg)",
//           border: "1px solid var(--bento-outline)",
//           backgroundImage: "none",
//           boxShadow: open ? "0 12px 35px rgba(0,0,0,0.18)" : "none",
//           transform: "translateY(0)",
//           transition: [
//             transition("width", WIDTH_MS, open ? 0 : closeWidthDelay),
//             transition("transform", 180),
//             transition("box-shadow", 220),
//           ].join(", "),

//           // Preserve the lift and a modest shadow, but NOT the section-wide
//           // background/border glow. Only the chevron brightens on hover.
//           ...(!open && {
//             "@media (hover: hover)": {
//               "&:hover": {
//                 transform: "translateY(-3px)",
//                 boxShadow: "0 16px 34px rgba(0,0,0,0.25)",
//               },
//               "&:active": { transform: "translateY(-1px)" },
//             },
//           }),

//           // Avoid the content-visibility intrinsic-size placeholders in
//           // BentoCard causing first-render grid rows to jump in height.
//           "& .MuiPaper-root": {
//             contentVisibility: "visible",
//             containIntrinsicSize: "none",
//           },

//           "@media (prefers-reduced-motion: reduce)": {
//             transition: "none",
//             transform: "none",
//           },
//         }}
//       >
//         {/* This is a real height spacer only at xs/sm and when md is closed.
//             At open md it shrinks, allowing the first card row beside the header. */}
//         <Box
//           aria-hidden="true"
//           sx={{
//             height: {
//               xs: CLOSED_HEADER_HEIGHT.xs,
//               sm: CLOSED_HEADER_HEIGHT.sm,
//               md: open ? 0 : CLOSED_HEADER_HEIGHT.md,
//             },
//             transition: transition(
//               "height",
//               HEIGHT_MS,
//               open ? openHeightDelay : closeHeightDelay,
//             ),
//           }}
//         />

//         {headerTitle && (
//           <Box
//             className="bento-section-header"
//             sx={{
//               position: "absolute",
//               zIndex: 2,
//               top: "var(--section-pad)",

//               // Center the actual header element at EVERY width. md open
//               // smoothly moves its center into the first four columns;
//               // closing moves it back. No immediate left-edge snap.
//               left: {
//                 xs: "50%",
//                 md: open
//                   ? "calc(var(--section-pad) + (100% - 2 * var(--section-pad) - 2 * var(--section-gap)) / 6)"
//                   : "50%",
//               },
//               width: {
//                 xs: "calc(100% - 2 * var(--section-pad))",
//                 md: open
//                   ? "calc((100% - 2 * var(--section-pad) - 2 * var(--section-gap)) / 3)"
//                   : "calc(100% - 2 * var(--section-pad))",
//               },
//               height: {
//                 xs: CLOSED_HEADER_HEIGHT.xs,
//                 sm: CLOSED_HEADER_HEIGHT.sm,
//                 md: open ? firstRowHeight : CLOSED_HEADER_HEIGHT.md,
//               },
//               transform: "translateX(-50%)",
//               minWidth: 0,
//               transition: [
//                 transition("left", WIDTH_MS, open ? 0 : closeWidthDelay),
//                 transition("width", WIDTH_MS, open ? 0 : closeWidthDelay),
//                 // Do not animate initial grid measurements on refresh.
//                 hasToggled || reflowing
//                   ? transition(
//                       "height",
//                       HEIGHT_MS,
//                       open ? openHeightDelay : closeHeightDelay,
//                     )
//                   : "none",
//                 transition("transform", 180),
//               ].join(", "),

//               // Keep EXACTLY the same internal alignment and chevron position
//               // while the header moves: centered, chevron below subtitle.
//               // These overrides intentionally apply to md even when expanded.
//               "& > header": {
//                 alignItems: "center",
//                 textAlign: "center",
//                 py: { xs: 1, sm: 1.25, md: 1.5 },
//                 gap: { xs: 0.7, sm: 0.8 },
//               },
//               "& > header > div:first-of-type": {
//                 justifyContent: "center",
//               },
//               "& > header > div:first-of-type > svg.section-header-chevron": {
//                 display: "none",
//               },
//               "& > header > svg.section-header-chevron": {
//                 display: "block",
//               },
//               "& .section-header-chevron": {
//                 transitionDuration: reducedMotion ? "0ms" : "230ms",
//               },
//               "&:hover .section-header-chevron": {
//                 opacity: 1,
//                 filter: "drop-shadow(0 0 5px rgba(255,255,255,0.38))",
//               },
//               ...(open && {
//                 "@media (hover: hover)": {
//                   "&:hover": { transform: "translate(-50%, -2px)" },
//                 },
//               }),
//             }}
//           >
//             <SectionHeader
//               title={headerTitle}
//               subtitle={headerSubtitle}
//               open={open}
//               onToggle={toggle}
//               contentId={contentId}
//             />
//           </Box>
//         )}

//         <Box
//           id={contentId}
//           role="region"
//           aria-label={headerTitle ? `${headerTitle} content` : undefined}
//           aria-hidden={!open}
//           sx={{
//             minWidth: 0,
//             display: "grid",
//             gridTemplateRows: open ? "1fr" : "0fr",
//             visibility: open ? "visible" : "hidden",
//             pointerEvents: open ? "auto" : "none",
//             transition: [
//               transition(
//                 "grid-template-rows",
//                 HEIGHT_MS,
//                 open ? openHeightDelay : closeHeightDelay,
//               ),
//               reducedMotion
//                 ? "none"
//                 : `visibility 0s linear ${open ? 0 : FADE_MS}ms`,
//             ].join(", "),
//           }}
//         >
//           <Box
//             ref={contentRef}
//             sx={{ minHeight: 0, minWidth: 0, overflow: "hidden" }}
//           >
//             <Box
//               sx={{
//                 pt: { xs: 2, sm: 2.5, md: 0 },
//                 minWidth: 0,
//                 opacity: reflowStage === "hiding" ? 0 : open ? 1 : 0,
//                 // No translateY here. It caused card text to look as if it
//                 // entered from contradictory directions on initial reveal.
//                 transition:
//                   reflowStage === "hiding"
//                     ? "none"
//                     : reflowing
//                       ? transition("opacity", FADE_MS, 0, "ease")
//                       : transition(
//                           "opacity",
//                           FADE_MS,
//                           open ? openFadeDelay : 0,
//                           "ease",
//                         ),
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "grid",
//                   gridTemplateColumns: {
//                     xs: "minmax(0, 1fr)",
//                     sm: "repeat(6, minmax(0, 1fr))",
//                     md: "repeat(12, minmax(0, 1fr))",
//                   },
//                   gap: { xs: 2, md: 2.5 },
//                   alignItems: "stretch",
//                   minWidth: 0,
//                 }}
//               >
//                 {/* An actual grid item in row one, so every existing BentoCard
//                     keeps its original column span and order. */}
//                 {headerTitle && (
//                   <Box
//                     ref={firstRowSpacerRef}
//                     aria-hidden="true"
//                     sx={{
//                       display: { xs: "none", md: "block" },
//                       gridColumn: { md: "span 4" },
//                       minHeight: 170,
//                       minWidth: 0,
//                       pointerEvents: "none",
//                     }}
//                   />
//                 )}
//                 {contentChildren}
//               </Box>

//               {/* Bottom chevron: quiet, no lift/ripple or section glow. */}
//               <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
//                 <Box
//                   component="button"
//                   type="button"
//                   onClick={toggle}
//                   aria-label={`Collapse ${headerTitle || id} section`}
//                   aria-controls={contentId}
//                   aria-expanded={open}
//                   sx={{
//                     display: "inline-flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     minWidth: 48,
//                     minHeight: 44,
//                     p: 0,
//                     border: 0,
//                     borderRadius: 2,
//                     bgcolor: "transparent",
//                     color: "text.secondary",
//                     cursor: "pointer",
//                     transition: transition("color", 160),
//                     "&:hover": {
//                       bgcolor: "transparent",
//                       borderColor: "transparent",
//                       color: "text.primary",
//                     },
//                     "&:focus-visible": {
//                       outline: "2px solid var(--bento-link)",
//                       outlineOffset: 2,
//                     },
//                   }}
//                 >
//                   <ExpandMoreRoundedIcon
//                     aria-hidden="true"
//                     sx={{
//                       fontSize: 26,
//                       transform: "rotate(180deg)",
//                       opacity: 0.8,
//                     }}
//                   />
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Paper>
//     </Box>
//   );
// }

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Box, Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useInView from "../hooks/useInView";
import { getBentoTone } from "../styles/bentoTones";
import SectionHeader from "./SectionHeader";

// Open (sm+): horizontal -> vertical -> cards.
// Close (sm+): cards -> vertical -> horizontal.
// xs skips the horizontal phase.
const WIDTH_MS = 360;
const HEIGHT_MS = 480;
const FADE_MS = 300;
const GAP_MS = 15;
const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
const COMPACT_WIDTH = "460px";
const CLOSED_HEADER_HEIGHT = { xs: 112, sm: 125, md: 125 };

export default function BentoSection({
  id,
  tone,
  title,
  subtitle,
  children,
  defaultOpenOnXs = false,
}) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const viewport = isXs ? "xs" : isMdUp ? "md" : "sm";
  const t = getBentoTone(tone);

  const { ref: revealRef, inView } = useInView({
    threshold: 0.05,
    rootMargin: "0px 0px -2% 0px",
  });

  // Backwards compatible with existing <SectionHeaderCard ... /> children.
  // After the visual design is finalized, those can be replaced with props.
  const childArray = useMemo(
    () => React.Children.toArray(children),
    [children],
  );
  const firstChild = childArray[0] ?? null;
  const hasHeaderChild =
    React.isValidElement(firstChild) && firstChild.props.title != null;
  const headerTitle = hasHeaderChild ? firstChild.props.title : title;
  const headerSubtitle = hasHeaderChild ? firstChild.props.subtitle : subtitle;
  const contentChildren = hasHeaderChild ? childArray.slice(1) : childArray;

  // xs and sm/md remember their own choices. A resize never resets them.
  const [openXs, setOpenXs] = useState(defaultOpenOnXs);
  const [openWide, setOpenWide] = useState(true);
  const open = isXs ? openXs : openWide;
  const [hasToggled, setHasToggled] = useState(false);

  const toggle = () => {
    setHasToggled(true);
    if (isXs) setOpenXs((value) => !value);
    else setOpenWide((value) => !value);
  };

  const contentId = `${id}-content`;
  const contentRef = useRef(null);
  const firstRowSpacerRef = useRef(null);
  const [firstRowHeight, setFirstRowHeight] = useState(170);

  // Measure the actual first desktop grid row BEFORE paint so the header
  // doesn't visibly descend from an estimated height after a page refresh.
  useLayoutEffect(() => {
    if (!isMdUp || !open || !firstRowSpacerRef.current) return;
    const spacer = firstRowSpacerRef.current;
    const measure = () => {
      const height = Math.ceil(spacer.getBoundingClientRect().height);
      if (height > 0) {
        setFirstRowHeight((previous) =>
          previous === height ? previous : height,
        );
      }
    };
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(spacer);
    return () => observer.disconnect();
  }, [isMdUp, open]);

  // Avoid the instant sm <-> md card reflow being visible underneath the
  // moving header. Fade cards out for the breakpoint transition, move the
  // header and vertical spacer, then fade the settled grid back in.
  // Unlike width-driven window resizing, this fires only when crossing 900px.
  const priorViewport = useRef(viewport);
  const [reflowStage, setReflowStage] = useState("none");
  useLayoutEffect(() => {
    const previous = priorViewport.current;
    priorViewport.current = viewport;
    if (previous === viewport) return;
    if (
      reducedMotion ||
      !open ||
      !(["sm", "md"].includes(previous) && ["sm", "md"].includes(viewport))
    ) {
      setReflowStage("none");
      return;
    }

    setReflowStage("hiding");
    const reveal = window.setTimeout(
      () => setReflowStage("appearing"),
      HEIGHT_MS + 60,
    );
    const finish = window.setTimeout(
      () => setReflowStage("none"),
      HEIGHT_MS + 60 + FADE_MS + 30,
    );
    return () => {
      window.clearTimeout(reveal);
      window.clearTimeout(finish);
    };
  }, [viewport, open, reducedMotion]);

  useEffect(() => {
    if (contentRef.current) contentRef.current.inert = !open;
  }, [open]);

  const reflowing = reflowStage !== "none";
  const openHeightDelay = isXs || reflowing ? 0 : WIDTH_MS + GAP_MS;
  const closeHeightDelay = FADE_MS + GAP_MS;
  const closeWidthDelay = closeHeightDelay + HEIGHT_MS + GAP_MS;
  const openFadeDelay = openHeightDelay + HEIGHT_MS;

  const transition = (property, duration, delay = 0, easing = EASE) =>
    reducedMotion ? "none" : `${property} ${duration}ms ${easing} ${delay}ms`;

  return (
    <Box
      component="section"
      id={id}
      ref={revealRef}
      sx={{
        scrollMarginTop: { xs: "84px", md: "96px" },
        minWidth: 0,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 900ms ease, transform 520ms ease",
        "@media (prefers-reduced-motion: reduce)": {
          opacity: 1,
          transform: "none",
          transition: "none",
        },
      }}
    >
      <Paper
        elevation={0}
        onClick={
          !open && headerTitle
            ? (event) => {
                // SectionHeader owns an actual button; don't double-toggle it.
                if (!event.target.closest("button")) toggle();
              }
            : undefined
        }
        sx={{
          boxSizing: "border-box",
          width: { xs: "100%", sm: open ? "100%" : COMPACT_WIDTH },
          maxWidth: "100%",
          mx: "auto",
          p: { xs: 2, md: 3 },
          borderRadius: { xs: 3, sm: 4 },
          position: "relative",
          isolation: "isolate",
          minWidth: 0,
          overflow: "hidden",
          cursor: !open ? "pointer" : "default",

          "--section-pad": { xs: "16px", md: "24px" },
          "--section-gap": { xs: "16px", md: "20px" },
          "--bento-section-bg": t.sectionBg,
          "--bento-card-bg": t.cardBg,
          "--bento-outline": t.outline,
          "--bento-card-hover-bg": t.cardHoverBg ?? t.cardBg,
          "--bento-card-hover-outline": t.cardHoverOutline ?? t.outline,
          "--bento-link": t.link ?? "rgba(226,232,240,0.95)",
          "--bento-link-hover": t.linkHover ?? "rgba(255,255,255,1)",

          bgcolor: "var(--bento-section-bg)",
          border: "1px solid var(--bento-outline)",
          backgroundImage: "none",
          boxShadow: open ? "0 12px 35px rgba(0,0,0,0.18)" : "none",
          transform: "translateY(0)",
          transition: [
            transition("width", WIDTH_MS, open ? 0 : closeWidthDelay),
            transition("transform", 180),
            transition("box-shadow", 220),
          ].join(", "),

          // Preserve the lift and a modest shadow, but NOT the section-wide
          // background/border glow. Only the chevron brightens on hover.
          ...(!open && {
            "@media (hover: hover)": {
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 16px 34px rgba(0,0,0,0.25)",
              },
              "&:active": { transform: "translateY(-1px)" },
            },
          }),

          // Avoid the content-visibility intrinsic-size placeholders in
          // BentoCard causing first-render grid rows to jump in height.
          "& .MuiPaper-root": {
            contentVisibility: "visible",
            containIntrinsicSize: "none",
          },

          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
            transform: "none",
          },
        }}
      >
        {/* This is a real height spacer only at xs/sm and when md is closed.
            At open md it shrinks, allowing the first card row beside the header. */}
        <Box
          aria-hidden="true"
          sx={{
            height: {
              xs: CLOSED_HEADER_HEIGHT.xs,
              sm: CLOSED_HEADER_HEIGHT.sm,
              md: open ? 0 : CLOSED_HEADER_HEIGHT.md,
            },
            transition: transition(
              "height",
              HEIGHT_MS,
              open ? openHeightDelay : closeHeightDelay,
            ),
          }}
        />

        {headerTitle && (
          <Box
            sx={{
              position: "absolute",
              zIndex: 2,
              top: "var(--section-pad)",

              // Center the actual header element at EVERY width. md open
              // smoothly moves its center into the first four columns;
              // closing moves it back. No immediate left-edge snap.
              left: {
                xs: "50%",
                md: open
                  ? "calc(var(--section-pad) + (100% - 2 * var(--section-pad) - 2 * var(--section-gap)) / 6)"
                  : "50%",
              },
              width: {
                xs: "calc(100% - 2 * var(--section-pad))",
                md: open
                  ? "calc((100% - 2 * var(--section-pad) - 2 * var(--section-gap)) / 3)"
                  : "calc(100% - 2 * var(--section-pad))",
              },
              height: {
                xs: CLOSED_HEADER_HEIGHT.xs,
                sm: CLOSED_HEADER_HEIGHT.sm,
                md: open ? firstRowHeight : CLOSED_HEADER_HEIGHT.md,
              },
              transform: "translateX(-50%)",
              minWidth: 0,
              transition: [
                transition("left", WIDTH_MS, open ? 0 : closeWidthDelay),
                transition("width", WIDTH_MS, open ? 0 : closeWidthDelay),
                // Do not animate initial grid measurements on refresh.
                hasToggled || reflowing
                  ? transition(
                      "height",
                      HEIGHT_MS,
                      open ? openHeightDelay : closeHeightDelay,
                    )
                  : "none",
                transition("transform", 180),
              ].join(", "),

              // SectionHeader owns its typography, chevron, and hover feedback.
              // This wrapper only controls position and dimensions.
            }}
          >
            <SectionHeader
              title={headerTitle}
              subtitle={headerSubtitle}
              open={open}
              onToggle={toggle}
              contentId={contentId}
            />
          </Box>
        )}

        <Box
          id={contentId}
          role="region"
          aria-label={headerTitle ? `${headerTitle} content` : undefined}
          aria-hidden={!open}
          sx={{
            minWidth: 0,
            display: "grid",
            gridTemplateRows: open ? "1fr" : "0fr",
            visibility: open ? "visible" : "hidden",
            pointerEvents: open ? "auto" : "none",
            transition: [
              transition(
                "grid-template-rows",
                HEIGHT_MS,
                open ? openHeightDelay : closeHeightDelay,
              ),
              reducedMotion
                ? "none"
                : `visibility 0s linear ${open ? 0 : FADE_MS}ms`,
            ].join(", "),
          }}
        >
          <Box
            ref={contentRef}
            sx={{ minHeight: 0, minWidth: 0, overflow: "hidden" }}
          >
            <Box
              sx={{
                pt: { xs: 2, sm: 2.5, md: 0 },
                minWidth: 0,
                opacity: reflowStage === "hiding" ? 0 : open ? 1 : 0,
                // No translateY here. It caused card text to look as if it
                // entered from contradictory directions on initial reveal.
                transition:
                  reflowStage === "hiding"
                    ? "none"
                    : reflowing
                      ? transition("opacity", FADE_MS, 0, "ease")
                      : transition(
                          "opacity",
                          FADE_MS,
                          open ? openFadeDelay : 0,
                          "ease",
                        ),
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "minmax(0, 1fr)",
                    sm: "repeat(6, minmax(0, 1fr))",
                    md: "repeat(12, minmax(0, 1fr))",
                  },
                  gap: { xs: 2, md: 2.5 },
                  alignItems: "stretch",
                  minWidth: 0,
                }}
              >
                {/* An actual grid item in row one, so every existing BentoCard
                    keeps its original column span and order. */}
                {headerTitle && (
                  <Box
                    ref={firstRowSpacerRef}
                    aria-hidden="true"
                    sx={{
                      display: { xs: "none", md: "block" },
                      gridColumn: { md: "span 4" },
                      minHeight: 170,
                      minWidth: 0,
                      pointerEvents: "none",
                    }}
                  />
                )}
                {contentChildren}
              </Box>

              {/* Bottom chevron: quiet, no lift/ripple or section glow. */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                <Box
                  component="button"
                  type="button"
                  onClick={toggle}
                  aria-label={`Collapse ${headerTitle || id} section`}
                  aria-controls={contentId}
                  aria-expanded={open}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 48,
                    minHeight: 44,
                    p: 0,
                    border: 0,
                    borderRadius: 2,
                    bgcolor: "transparent",
                    color: "text.secondary",
                    cursor: "pointer",
                    transition: transition("color", 160),
                    "&:hover": {
                      bgcolor: "transparent",
                      borderColor: "transparent",
                      color: "text.primary",
                    },
                    "&:focus-visible": {
                      outline: "2px solid var(--bento-link)",
                      outlineOffset: 2,
                    },
                  }}
                >
                  <ExpandMoreRoundedIcon
                    aria-hidden="true"
                    sx={{
                      fontSize: 26,
                      transform: "rotate(180deg)",
                      opacity: 0.8,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
