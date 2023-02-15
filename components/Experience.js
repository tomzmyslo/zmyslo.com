
export default function Experience({ details }) {
  return (
    <div className='mb-4'>
      <h3 className='text-lg font-bold'>{details.company}</h3>
      <ul className='list-disc ml-1'>
        {details.roles.map((role, i) => {
          return (
            <li key={i} className='flex space-x-2'>
              <div className='flex flex-col justify-between items-center'>
                <div className='border-l border-indigo-600 h-full z-0'></div>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-col mb-1 md:items-baseline'>
                  <p className='font-semibold text-indigo-300'>{role.title}</p>
                  <p className='text-xs italic'>{role.tenure}</p>
                </div>
                <ul className='mb-2 list-disc list-outside'>
                  {role.responsibilities.map((responsibility, i) => {
                    return (
                      <li key={i} className='text-sm ml-6 mb-1 marker:text-green-400'>
                        {responsibility}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
