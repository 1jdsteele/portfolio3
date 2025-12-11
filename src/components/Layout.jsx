import { Box, Container } from "@mui/material";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
