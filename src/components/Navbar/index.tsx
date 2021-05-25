import { NavbarContainer } from "./styles";
import { useCallback, useState } from "react";
import { NAVBAR_LIST } from "../../constants/NavbarList";

export const Navbar: React.FC = () => {
  const [active, setActive] = useState("Dashboard");

  const handleActive = useCallback((item: string) => {
    setActive(item);
  }, []);

  return (
    <NavbarContainer>
      <ul>
        {NAVBAR_LIST.map((item) => (
          <li
            onClick={() => handleActive(item)}
            className={active === item ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
      <div>
        <span>Bem Vindo(a) Adriana Torres </span>
        <img
          src="https://img2.gratispng.com/20180806/uvr/kisspng-byu-marriott-school-of-business-professional-certi-home-5b67e6c9b3bfb9.8993363715335359457363.jpg"
          alt="logo_ey"
        />
      </div>
    </NavbarContainer>
  );
};
