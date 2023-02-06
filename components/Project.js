export default function Project({ project }) {
  const { name, medium, technologies } = project;

  return (
    <div>
      <h3 className='font-bold'>{name}</h3>
      <p>{medium}</p>
      <ul>
        {technologies.map((technology) => {
          return <li>{technology}</li>;
        })}
      </ul>
    </div>
  );
}
