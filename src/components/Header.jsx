import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import useScrollToSection from "../hooks/useScrollToSection";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const { scrollToSection } = useScrollToSection();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(15,23,42,0.85)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Jake Steele
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          {sections.map((section) => (
            <Button
              key={section.id}
              color="inherit"
              onClick={() => scrollToSection(section.id)}
              sx={{ textTransform: "none", fontWeight: 500 }}
            >
              {section.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
