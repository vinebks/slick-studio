import { Content } from '../components/Content';
import { Logo } from '../components/Logo';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <Logo />
      <Navbar />
      <Sidebar />
      <Content />
    </>
  );
}
