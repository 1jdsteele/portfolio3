import { Box, Paper, Typography } from "@mui/material";

export default function BentoSection({ title, subtitle, children, id }) {
  return (
    <Box id={id}>
      {title && (
        <Typography
          variant="h5"
          sx={{
            mb: 1,
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="body2" sx={{ mb: 2, opacity: 0.7 }}>
          {subtitle}
        </Typography>
      )}

      <Paper
        elevation={2}
        sx={{
          p: 3,
          borderRadius: 4,
          border: "1px solid rgba(148,163,184,0.2)",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}
