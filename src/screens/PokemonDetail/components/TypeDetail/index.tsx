import { PokemonDetailResults } from "../../../../store/services/pokemon/types";
import { capitalizeFirstLetter } from "../../../../utils/capitalizeFirstLetter";
import * as S from "./styles";

type Props = {
  pokemonStats: PokemonDetailResults | undefined;
};

export const TypeDetail = ({ pokemonStats }: Props) => {
  return (
    <S.TypeContainer>
      {pokemonStats?.types.map((type, index) => (
        <S.typeName key={index} type={type.type.name.toLowerCase()}>
          {capitalizeFirstLetter(type.type.name)}
        </S.typeName>
      ))}
    </S.TypeContainer>
  );
};
