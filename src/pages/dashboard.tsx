import { Dashboard } from "../components/Dashboard";
import { Logo } from "../components/Logo";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Logo />
      <Navbar />
      <Sidebar />
      <Dashboard />
    </>
  );
}
