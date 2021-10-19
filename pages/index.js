import Image from 'next/image'
import logo from '../public/zmyslo-retro-logo.png'

function HomePage() {
  return(
    <>
      <Image
        src={logo}
        alt="Zmyslo Logo"
      />
    </>
  )
}

export default HomePage
