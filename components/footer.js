function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  
  return(
    <footer className="container absolute left-0 right-0 mx-auto bottom-4">
      <div className="flex justify-center">
        <p className="text-sm antialiased font-light text-white">
          &copy; {year} Tom Zmyslo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
