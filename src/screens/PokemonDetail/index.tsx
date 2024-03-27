import { Divider } from "../../components/Divider";
import { BaseStatsDetail } from "./components/BaseStatsDetail";
import { BasicInfoDetail } from "./components/BasicInfoDetail";
import { PokemonHeaderDetail } from "./components/HeaderDetail";
import { TypeDetail } from "./components/TypeDetail";
import { usePokemonDetail } from "./hooks/usePokemonDetail";
import * as S from "./styles";

export const PokemonDetail = () => {
  const { params, navigateToHome, pokemonStats, Stats } = usePokemonDetail();

  return (
    <S.Container type={pokemonStats ? pokemonStats?.types[0].type.name : ""}>
      <S.NavigationContainer>
        <PokemonHeaderDetail
          id={params.id}
          name={params.name}
          navigateToHome={navigateToHome}
        />
        <S.PokemonImage src={params.pokemonPhoto} alt="pokemon photo" />
      </S.NavigationContainer>

      <S.StatsContainer>
        <S.Stats>
          <TypeDetail pokemonStats={pokemonStats} />
          <BasicInfoDetail pokemonStats={pokemonStats} />
          <BaseStatsDetail pokemonStats={pokemonStats} Stats={Stats} />
        </S.Stats>
      </S.StatsContainer>
    </S.Container>
  );
};
