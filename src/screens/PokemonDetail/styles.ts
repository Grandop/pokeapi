import styled from "styled-components";
import { PokemonType, typeColors } from "./types";

export const Container = styled.div<{ type: string }>`
  background-color: ${({ type }) => typeColors[type as PokemonType]};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const NavigationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PokemonImage = styled.img`
  margin-top: 20rem;
  transform: scale(3);
`;

export const StatsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral[700]};
  border-radius: 10px;
  width: 100%;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  border-radius: 10px;
  height: 100%;
  margin-top: 5rem;
`;
