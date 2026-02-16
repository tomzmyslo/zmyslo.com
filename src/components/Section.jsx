export default function Section({ children, name }) {
  return (
    <section className="inline-block w-full py-3 first:pt-0">
      {name && (
        <>
          <h2 className="text-xl font-black uppercase">{name}</h2>
          <hr className="mb-3 border-x border-slate-400" />
        </>
      )}
      {children}
    </section>
  );
}
