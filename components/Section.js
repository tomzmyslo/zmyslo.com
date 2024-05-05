export default function Section({ children, name }) {
  return (
    <section>
      {name && (
        <>
          <h2 className="text-xl font-black uppercase">{name}</h2>
          <hr className="mb-2 border-x border-slate-400" />
        </>
      )}
      {children}
    </section>
  );
}
