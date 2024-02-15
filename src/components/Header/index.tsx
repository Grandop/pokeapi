import * as S from './styles';
import headerPokeball from '../../assets/images/pokemonHeader.png';

export function Header() {

  return (
    <S.Container>
      <S.Logo src={headerPokeball} />
    </S.Container>
  )
}
