import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  padding: 10px;
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: 0 2px 10px ${({ theme }) => theme.colors.neutral[400]};
  }
`;

export const PokemonImage = styled.img`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[700]};
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 20px;
`;

export const PokemoName = styled.h2`
  font-size: 25px;
  font-weight: 400;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => theme.colors.neutral[0]};
`;

export const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 100%;
`;

export const TypeNameContainer = styled.div`
  background-color: lightsalmon;
  padding: 8px;
  border-radius: 20px;
  width: 100%;
`;

export const TypeName = styled.h5`
  display: flex;
  color: #000;
  justify-content: center;
`;
