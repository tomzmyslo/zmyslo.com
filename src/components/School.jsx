export default function School({ name, field }) {
  return (
    <div className="mb-4">
      <h3 className="font-bold">{name}</h3>
      <p className="text-sm">{field}</p>
    </div>
  );
}
