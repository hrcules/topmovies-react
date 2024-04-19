import styled from "styled-components";
import { variables } from "../variables";

interface LinkTextProps {
  active?: boolean; // Propriedade booleana opcional
}

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 32px 64px;
  border-bottom: 1px solid ${variables.colors.gray400};
  background-color: ${variables.colors.gray600};
  position: fixed;
  top: 0;
  z-index: 100;
`;

export const HeaderTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const HeaderTitleSpan = styled.span`
  color: #e07b67;
`;

export const ButtonList = styled.div`
  display: flex;
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
