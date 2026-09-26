export default function School({ name, field }) {
  return (
    <div>
      <h3 className="text-sm leading-6 font-semibold text-sky-900">{name}</h3>
      <p className="mt-1 text-sm text-slate-600">{field}</p>
    </div>
  );
}
