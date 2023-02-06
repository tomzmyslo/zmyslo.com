export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='py-2'>
      <p className='text-xs text-indigo-300'>&copy; {year} tom zmyslo. all rights reserved.</p>
    </footer>
  );
}
