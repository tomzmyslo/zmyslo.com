export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-8">
      <p className="text-xs text-indigo-300">
        &copy; {year} Tom Zmyslo. All rights reserved.
      </p>
    </footer>
  );
}
