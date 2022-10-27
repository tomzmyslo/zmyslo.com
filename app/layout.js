import './global.css';
import Footer from '../components/footer';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Zmyslo</title>
      </head>
      <body>
        <main className='relative antialiased h-screen bg-gradient-to-b from-green-400 to-indigo-600'>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
