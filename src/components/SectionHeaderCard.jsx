import { Typography } from "@mui/material";
import BentoCard from "./BentoCard";

export default function SectionHeaderCard({
  title,
  subtitle,
  gridColumn = { xs: "1 / -1", md: "span 4" },
}) {
  return (
    <BentoCard
      sx={{
        gridColumn: { xs: "1 / -1", sm: "span 6", md: "span 4" },
        justifyContent: "space-between",
        py: 5,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>

      {subtitle && (
        <Typography variant="body2" sx={{ opacity: 0.65 }}>
          {subtitle}
        </Typography>
      )}
    </BentoCard>
  );
}
