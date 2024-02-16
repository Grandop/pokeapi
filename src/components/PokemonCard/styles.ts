import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 auto;
  position: relative;
  border-radius: 10px;
  border: 1px solid;

  &:hover {
    box-shadow: 0 2px 10px ${({ theme }) => theme.colors.blue};
  }
`;

export const PokemonImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const PokemonInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-top: 1px solid #ddd;
`;

export const PokemoName = styled.h2`
  font-size: 25px;
  font-weight: 400;
  display: block;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.neutral[0]};
`;