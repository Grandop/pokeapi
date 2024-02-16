import { styled, css } from "styled-components";

export const Container = styled.div<{$lastPaginate?: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 20px;

  ${(props) => props.$lastPaginate && css`
  display: none; 

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  `}
`;

export const PokemonsContainer = styled.div`
  padding: 0 20px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1100px;
  margin-inline: auto;
  position: relative;
`;

export const PageCount = styled.h2``;