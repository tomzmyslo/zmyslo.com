import Image from 'next/image'
import logo from '../public/zmyslo-retro-logo.png'

function HomePage() {
  return(
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="h-screen my-auto -mt-20 flex items-center">
          <Image
            className="filter invert"
            src={logo}
            alt="Zmyslo Logo"
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
