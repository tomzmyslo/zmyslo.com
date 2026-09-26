export default function Skill({ children, name }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold">{name}</h3>
      {children}
    </div>
  );
}
