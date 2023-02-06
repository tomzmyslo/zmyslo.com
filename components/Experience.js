export default function Experience({ details }) {
  return (
    <div className='mb-4'>
      <h3 className='text-xl text-slate-800 font-bold'>{details.company}</h3>
      <ul className='list-inside'>
        {details.roles.map((role, i) => {
          return (
            <li key={i}>
              <div className='flex flex-col md:items-baseline'>
                <p className='text-slate-600 font-semibold'>{role.title}</p>
                <p className='text-slate-500 text-sm italic'>{role.tenure}</p>
              </div>
              <ul className='text-slate-600 mb-2 list-disc list-outside'>
                {role.responsibilities.map((responsibility, i) => {
                  return (
                    <li key={i} className='text-sm ml-6 mb-1'>
                      {responsibility}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
