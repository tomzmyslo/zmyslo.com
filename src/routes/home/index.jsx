import { Link } from "react-router";
import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";
import selfie from "@/assets/tom_no_background.png";

export default function HomePage() {
  document.title = "Software Engineer - Tom Zmyslo";

  return (
    <div className="flex h-full flex-col justify-center space-y-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-5xl font-bold text-sky-900 md:text-6xl lg:text-7xl">Tom Zmyslo</h1>
        <h2 className="text-lg font-medium">Ruby / JavaScript / Swift</h2>
      </div>
      <div className="text-basex text-center text-balance">
        <p className="mb-3 px-6 md:px-24 lg:px-56">
          I’m a Senior Software Engineer with over a decade of experience designing and building
          scalable, API-driven systems and modern web applications.
        </p>

        <p className="mb-3 px-6 md:px-24 lg:px-56">
          I specialize in backend architecture, distributed systems, and delivering reliable
          software that supports real-world operations at scale.
        </p>

        <p className="mb-3 px-6 md:px-24 lg:px-56">
          I’ve led development on enterprise platforms, improved deployment and reliability
          practices, and enjoy working across the stack — from system design through production.
        </p>

        <p className="mb-3 px-6 md:px-24 lg:px-56">
          Currently exploring my next opportunity while continuing to build, learn, and occasionally
          spending time brewing beer.
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <Link to="https://github.com/tomzmyslo" aria-label="GitHub" target="_blank">
          <GitHub color="text-sky-900" size={30} />
        </Link>
        <Link to="https://www.linkedin.com/in/tomzmyslo" aria-label="LinkedIn" target="_blank">
          <LinkedIn color="text-sky-900" size={30} />
        </Link>
      </div>
    </div>
  );
}
