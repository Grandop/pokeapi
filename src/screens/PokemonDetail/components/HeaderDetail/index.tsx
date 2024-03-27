import { capitalizeFirstLetter } from "../../../../utils/capitalizeFirstLetter";
import * as S from "./styles";

type Props = {
  navigateToHome: () => void;
  id: string;
  name: string;
};

export const PokemonHeaderDetail = ({ navigateToHome, id, name }: Props) => {
  return (
    <S.Header>
      <S.HeaderButton>
        <S.ArrowBack size={40} onClick={() => navigateToHome()} />
      </S.HeaderButton>
      <S.HeaderButton>{capitalizeFirstLetter(name)}</S.HeaderButton>
      <S.HeaderButton>#{id}</S.HeaderButton>
    </S.Header>
  );
};
