export default function NotFound() {
  document.title = "Page Not Found - Tom Zmyslo";
  return (
    <div className="mt-10 flex h-screen flex-col items-center justify-center lg:mt-14">
      <h1 className="mb-4 text-7xl font-bold">404</h1>
      <p className="font-light">Page Not Found</p>
    </div>
  );
}
