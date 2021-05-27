import { FaUser } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { BsFillXSquareFill } from "react-icons/bs";

export const NAVBAR_ICONS = {
  "Meu Perfil": {
    icon: <FaUser />,
    ref: "/profile",
  },
  "Gestao de Colaboradores": {
    icon: <ImUsers />,
    ref: "/",
  },
};

export const NAVBAR_EXIT_ICON = {
  "Sair da Plataforma": {
    icon: <BsFillXSquareFill />,
    ref: "/login",
  },
};
