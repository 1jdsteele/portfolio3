import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import useScrollToSection from "../hooks/useScrollToSection";

// On-page sections scroll into view; the resume is an external document action.
const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  // { id: "resume", label: "Resume" }, // Former on-page Resume section
  { id: "resume-pdf", label: "Resume", href: "/jake_steele_resume.pdf" },
  { id: "contact", label: "Contact" },
];

// Only actual page sections participate in active-section tracking.
const sections = navItems.filter((item) => !item.href);

export default function Header() {
  const { scrollToSection } = useScrollToSection();

  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(null);

  /* ----------------------------------
     1. Scroll state (shadow + bg)
  ---------------------------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ----------------------------------
     2. Active section tracking
  ---------------------------------- */
  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const lastId = ids[ids.length - 1];

    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        {
          rootMargin: "-45% 0px -45% 0px",
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    //bottom-of-page override (fixes the last section)
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      if (nearBottom) setActiveId(lastId);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,

        bgcolor: scrolled ? "rgba(15,23,42,0.78)" : "rgba(15,23,42,0.55)",

        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",

        borderBottom: scrolled
          ? "1px solid rgba(148,163,184,0.22)"
          : "1px solid rgba(148,163,184,0.12)",

        boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.28)" : "none",

        transition:
          "background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          py: scrolled ? 0.75 : 1.25,
          transition: "padding 200ms ease",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            letterSpacing: "-0.01em",
          }}
        >
          Jake Steele
        </Typography>

        {/* Desktop nav */}
        {!isXs && (
          <Box sx={{ display: "flex", gap: 1 }}>
            {navItems.map((item) => {
              const isActive = !item.href && activeId === item.id;

              return (
                <Button
                  key={item.id}
                  color="inherit"
                  {...(item.href
                    ? {
                        component: "a",
                        href: item.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : { onClick: () => go(item.id) })}
                  sx={{
                    position: "relative",
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: 999,
                    px: 1.5,
                    py: 0.75,
                    color: isActive
                      ? "rgba(255,255,255,0.98)"
                      : "rgba(226,232,240,0.92)",
                    transition:
                      "background-color 160ms ease, transform 160ms ease, color 160ms ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.10)",
                      transform: "translateY(-1px)",
                    },
                    "&:active": { transform: "translateY(0px)" },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: "50%",
                      bottom: 4,
                      width: isActive ? "60%" : "0%",
                      height: 2,
                      borderRadius: 2,
                      background:
                        "linear-gradient(90deg, rgba(165,180,252,0.9), rgba(224,231,255,1))",
                      transform: "translateX(-50%)",
                      transition: "width 220ms ease",
                    },
                  }}
                >
                  {item.label}
                  {item.href && (
                    <OpenInNewIcon
                      aria-hidden="true"
                      sx={{ fontSize: 15, ml: 0.65 }}
                    />
                  )}
                </Button>
              );
            })}
          </Box>
        )}

        {/* Mobile hamburger */}
        {isXs && (
          <>
            <IconButton
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              sx={{
                color: "rgba(226,232,240,0.92)",
                bgcolor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(148,163,184,0.18)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.10)" },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={menuOpen}
              onClose={() => setMenuOpen(false)}
              PaperProps={{
                sx: {
                  width: 260,
                  bgcolor: "rgba(15,23,42,0.92)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  borderLeft: "1px solid rgba(148,163,184,0.18)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                  py: 1.5,
                  borderBottom: "1px solid rgba(148,163,184,0.18)",
                }}
              >
                <Typography sx={{ fontWeight: 800 }}>Menu</Typography>
                <IconButton
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  sx={{ color: "rgba(226,232,240,0.92)" }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              <List sx={{ py: 1 }}>
                {navItems.map((item) => {
                  const isActive = !item.href && activeId === item.id;

                  return (
                    <ListItemButton
                      key={item.id}
                      {...(item.href
                        ? {
                            component: "a",
                            href: item.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: () => setMenuOpen(false),
                          }
                        : { onClick: () => go(item.id) })}
                      sx={{
                        mx: 1,
                        my: 0.5,
                        borderRadius: 2,
                        border: isActive
                          ? "1px solid rgba(165,180,252,0.35)"
                          : "1px solid rgba(148,163,184,0.12)",
                        bgcolor: isActive
                          ? "rgba(165,180,252,0.10)"
                          : "transparent",
                        "&:hover": { bgcolor: "rgba(255,255,255,0.06)" },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          sx: {
                            fontWeight: isActive ? 700 : 600,
                            color: "rgba(226,232,240,0.95)",
                          },
                        }}
                      />
                      {item.href && (
                        <OpenInNewIcon
                          aria-hidden="true"
                          sx={{ fontSize: 18, color: "rgba(226,232,240,0.75)" }}
                        />
                      )}
                    </ListItemButton>
                  );
                })}
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
