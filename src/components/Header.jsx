import { Link, NavLink } from "react-router";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <nav className="fixed z-50 w-full bg-blue-800 p-2 shadow-md lg:p-0">
      <div className="container mx-auto">
        <div className="flex h-10 items-center justify-between lg:h-14">
          <Link to="/">
            <Logo />
          </Link>
          <div className="space-x-4 text-white">
            <NavLink to="/projects">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "border-b-2 pb-2"
                      : "hover:border-b-2 hover:border-white/70 hover:pb-2"
                  }
                >
                  Projects
                </span>
              )}
            </NavLink>
            <NavLink to="/resume">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "border-b-2 pb-2"
                      : "hover:border-b-2 hover:border-white/70 hover:pb-2"
                  }
                >
                  Resume
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
