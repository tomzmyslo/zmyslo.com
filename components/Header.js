"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@components/Logo";

export default function Header() {
  const pathname = usePathname();

  function active(currentPath) {
    return pathname == currentPath ? "border-b-2" : "hover:border-b-2";
  }

  return (
    <nav className="p-2 w-full fixed z-50 bg-blue-800 shadow-md lg:p-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-10 lg:h-14">
          <Link href="/">
            <Logo />
          </Link>
          <div className="space-x-4">
            <Link
              href="/projects"
              className={`text-white pb-2 ${active("/projects")}`}
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className={`text-white pb-2 ${active("/resume")}`}
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
