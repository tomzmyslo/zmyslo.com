import { Link, useLocation } from "react-router";
import Logo from "@/components/Logo";

export default function Header() {
  const location = useLocation();

  function active(currentPath) {
    return location == currentPath ? "border-b-2" : "hover:border-b-2";
  }

  return (
    <nav className="p-2 w-full fixed z-50 bg-blue-800 shadow-md lg:p-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-10 lg:h-14">
          <Link to="/">
            <Logo />
          </Link>
          <div className="space-x-4">
            <Link
              to="/projects"
              className={`text-white pb-2 ${active("/projects")}`}
            >
              Projects
            </Link>
            <Link
              to="/resume"
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
