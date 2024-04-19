import styled from "styled-components";
import { variables } from "../variables";

interface LinkTextProps {
  active?: boolean; // Propriedade booleana opcional
}

interface SidebarProps {
  visible?: boolean;
}

export const SidebarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 32px;
  border-bottom: 1px solid ${variables.colors.gray400};
  background-color: ${variables.colors.gray600};
  position: fixed;
  top: 0;
  z-index: 100;
`;

export const SidebarTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const SidebarTitleSpan = styled.span`
  color: #e07b67;
`;

export const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
`;

export const LinkText = styled.p<LinkTextProps>`
  border-bottom: 1px solid #e07b67;
  border: ${(props) => (props.active ? "auto" : "none")};
`;

export const ButtonLogin = styled.button`
  background-color: #e07b67;
  color: ${variables.colors.gray100};
  padding: 0px 16px;
  border-radius: 6px;
`;

export const SidebarContent = styled.div<SidebarProps>`
  width: 50%;
  height: 100vh;
  display: flex;
  padding-top: 64px;
  /* align-items: center; */
  justify-content: center;
  display: ${(props) => (props.visible ? "auto" : "none")};
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${variables.colors.gray500};
`;

export const CloseSidebar = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
