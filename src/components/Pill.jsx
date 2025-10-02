export default function Pill({ color, content }) {
  const baseStyles =
    "inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium inset-ring";
  return (
    <span className={`${baseStyles} bg-${color}-50 text-${color}-700 inset-ring-${color}-700/10`}>
      {content}
    </span>
  );
}
