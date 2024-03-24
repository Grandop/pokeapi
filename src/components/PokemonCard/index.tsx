import * as S from "./styles";
import Loader from "../Loader";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

type PokemonCardProps = {
  name: string;
  id: string;
  isLoading: boolean;
};

export const PokemonCard = ({ name, isLoading, id }: PokemonCardProps) => {
  const pokemonUrlImage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const pokemonPhoto = `${pokemonUrlImage}${id}.png`;

  return (
    <S.Container>
      {!isLoading ? <S.PokemonImage src={pokemonPhoto} /> : <Loader />}
      <S.PokemonInfo>
        <S.PokemoName>{capitalizeFirstLetter(name)}</S.PokemoName>
      </S.PokemonInfo>
    </S.Container>
  );
};
