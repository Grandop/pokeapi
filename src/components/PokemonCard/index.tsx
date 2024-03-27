import * as S from "./styles";
import Loader from "../Loader";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { useNavigate } from "react-router-dom";
import { RoutesPaths } from "../../routes/RoutesPaths";

type PokemonCardProps = {
  name: string;
  id: string;
  isLoading: boolean;
};

export const PokemonCard = ({ name, isLoading, id }: PokemonCardProps) => {
  const navigate = useNavigate();
  const pokemonUrlImage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const pokemonPhoto = `${pokemonUrlImage}${id}.png`;

  const navigateToDetailPokemon = (
    name: string,
    id: string,
    pokemonPhoto: string
  ) => {
    navigate(RoutesPaths.pokemonDetail(), {
      state: { name, id, pokemonPhoto }
    });
  };

  return (
    <S.Container
      key={id}
      onClick={() => navigateToDetailPokemon(name, id, pokemonPhoto)}
    >
      {!isLoading ? <S.PokemonImage src={pokemonPhoto} /> : <Loader />}
      <S.PokemonInfo>
        <S.PokemoName>{capitalizeFirstLetter(name)}</S.PokemoName>
      </S.PokemonInfo>
    </S.Container>
  );
};
