import Project from 'components/Project';
import projects from '../../data/projects.json';

export default function ProjectPage() {
  return (
    <div className='container px-2 md:px-0 text-indigo-100 mt-14 py-4'>
      {/* <h1 className='text-4xl mb-3'>projects</h1> */}

      {/* <p className='mb-3'>Lorem ipsum</p> */}

      {projects.map((project, i) => {
        return <Project key={i} project={project} />;
      })}
    </div>
  );
}
