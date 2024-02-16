import * as S from './styles';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import Loader from '../../Loader';

type PokemonCardProps = {
  id: string | undefined;
  name: string;
  isLoading: boolean;
}

export const PokemonCard = ({ id, name, isLoading }: PokemonCardProps) => {
  const pokemonUrlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  const pokemonPhoto = `${pokemonUrlImage}${id}.png`

  return(
    <S.Container>
      {!isLoading ? (
        <S.PokemonImage src={pokemonPhoto} />
      ) : (
        <Loader/>
      )}
      <S.PokemonInfo>
        <S.PokemoName>{capitalizeFirstLetter(name)}</S.PokemoName>
      </S.PokemonInfo>
    </S.Container>
  );
}