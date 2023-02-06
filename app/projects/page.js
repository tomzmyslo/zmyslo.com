import Project from 'components/Project';
import projects from '../../data/projects.json';

export default function ProjectPage() {
  return (
    <div className='w-full h-full px-4'>
      <h1 className='text-3xl'>projects</h1>
      <hr />

      <p>Lorem ipsum</p>

      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
}

// {
//   "name": "Kitchenatomy",
//   "medium": "Multi-Platform Application",
//   "dates_active": "",
//   "status": "Deprecated",
//   "technologies": ["HTML", "CSS", "JavaScript"]
// }
