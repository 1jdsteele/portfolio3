// src/App.jsx
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Future: <Route path="/projects/:id" element={<ProjectDetailPage />} /> */}
      </Routes>
    </Layout>
  );
}
