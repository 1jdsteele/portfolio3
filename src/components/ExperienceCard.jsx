import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SchemaOutlinedIcon from "@mui/icons-material/SchemaOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import {
  Box,
  Chip,
  Divider,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import BentoCard from "./BentoCard";

// Optional icon names for highlights in experienceData.js.
// A highlight can also be a plain string, which gets the default icon.
const HIGHLIGHT_ICONS = {
  pipeline: AccountTreeOutlinedIcon,
  workflow: SchemaOutlinedIcon,
  database: StorageOutlinedIcon,
  code: CodeOutlinedIcon,
  team: GroupsOutlinedIcon,
  impact: TrendingUpOutlinedIcon,
};

export default function ExperienceCard({
  company,
  role,
  location,
  startDate,
  endDate,
  employmentType,
  description,
  highlights = [],
  tech = [],
  links = [],
  logo,
  logoScale = 1,
  initials,
  sx = {},
}) {
  const dateRange = [startDate, endDate].filter(Boolean).join(" – ");
  const companyInitials =
    initials ||
    company
      ?.trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase() ||
    "?";

  const hasDetails = Boolean(description) || highlights.length > 0;
  const hasFooter = tech.length > 0 || links.length > 0;

  return (
    <BentoCard
      sx={{
        // Grid placement is supplied by ExperienceSection through `sx`.
        p: { xs: 2.5, sm: 3 },
        gap: 0,
        justifyContent: "flex-start",
        minWidth: 0,
        ...sx,
      }}
    >
      {/* Employer / role / dates */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          columnGap: 2,
          rowGap: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "flex-start",
            flex: "1 1 220px",
            minWidth: 0,
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              flexShrink: 0,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              border: "1px solid var(--bento-outline)",
              bgcolor:
                "color-mix(in srgb, var(--bento-outline) 18%, transparent)",
              color: "var(--bento-link)",
            }}
          >
            {logo ? (
              <Box
                component="img"
                src={logo}
                alt={`${company} logo`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transform: `scale(${logoScale})`,
                }}
              />
            ) : (
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 800, letterSpacing: 0.5 }}
              >
                {companyInitials}
              </Typography>
            )}
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: 700, lineHeight: 1.25 }}
            >
              {role}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mt: 0.5, fontWeight: 600, opacity: 0.85 }}
            >
              {company}
            </Typography>
            {location && (
              <Typography variant="body2" sx={{ mt: 0.75, opacity: 0.65 }}>
                {location}
              </Typography>
            )}
          </Box>
        </Box>

        {(dateRange || employmentType) && (
          <Box
            sx={{
              ml: { xs: 0, sm: "auto" },
              textAlign: { xs: "left", sm: "right" },
              flexShrink: 0,
            }}
          >
            {dateRange && (
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, whiteSpace: "nowrap" }}
              >
                {dateRange}
              </Typography>
            )}
            {employmentType && (
              <Typography
                variant="caption"
                sx={{ display: "block", mt: 0.25, opacity: 0.65 }}
              >
                {employmentType}
              </Typography>
            )}
          </Box>
        )}
      </Box>

      {hasDetails && (
        <>
          <Divider sx={{ my: 2.5, borderColor: "var(--bento-outline)" }} />

          {description && (
            <Typography
              variant="body2"
              sx={{ mb: highlights.length ? 2 : 0, lineHeight: 1.65 }}
            >
              {description}
            </Typography>
          )}

          {highlights.length > 0 && (
            <Stack
              component="ul"
              spacing={1.5}
              sx={{ m: 0, p: 0, listStyle: "none" }}
            >
              {highlights.map((highlight, index) => {
                const { text, icon } =
                  typeof highlight === "string"
                    ? { text: highlight }
                    : highlight;
                const HighlightIcon =
                  HIGHLIGHT_ICONS[icon] ?? CheckCircleOutlineIcon;

                return (
                  <Box
                    component="li"
                    key={`${text}-${index}`}
                    sx={{
                      display: "flex",
                      gap: 1.25,
                      alignItems: "flex-start",
                    }}
                  >
                    <HighlightIcon
                      aria-hidden="true"
                      fontSize="small"
                      sx={{
                        mt: "3px",
                        flexShrink: 0,
                        color: "var(--bento-link)",
                        opacity: 0.85,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, opacity: 0.9 }}
                    >
                      {text}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          )}
        </>
      )}

      {hasFooter && (
        <Box sx={{ mt: "auto", pt: 2.5 }}>
          <Divider sx={{ mb: 2, borderColor: "var(--bento-outline)" }} />

          {tech.length > 0 && (
            <Stack direction="row" flexWrap="wrap" gap={0.75}>
              {tech.map((technology) => (
                <Chip
                  key={technology}
                  label={technology}
                  size="small"
                  sx={{
                    color: "inherit",
                    border: "1px solid var(--bento-outline)",
                    bgcolor:
                      "color-mix(in srgb, var(--bento-outline) 20%, transparent)",
                  }}
                />
              ))}
            </Stack>
          )}

          {links.length > 0 && (
            <Stack
              direction="row"
              flexWrap="wrap"
              gap={2}
              sx={{ mt: tech.length > 0 ? 2 : 0 }}
            >
              {links.map((link) => (
                <MuiLink
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontSize: "0.875rem",
                    color: "var(--bento-link)",
                    textDecorationColor:
                      "color-mix(in srgb, var(--bento-link) 50%, transparent)",
                    "&:hover": {
                      color: "var(--bento-link-hover)",
                      textDecorationColor: "var(--bento-link-hover)",
                    },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          )}
        </Box>
      )}
    </BentoCard>
  );
}
