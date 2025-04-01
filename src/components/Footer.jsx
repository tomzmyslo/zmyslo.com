export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-xs pb-4">
      <p>&copy; {year} Tom Zmyslo. All rights reserved.</p>
    </footer>
  );
}
