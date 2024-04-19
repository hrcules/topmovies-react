import styled from "styled-components";
import { variables } from "../variables";

interface FavoriteButtonProps {
  favorited?: boolean; // Propriedade booleana opcional
}

export const Card = styled.div`
  width: 260px;
  height: 390px;
  border-radius: 10px;
  overflow: hidden;
  background-size: contain;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  /* Media query para smartphones pequenos */
  @media screen and (max-width: 320px) {
    background-color: red;
  }

  /* Media query para smartphones médios */
  @media screen and (min-width: 321px) and (max-width: 375px) {
    background-color: blue;
  }

  /* Media query para smartphones grandes */
  @media screen and (min-width: 376px) and (max-width: 414px) {
    background-color: yellow;
  }

  /* Media query para tablets em modo retrato */
  @media screen and (min-width: 768px) and (max-width: 768px) {
    background-color: coral;
    width: 200px;
    height: 300px;
  }

  /* Media query para tablets em modo paisagem */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    background-color: salmon;
    width: 200px;
    height: 300px;
  }

  /* Media query para desktops pequenos */
  @media screen and (min-width: 1025px) and (max-width: 1366px) {
    background-color: green;
    width: 240px;
    height: 360px;
  }

  /* Media query para desktops grandes */
  @media screen and (min-width: 1367px) {
    background-color: magenta;
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const CardText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${variables.colors.gray200};
  z-index: 1;
  flex: 1;
`;
export const CardTextAvarage = styled.div`
  font-size: 14px;
  font-weight: 600;
  width: 40px;
  height: 40px;
  background-color: rgba(23, 23, 26, 0.5);
  color: #2f723d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const FavoriteButton = styled.div<FavoriteButtonProps>`
  font-size: 14px;
  font-weight: 600;
  width: 40px;
  height: 40px;
  background-color: ${(props) =>
    props.favorited ? "#e07b67" : "rgba(23, 23, 26, 0.5)"};
  color: ${(props) =>
    props.favorited ? variables.colors.gray100 : variables.colors.gray200};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px; /* Altura do degradê */
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 25%, transparent);
  z-index: 0;
`;
