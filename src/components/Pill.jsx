export default function Pill({ color, content }) {
  const baseStyles = "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium";
  return <span className={`${baseStyles} bg-${color}-100 text-${color}-700`}>{content}</span>;
}
