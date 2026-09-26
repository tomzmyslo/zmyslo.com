import { useEffect } from "react";
import { Link, useParams } from "react-router";
import NotFound from "@/routes/not_found";
import Project from "@/components/Project";
import projects from "@/data/projects.json";

export default function ProjectPage() {
  let { slug } = useParams();
  let project = projects.find((project) => project.slug === slug);
  useEffect(() => {
    document.title = project ? `${project.name} - Tom Zmyslo` : "Page Not Found - Tom Zmyslo";
  }, [project]);

  if (!project) return <NotFound />;

  return (
    <main className="container mt-14 px-4 pt-8 pb-12 md:px-0 md:pt-12">
      <Link
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-sky-900 hover:underline"
        to="/projects"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        All projects
      </Link>
      <Project project={project} />
    </main>
  );
}
