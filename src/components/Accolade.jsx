export default function Accolade({ accolade }) {
  const { name, beer, place, date } = accolade;

  return (
    <>
      <h1>{name}</h1>
      <p>{beer}</p>
      <p>{place}</p>
      <p>{date}</p>
    </>
  );
}
