import { styled } from "styled-components";
import { PokemonType, typeColors } from "../../types";

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const typeName = styled.h4<{ type: string }>`
  background-color: ${({ type }) => typeColors[type as PokemonType]};
  padding: 10px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: large;
`;
