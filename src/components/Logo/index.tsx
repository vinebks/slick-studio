import Link from "next/link";
import { LogoContainer } from "./styles";

export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <Link href="/">
        <img
          src="https://www.quinlanandassociates.com/wp-content/uploads/2018/07/EY_logo_slogan.png"
          alt="gestor_profile"
        />
      </Link>
    </LogoContainer>
  );
};
