import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <main className="bg-gradient-to-b from-yellow-600 to-indigo-600 h-screen">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}
