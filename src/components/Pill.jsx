export default function Pill({ content }) {
  return (
    <span className="inline-flex rounded bg-sky-100 px-2 py-1 text-xs leading-5 font-medium text-sky-900">
      {content}
    </span>
  );
}
