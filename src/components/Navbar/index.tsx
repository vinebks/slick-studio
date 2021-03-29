import { NavbarContainer } from './styles';
import { useCallback, useState } from 'react';
import { NAVBAR_LIST } from '../../constants/NavbarList';

export const Navbar: React.FC = () => {
  const [active, setActive] = useState('Dashboard');

  const handleActive = useCallback((item: string) => {
    setActive(item);
  }, []);

  return (
    <NavbarContainer>
      <ul>
        {NAVBAR_LIST.map((item) => (
          <li
            onClick={() => handleActive(item)}
            className={active === item ? 'active' : ''}
          >
            {item}
          </li>
        ))}
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
