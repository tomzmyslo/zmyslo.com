import { Link } from "react-router";
import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";
import selfie from "@/assets/tom_no_background.png";

export default function HomePage() {
  document.title = "Software Engineer - Tom Zmyslo";

  return (
    <div className="flex h-full flex-col justify-center space-y-8">
      <div className="flex flex-col items-center justify-center">
        <img
          src={selfie}
          className="mb-2 w-36 rounded-full border-2 border-sky-900 bg-radial from-sky-100 to-sky-900 shadow-lg lg:border-4"
          alt="Tom Zmyslo"
        />
        <h1 className="mb-4 text-5xl font-bold text-sky-900 md:text-6xl lg:text-7xl">Tom Zmyslo</h1>
        <h2 className="text-lg font-medium">Ruby / JavaScript / Swift</h2>
      </div>
      <div className="text-center">
        <p className="px-4 md:px-24 lg:px-56">
          I'm a Senior Software Engineer with over a decade of experience developing for the web,
          mobile and desktop. I'm currently developing customized rebate management programs and
          customer management tools at{" "}
          <Link
            to="https://www.telus.com/agcg"
            className="font-semibold text-sky-900"
            target="_blank"
          >
            Telus Agriculture &amp; Consumer Goods
          </Link>
          .
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
