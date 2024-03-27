import * as S from "./styles";
import pokemonLogo from "../../assets/images/pokemonLogo.png";

export function Header() {
  return (
    <S.Container>
      <S.Logo src={pokemonLogo} alt="pokemon logo" />
    </S.Container>
  );
}
