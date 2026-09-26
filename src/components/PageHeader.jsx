export default function PageHeader({ title, children, action }) {
  return (
    <header className="mb-9 border-b border-slate-300 pb-7 md:mb-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <h1 className="text-4xl font-bold text-sky-900">{title}</h1>
        {action}
      </div>
      {children && (
        <div className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          {children}
        </div>
      )}
    </header>
  );
}
