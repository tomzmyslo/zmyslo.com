export default function Section({ children, name }) {
  return (
    <section className="min-w-0">
      {name && (
        <h2 className="mb-6 border-b border-slate-300 pb-3 text-xl font-bold uppercase">{name}</h2>
      )}
      {children}
    </section>
  );
}
