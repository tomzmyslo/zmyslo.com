export default function Project({ project }) {
  const { name, medium, description, technologies } = project;

  function createMarkup() {
    return { __html: description };
  }

  return (
    <div className='px-4 pb-2 mb-8 border-l-4 border-indigo-600'>
      <h3 className='font-bold text-3xl'>{name}</h3>
      <p className='text-sm font-semibold mb-3'>{medium}</p>
      <div className='py-25 mb-4' dangerouslySetInnerHTML={createMarkup()} />
      <h4 className='font-semibold text-sm mb-1'>Technologies:</h4>
      <ul className='list-disc pl-4 marker:text-teal-400'>
        {technologies.map((technology, i) => {
          return (
            <li key={i} className='text-sm mb-1'>
              {technology}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
