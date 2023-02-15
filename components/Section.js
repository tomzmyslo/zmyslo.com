export default function Section({ children, name }) {
  return (
    <section className='text-indigo-100 py-2'>
      {name && (
        <>
          <h2 className='text-xl font-black uppercase'>{name}</h2>
          <hr className='mb-2' />
        </>
      )}
      {children}
    </section>
  );
}
