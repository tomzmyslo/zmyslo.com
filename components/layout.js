import Footer from './footer'

function Layout({ children }) {
  return (
    <>
      <main className="relative h-screen bg-gradient-to-b from-yellow-600 to-indigo-600">
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
