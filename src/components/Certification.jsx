export default function Certification({ certification }) {
  const { title, subtitle, date } = certification;
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{date}</p>
    </>
  );
}
