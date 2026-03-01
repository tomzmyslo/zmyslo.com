export default function Project({ project }) {
  const { name, medium, description, technologies } = project;

  function createMarkup() {
    return { __html: description };
  }

  return (
    <>
      <h2 className="text-3xl font-bold">{name}</h2>
      <p className="mb-3 text-sm font-semibold">{medium}</p>
      <div className="mb-4 py-2" dangerouslySetInnerHTML={createMarkup()} />
      <h3 className="mb-1 text-sm font-semibold">Technologies:</h3>
      <ul className="list-disc pl-4">
        {technologies.map((technology, i) => {
          return (
            <li key={i} className="mb-1 text-sm">
              {technology}
            </li>
          );
        })}
      </ul>
    </>
  );
}
