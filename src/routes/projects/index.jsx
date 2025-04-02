import Project from "@/components/Project";
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
      {projects.map((project, i) => {
        return <Project key={i} project={project} />;
      })}
    </div>
  );
}
