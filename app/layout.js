import './global.css';

export default function RootLayout({ children }) {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <html>
      <head>
        <title>Zmyslo</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </head>
      <body>
        <main className='relative antialiased h-screen bg-gradient-to-b from-green-400 to-indigo-600'>
          {children}
          <footer className='container absolute left-0 right-0 mx-auto bottom-4'>
            <div className='flex justify-center'>
              <p className='text-xs font-thin text-white'>
                &copy; {year} Tom Zmyslo. All rights reserved.
              </p>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
