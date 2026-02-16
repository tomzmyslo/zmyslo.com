export default function Experience({ details }) {
  return (
    <div className="mb-2">
      <h3 className="text-lg font-bold">{details.company}</h3>
      <ul className="ml-1 list-disc">
        {details.roles.map((role, i) => {
          return (
            <li key={i} className="flex space-x-2">
              <div className="ml-1 flex flex-col">
                <div className="mb-1 flex flex-col md:items-baseline">
                  <p className="text-sm font-semibold">{role.title}</p>
                  <p className="text-xs italic">{role.tenure}</p>
                </div>
                <ul className="mb-2 list-outside list-disc">
                  {role.responsibilities.map((responsibility, i) => {
                    return (
                      <li key={i} className="mb-1 ml-6 text-sm last:mb-0">
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
