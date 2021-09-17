import { NavbarContainer } from "./styles";
import { useCallback, useState } from "react";
import { NAVBAR_ITEMS } from "../../constants/NavbarList";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [active, setActive] = useState(NAVBAR_ITEMS[0].id);

  const handleActive = useCallback((item: string) => {
    setActive(item);
  }, []);

  return (
    <NavbarContainer>
      <ul>
        {NAVBAR_ITEMS.map((item) => (
          <li
            onClick={() => {
              handleActive(item.id);
            }}
            className={active === item.id ? "active" : ""}
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
              href={item.url}
            >
              {item.id}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <span>Bem Vindo(a) Adriana Torres </span>
        <Link href="/profile">
          <img
            src="https://img2.gratispng.com/20180806/uvr/kisspng-byu-marriott-school-of-business-professional-certi-home-5b67e6c9b3bfb9.8993363715335359457363.jpg"
            alt="logo_ey"
          />
        </Link>
      </div>
    </NavbarContainer>
  );
};
