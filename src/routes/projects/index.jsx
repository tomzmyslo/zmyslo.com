import { Link } from "react-router";
import projects from "@/data/projects.json";

export default function ProjectsPage() {
  document.title = "Projects - Tom Zmyslo";

  return (
    <div className="container mt-14 px-3 py-4 md:px-0">
      <h1 className="mb-1 text-4xl font-bold">Professional Projects</h1>
      <hr className="mb-4 border-x" />
      <p className="mb-6 text-sm md:text-base">
        The following is a list of past projects I've built for clients. They range from full-stack
        web applications to mobile and desktop applications. Each one was created as a direct
        response to a particular client need or requirement.
      </p>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project, i) => {
          return (
            <li className="cursor-pointer py-1 hover:rounded-md hover:bg-gray-50 sm:rounded-md sm:border sm:border-gray-300 sm:p-2">
              <Link key={i} className="block" to={project.slug}>
                <div className="hover:trans mr-3 flex items-center justify-between transition duration-100 ease-in-out">
                  <div>
                    <h2 className="text-lg font-semibold">{project.name}</h2>
                    <p className="text-sm">{project.medium}</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 sm:hidden"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
