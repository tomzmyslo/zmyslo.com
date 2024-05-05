import Image from "next/image";
import Link from "next/link";
import GitHub from "@components/icons/GitHub";
import LinkedIn from "@components/icons/LinkedIn";

export default function Page() {
  return (
    <div className="flex flex-col justify-center space-y-8 h-full">
      <div className="flex flex-col items-center justify-center">
        <div className="rounded-full border-2 mb-2 border-blue-800 shadow-lg lg:border-4 overflow-hidden">
          <Image
            className="rounded-full"
            src="/me.jpeg"
            alt="Tom Zmyslo"
            height={144}
            width={144}
          />
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-blue-800">
          Tom Zmyslo
        </h1>
        <h2>Ruby / JavaScript / Swift</h2>
      </div>
      <div className="text-center">
        <p className="px-4 md:px-24 lg:px-56">
          I'm a Senior Software Engineer with over a decade of experience
          developing for the web, mobile and desktop. I'm currently developing
          customized rebate management programs and customer management tools at{" "}
          <Link
            href="https://www.telus.com/agcg"
            className="font-semibold text-blue-800"
            target="_blank"
          >
            Telus Agriculture &amp; Consumer Goods
          </Link>
          .
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <Link
          href="https://github.com/tomzmyslo"
          aria-label="GitHub"
          target="_blank"
        >
          <GitHub color="text-blue-800" size={30} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/tomzmyslo"
          aria-label="LinkedIn"
          target="_blank"
        >
          <LinkedIn color="text-blue-800" size={30} />
        </Link>
      </div>
    </div>
  );
}
