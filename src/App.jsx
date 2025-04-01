import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "@/routes/layout";
import HomePage from "@/routes/home";
import ProjectsPage from "@/routes/projects";
import ResumePage from "@/routes/resume";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="resume" element={<ResumePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
