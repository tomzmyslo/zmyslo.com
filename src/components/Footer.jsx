export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2 text-xs">
      <p>&copy; {year} Tom Zmyslo. All rights reserved.</p>
    </footer>
  );
}
