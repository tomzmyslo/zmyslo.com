"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {year} Tom Zmyslo. All rights reserved.</p>
    </footer>
  );
}
