export default function Skill({ children, name }) {
  return (
    <div className="mb-2">
      <h3 className="font-bold">{name}:</h3>
      {children}
    </div>
  );
}
