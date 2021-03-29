import { NavbarContainer } from './styles';

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <ul>
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
      <div>
        <span>Welcome, Felipe</span>
        <img
          src="https://avatars.githubusercontent.com/u/43390533?v=4"
          alt="felipe github"
        />
      </div>
    </NavbarContainer>
  );
};
