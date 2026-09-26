import { useEffect } from "react";
import { Link } from "react-router";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found - Tom Zmyslo";
  }, []);
  return (
    <main className="container mt-14 flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <p className="mb-4 text-sm font-semibold tracking-wide text-slate-500">404</p>
      <h1 className="mb-4 text-4xl font-bold text-sky-900">Page not found</h1>
      <p className="mb-7 text-sm leading-7 text-slate-600">
        The page you’re looking for isn’t here.
      </p>
      <Link
        to="/"
        className="rounded-md bg-sky-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-800"
      >
        Back to home
      </Link>
    </main>
  );
}
