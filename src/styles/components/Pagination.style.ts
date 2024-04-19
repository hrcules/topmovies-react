import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 4px;
  margin-top: 24px;
`;

export const PaginationItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #261a17;
  cursor: pointer;
`;

export const PaginationIcon = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
