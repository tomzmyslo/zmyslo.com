export default function Pill({ backgroundColor, content, textColor }) {
  const baseStyles =
    "inline-block px-2 py-1 rounded uppercase text-xs font-bold mr-1 mb-1";
  return (
    <span className={`${baseStyles} ${backgroundColor} ${textColor}`}>
      {content}
    </span>
  );
}
