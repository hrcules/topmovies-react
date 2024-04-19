import { Link, useLocation } from "react-router-dom";

import {
  SidebarContainer,
  SidebarTitle,
  SidebarTitleSpan,
  ButtonList,
  LinkText,
  SidebarContent,
  CloseSidebar,
} from "../styles/components/Sidebar.style";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

function Sidebar() {
  const { pathname } = useLocation();
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const handleOpenSidebar = () => {
    setSidebarIsOpen(true);
  };
  const handleCloseSidebar = () => {
    setSidebarIsOpen(false);
  };

  return (
    <SidebarContainer>
      <AlignJustify onClick={() => handleOpenSidebar()} />

      <SidebarTitle>
        Top<SidebarTitleSpan>Movies</SidebarTitleSpan>
      </SidebarTitle>

      <SidebarContent visible={sidebarIsOpen ? true : false}>
        <ButtonList>
          <Link to="/">
            <LinkText active={pathname === "/" ? true : false}>
              Populares
            </LinkText>
          </Link>
          <Link to="/releases">
            <LinkText active={pathname === "/releases" ? true : false}>
              Lançamentos
            </LinkText>
          </Link>
          <Link to="/upcoming">
            <LinkText active={pathname === "/upcoming" ? true : false}>
              Em breve
            </LinkText>
          </Link>
          <Link to="/favorites">
            <LinkText active={pathname === "/favorites" ? true : false}>
              Favoritos
            </LinkText>
          </Link>
          <CloseSidebar>
            <X onClick={() => handleCloseSidebar()} />
          </CloseSidebar>
        </ButtonList>
      </SidebarContent>
    </SidebarContainer>
  );
}

export default Sidebar;
