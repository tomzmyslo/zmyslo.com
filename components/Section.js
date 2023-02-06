export default function Section({
  children,
  name,
  backgroundColor = 'bg-white',
  textColor = 'text-slate-800',
}) {
  return (
    <section
      className={`${backgroundColor} ${textColor} p-2 md:px-4 first:rounded-t last:rounded-b`}
    >
      {name && (
        <>
          <h2 className='text-xl font-black uppercase text-slate-700'>{name}</h2>
          <hr className='mb-2' />
        </>
      )}
      {children}
    </section>
  );
}
