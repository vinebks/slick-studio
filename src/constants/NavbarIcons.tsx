import { FaUser } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { BsFillXSquareFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";

export const NAVBAR_ICONS = {
  "Meu Perfil": {
    icon: <FaUser />,
    ref: "#",
  },
  "Gestao de Usuarios": {
    icon: <ImUsers />,
    ref: "#",
  },
  "Avaliar Usuario": {
    icon: <BsFillStarFill />,
    ref: "#",
  },
  "Sair da Plataforma": {
    icon: <BsFillXSquareFill />,
    ref: "/login",
  },
};
