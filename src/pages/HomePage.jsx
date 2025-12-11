import { Box, Chip, Link as MuiLink, Stack, Typography } from "@mui/material";
import BentoSection from "../components/BentoSection";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        pb: 6,
      }}
    >
      {/* ABOUT */}
      <BentoSection
        id="about"
        title="About me"
        subtitle="Software engineering grad student • Backend-leaning full-stack dev"
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          <Box flex={2}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              I’m Jake, a CS grad student in Los Angeles focused on building
              real-world, production-ready software. I enjoy backend-heavy
              full-stack work: React + Supabase, Spring Boot, and distributed
              systems/algorithms.
            </Typography>
            <Typography variant="body1">
              Recent projects include an inventory system for hotels, a swim
              school management portal, and a bunch of algorithm-heavy toys like
              a Minesweeper solver and learning AIs for games.
            </Typography>
          </Box>

          <Stack
            flex={1}
            spacing={1}
            alignItems={{ xs: "flex-start", md: "flex-end" }}
          >
            <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
              Tech I enjoy:
            </Typography>
            <Stack
              direction="row"
              flexWrap="wrap"
              gap={1}
              justifyContent={{ md: "flex-end" }}
            >
              {[
                "React",
                "Supabase",
                "PostgreSQL",
                "Spring Boot",
                "C++",
                "Python",
              ].map((tag) => (
                <Chip key={tag} label={tag} size="small" />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </BentoSection>

      {/* PROJECTS */}
      <BentoSection
        id="projects"
        title="Projects"
        subtitle="A few things I’ve been building lately"
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: 2.5,
          }}
        >
          {/* Project card 1 */}
          <ProjectCard
            title="Innventory"
            description="Hotel inventory management app with Supabase auth, low-stock email alerts, and responsive React UI."
            tech={["React", "Supabase", "PostgreSQL", "Vercel"]}
            linkLabel="View project"
            href="#"
          />

          {/* Project card 2 */}
          <ProjectCard
            title="Dolphins Swim Academy"
            description="Spring Boot/JTE web app to manage swim classes, sessions, and student enrollment."
            tech={["Spring Boot", "JTE", "MySQL"]}
            linkLabel="View project"
            href="#"
          />

          {/* Project card 3 */}
          <ProjectCard
            title="Minesweeper Solver"
            description="C++ + SFML backtracking visualizer that learns bomb configurations across boards."
            tech={["C++", "SFML", "Algorithms"]}
            linkLabel="View project"
            href="#"
          />
        </Box>
      </BentoSection>

      {/* RESUME */}
      <BentoSection
        id="resume"
        title="Resume"
        subtitle="Quick snapshot + a link to the full PDF"
      >
        <Stack spacing={2}>
          <Typography variant="body1">
            I’m currently looking at backend or full-stack roles where I can
            work with modern web stacks, distributed systems, and data-heavy
            workflows.
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Highlights:
          </Typography>
          <ul style={{ marginTop: 0 }}>
            <li>
              <Typography variant="body2">
                MS in Computer Science at CSULA (in progress), focused on
                software engineering and algorithms.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Experience with production deployments (Vercel, Netlify),
                relational data modeling, and REST API design.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Strong background in algorithms, data structures, and C++/Java.
              </Typography>
            </li>
          </ul>

          {/* Later you can make this a real route or static file */}
          <MuiLink
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            Download full resume (PDF)
          </MuiLink>
        </Stack>
      </BentoSection>

      {/* CONTACT */}
      <BentoSection
        id="contact"
        title="Contact"
        subtitle="Let’s talk about internships, collaborations, or fun side projects"
      >
        <Stack spacing={2}>
          <Typography variant="body1">
            The best way to reach me is via email. I’m always open to chatting
            about internships, research opportunities, or building something
            weird and useful.
          </Typography>

          <Stack spacing={1}>
            <Typography variant="body2">
              Email:{" "}
              <MuiLink href="mailto:jdsteeleprofessional@gmail.com">
                jdsteeleprofessional@gmail.com
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              GitHub:{" "}
              <MuiLink
                href="https://github.com/YOUR_GITHUB"
                target="_blank"
                rel="noreferrer"
              >
                github.com/YOUR_GITHUB
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              LinkedIn:{" "}
              <MuiLink
                href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/YOUR_LINKEDIN
              </MuiLink>
            </Typography>
          </Stack>
        </Stack>
      </BentoSection>
    </Box>
  );
}

// Tiny inline project-card to keep file small
function ProjectCard({ title, description, tech, href, linkLabel }) {
  return (
    <BentoInnerCard>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1.5, opacity: 0.85 }}>
        {description}
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={0.5} sx={{ mb: 1.5 }}>
        {tech.map((t) => (
          <Chip key={t} label={t} size="small" />
        ))}
      </Stack>
      {href && (
        <MuiLink href={href} underline="hover">
          {linkLabel}
        </MuiLink>
      )}
    </BentoInnerCard>
  );
}

import { Paper as MuiPaper } from "@mui/material";
function BentoInnerCard({ children }) {
  return (
    <MuiPaper
      variant="outlined"
      sx={{
        p: 2,
        height: "100%",
        borderRadius: 3,
        borderColor: "rgba(148,163,184,0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {children}
    </MuiPaper>
  );
}
