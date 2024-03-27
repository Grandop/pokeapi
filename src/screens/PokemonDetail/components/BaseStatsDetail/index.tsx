import { Divider } from "../../../../components/Divider";
import { PokemonDetailResults } from "../../../../store/services/pokemon/types";
import * as S from "./styles";

type Props = {
  Stats: Record<string, string>;
  pokemonStats: PokemonDetailResults | undefined;
};

export const BaseStatsDetail = ({ Stats, pokemonStats }: Props) => {
  return (
    <S.BaseStatContainer>
      <S.BaseStateNameContainer>
        {pokemonStats?.stats.map((stat) => (
          <>
            <p>{Stats[stat.stat.name]}</p>
          </>
        ))}
      </S.BaseStateNameContainer>
      <Divider />

      <S.BaseStateValueContainer>
        <S.BaseStateValue>
          {pokemonStats?.stats.map((stat) => (
            <S.PokemonPointsContainer>
              <S.StatLabel>{stat.base_stat}</S.StatLabel>
              <S.ProgressBar
                type={pokemonStats ? pokemonStats?.types[0].type.name : ""}
                value={stat.base_stat}
                max="255"
              />
            </S.PokemonPointsContainer>
          ))}
        </S.BaseStateValue>
      </S.BaseStateValueContainer>
    </S.BaseStatContainer>
  );
};
