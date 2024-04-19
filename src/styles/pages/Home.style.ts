import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeContent = styled.div`
  margin-top: 64px;
  padding: 0 10%;
  padding-bottom: 88px;

  /* @media screen and (min-width: 1025px) and (max-width: 1366px) {
    padding: 0 130px;
  } */
`;

export const HomeTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MoviesContainer = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 16px;
  row-gap: 16px;

  /* Media query para smartphones pequenos */
  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    align-items: center;
  }

  /* Media query para smartphones médios */
  @media screen and (min-width: 321px) and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    align-items: center;
  }

  /* Media query para smartphones grandes */
  @media screen and (min-width: 376px) and (max-width: 414px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    align-items: center;
  }

  /* Media query para tablets em modo retrato */
  @media screen and (min-width: 768px) and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Media query para tablets em modo paisagem */
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Media query para desktops pequenos */
  @media screen and (min-width: 1025px) and (max-width: 1366px) {
    grid-template-columns: repeat(4, 1fr);
  }

  /* Media query para desktops grandes */
  @media screen and (min-width: 1367px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
