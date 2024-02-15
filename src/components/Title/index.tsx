import * as S from './styles'
import pokemonLogo from '../../assets/images/pokemonLogo.png'

export const Title = () => {
  return(
    <>      
      <S.Container>
        <S.Logo src={pokemonLogo} />
      </S.Container>
    </>
  );
}