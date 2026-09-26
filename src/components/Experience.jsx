export default function Experience({ details }) {
  return (
    <article>
      <h3 className="mb-4 text-lg font-bold text-sky-900">{details.company}</h3>
      <div className="space-y-6 border-l-2 border-sky-100 pl-5">
        {details.roles.map((role) => (
          <div key={`${role.title}-${role.tenure}`}>
            <h4 className="text-sm font-semibold md:text-base">{role.title}</h4>
            <p className="mt-1 text-xs leading-5 text-slate-500">{role.tenure}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-6 text-slate-600 marker:text-slate-400">
              {role.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
