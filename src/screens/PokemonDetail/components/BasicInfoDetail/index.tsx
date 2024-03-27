import { Divider } from "../../../../components/Divider";
import { PokemonDetailResults } from "../../../../store/services/pokemon/types";
import * as S from "./styles";

type Props = {
  pokemonStats: PokemonDetailResults | undefined;
};

export const BasicInfoDetail = ({ pokemonStats }: Props) => {
  return (
    <S.BasicInfoContainer>
      <S.BasicInfo>
        <h3>
          {pokemonStats?.weight ? pokemonStats.weight / 10 + " kg" : "Unknown"}
        </h3>
        <p>Weight</p>
      </S.BasicInfo>
      <Divider />
      <S.BasicInfo>
        <h3>
          {pokemonStats?.height ? pokemonStats.height / 10 + " m" : "Unknown"}
        </h3>
        <p>Height</p>
      </S.BasicInfo>
    </S.BasicInfoContainer>
  );
};
