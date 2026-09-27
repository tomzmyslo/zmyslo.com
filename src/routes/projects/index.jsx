import { useEffect } from "react";
import { Link } from "react-router";
import PageHeader from "@/components/PageHeader";
import Pill from "@/components/Pill";
import projects from "@/data/projects.json";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects - Tom Zmyslo";
  }, []);
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="container mt-14 px-4 pt-8 pb-12 md:px-0 md:pt-12"
    >
      <PageHeader title="Professional Projects">
        <p>
          A selection of web, mobile, and desktop applications I’ve built for clients. Each one was
          created to meet a specific need, from product training to custom business tools.
        </p>
      </PageHeader>
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              className="group flex h-full flex-col rounded-md border border-slate-200 p-5 transition-colors hover:border-sky-200 hover:bg-sky-50 md:p-6"
              to={project.slug}
            >
              <p className="mb-3 text-xs font-medium tracking-wide text-slate-500 uppercase">
                {project.medium}
              </p>
              <div className="mb-6 flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-sky-900">{project.name}</h2>
                <span
                  aria-hidden="true"
                  className="text-xl text-sky-900 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Pill key={technology} content={technology} />
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
