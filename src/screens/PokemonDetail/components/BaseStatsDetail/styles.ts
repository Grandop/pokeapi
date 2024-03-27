import { styled } from "styled-components";
import { PokemonType, typeColors } from "../../types";

export const BaseStatContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  width: 20%;
`;

export const BaseStateNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const BaseStateValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
`;

export const BaseStateValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

export const PokemonPointsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const StatLabel = styled.p`
  width: 20px;
`;

export const ProgressBar = styled.progress<{ type: string }>`
  width: 100%;
  height: 6px;
  margin-block: 3px;
  display: flex;
  flex: 1;
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-progress-value {
    background-color: ${({ type }) => typeColors[type as PokemonType]};
  }

  &::-moz-progress-bar {
    background-color: ${({ type }) => typeColors[type as PokemonType]};
  }
`;
