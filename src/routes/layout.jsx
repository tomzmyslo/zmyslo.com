import { Outlet } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col items-center text-slate-800">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
