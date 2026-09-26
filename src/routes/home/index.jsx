import { useEffect } from "react";
import { Link } from "react-router";
import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";
import Pill from "@/components/Pill";
import projects from "@/data/projects.json";

const projectSummaries = {
  "jenn-air-for-business":
    "A product training platform with custom learning tools, a content management system, and on-demand spec sheets.",
  kitchenatomy:
    "An interactive product demo built with web technologies and delivered across iPad, Mac, and Windows.",
  "btu-watt-comparison-app":
    "A native iOS app that helps compare gas and electric cooktop efficiency, originally built in Objective-C and later converted to Swift.",
};

const selectedProjects = projects.filter((project) => projectSummaries[project.slug]);

export default function HomePage() {
  useEffect(() => {
    document.title = "Software Engineer - Tom Zmyslo";
  }, []);
  return (
    <main className="container mt-14 px-4 pt-8 pb-12 md:px-0 md:pt-12">
      <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-2">
          <p className="mb-4 text-sm font-semibold tracking-wide text-slate-500 uppercase">
            Senior Software Engineer
          </p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-sky-900 md:text-6xl">
            Tom Zmyslo
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            I build scalable, API-driven systems and modern web and mobile applications.
          </p>
          <div className="my-7 flex flex-wrap gap-2">
            {["Ruby", "JavaScript", "Swift"].map((language) => (
              <Pill key={language} content={language} />
            ))}
          </div>
          <div className="max-w-2xl space-y-4 border-t border-slate-300 pt-7 text-sm leading-7 text-slate-600 md:text-base">
            <p>
              With over 15 years of experience, I specialize in backend architecture, distributed
              systems, and reliable software that supports real-world operations at scale.
            </p>
            <p>
              I’ve led development on enterprise platforms, improved deployment and reliability
              practices, and enjoy working across the stack — from system design through production.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              to="/projects"
              className="rounded-md bg-sky-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-800"
            >
              Explore my projects <span aria-hidden="true">→</span>
            </Link>
            <Link to="/resume" className="text-sm font-medium text-sky-900 hover:underline">
              View résumé
            </Link>
          </div>
        </div>
        <aside className="rounded-md border border-sky-100 bg-sky-50 p-6 lg:mt-9">
          <h2 className="mb-4 text-xl font-bold text-sky-900">These days</h2>
          <p className="text-sm leading-7 text-slate-600">
            Currently exploring my next opportunity while continuing to build, learn, and
            occasionally spend time brewing beer.
          </p>
          <Link
            to="/brewing"
            className="mt-5 inline-block text-sm font-medium text-sky-900 hover:underline"
          >
            My work in brewing <span aria-hidden="true">→</span>
          </Link>
          <div className="mt-6 flex gap-5 border-t border-sky-200 pt-5">
            <a
              href="https://github.com/tomzmyslo"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded transition-opacity hover:opacity-70"
            >
              <GitHub color="text-sky-900" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tomzmyslo"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded transition-opacity hover:opacity-70"
            >
              <LinkedIn color="text-sky-900" size={24} />
            </a>
          </div>
        </aside>
      </div>
      <section aria-labelledby="selected-projects" className="mt-12 md:mt-16">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-slate-300 pb-3">
          <h2 id="selected-projects" className="text-xl font-bold uppercase">
            Selected projects
          </h2>
          <Link to="/projects" className="text-sm font-medium text-sky-900 hover:underline">
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          {selectedProjects.map((project) => (
            <li key={project.slug}>
              <Link
                to={`/projects/${project.slug}`}
                className="group flex h-full flex-col rounded-md border border-slate-200 p-5 transition-colors hover:border-sky-200 hover:bg-sky-50 md:p-6"
              >
                <p className="mb-3 text-xs font-medium tracking-wide text-slate-500 uppercase">
                  {project.medium}
                </p>
                <h3 className="mb-3 text-xl font-semibold text-sky-900">{project.name}</h3>
                <p className="mb-6 text-sm leading-7 text-slate-600">
                  {projectSummaries[project.slug]}
                </p>
                <span className="mt-auto text-sm font-medium text-sky-900">
                  View project{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
