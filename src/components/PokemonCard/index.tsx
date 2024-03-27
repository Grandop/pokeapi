import * as S from "./styles";
import Loader from "../Loader";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { usePokemonCard } from "./hooks/usePokemonCard";

type PokemonCardProps = {
  name: string;
  id: string;
  isLoading: boolean;
};

export const PokemonCard = ({ name, isLoading, id }: PokemonCardProps) => {
  const pokemonUrlImage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const pokemonPhoto = `${pokemonUrlImage}${id}.png`;
  const { navigateToDetailPokemon } = usePokemonCard();

  return (
    <S.Container
      data-testid="pokemon-card"
      key={id}
      onClick={() => navigateToDetailPokemon(name, id, pokemonPhoto)}
    >
      {!isLoading ? (
        <S.PokemonImage src={pokemonPhoto} alt="pokemon photo" />
      ) : (
        <Loader data-testid="loader" />
      )}
      <S.PokemonInfo>
        <S.PokemoName>{capitalizeFirstLetter(name)}</S.PokemoName>
      </S.PokemonInfo>
    </S.Container>
  );
};
