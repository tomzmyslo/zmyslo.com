import { Link, useParams } from "react-router";
import Project from "@/components/Project";
import projects from "@/data/projects.json";

export default function ProjectPage() {
  let { slug } = useParams();
  let project = projects.find((project) => project.slug === slug);

  return (
    <div className="container mt-14 px-3 py-4 md:px-0">
      <Link className="mb-4 flex items-center justify-start gap-1" to="/projects">
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
        Back
      </Link>
      <Project project={project} />
    </div>
  );
}
