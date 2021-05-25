import { NAVBAR_ICONS } from "../../constants/NavbarIcons";
import { SidebarContainer } from "./styles";

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <nav>
        {Object.entries(NAVBAR_ICONS).map(([key, value]) => (
          <a href={value.ref}>
            {value.icon} {key}
          </a>
        ))}
      </nav>
    </SidebarContainer>
  );
};
