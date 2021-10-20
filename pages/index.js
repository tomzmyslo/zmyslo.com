import Image from 'next/image'
import logo from '../public/zmyslo-retro-logo.png'

function HomePage() {
  return(
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="flex items-center h-screen my-auto">
          <div className="text-center text-white">
            <Image
              className="filter invert"
              src={logo}
              alt="Zmyslo Logo"
            />
            <p className="text-xl antialiased font-light">
              Developer / iOS / Ruby on Rails
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
