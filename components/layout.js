import Footer from './footer';

function Layout({ children }) {
  return (
    <>
      <main className='relative antialiased h-screen bg-gradient-to-b from-green-400 to-indigo-600'>
        {children}
        <Footer />
      </main>
    </>
  );
}

export default Layout;
