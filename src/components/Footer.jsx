export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container mt-auto px-4 md:px-0">
      <p className="border-t border-slate-200 py-6 text-xs text-slate-500">
        &copy; {year} Tom Zmyslo. All rights reserved.
      </p>
    </footer>
  );
}
