import Project from "@components/Project";
import projects from "@data/projects.json";

export const metadata = {
  title: "Projects",
};

export default function ProjectPage() {
  return (
    <div className="container px-3 md:px-0 text-indigo-100 mt-14 py-4">
      <h1 className="text-4xl font-bold mb-1">Professional Projects</h1>
      <hr className="mb-4 border-x border-indigo-100" />

      <p className="text-sm md:text-base mb-6">
        The following is a list of past projects I've built for clients. They
        range from full-stack web applications to mobile and desktop
        applications. Each one was created as a direct response to a particular
        client need or requirement.
      </p>

      {projects.map((project, i) => {
        return <Project key={i} project={project} />;
      })}
    </div>
  );
}
