import { UserDetailsPage } from "../components/Content/UserDetails";
import { Logo } from "../components/Logo";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export default function UserDetails() {
  return (
    <>
      <Logo />
      <Navbar />
      <Sidebar />
      <UserDetailsPage />
    </>
  );
}
