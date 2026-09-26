import { Link, NavLink } from "react-router";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <nav aria-label="Main navigation" className="fixed z-50 w-full bg-sky-900 text-white shadow-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-0">
        <Link to="/" aria-label="Tom Zmyslo home">
          <Logo />
        </Link>
        <div className="flex h-full items-center gap-4 text-sm sm:gap-6 sm:text-base">
          {[
            ["/brewing", "Brewing"],
            ["/projects", "Projects"],
            ["/resume", "Resume"],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex h-full items-center border-b-2 pt-0.5 transition-colors ${isActive ? "border-white" : "border-transparent text-sky-100 hover:border-white/70 hover:text-white"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
