export default function Pill({ color, content }) {
  const greenStyles = 'bg-green-400 text-slate-700';
  const indigoStyles = 'bg-indigo-600 text-slate-100';
  const backgroundColor = color == 'green' ? greenStyles : indigoStyles;

  return (
    <span
      className={`inline-block px-2 py-1 rounded uppercase text-xs font-bold mr-1 mb-1 ${backgroundColor}`}
    >
      {content}
    </span>
  );
}
