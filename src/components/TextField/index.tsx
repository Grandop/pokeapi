import * as S from './styles'
import { IoSearchOutline } from "react-icons/io5";

type TextFieldProps = {
  placeholder: string
}

export const TextField = ({ placeholder }: TextFieldProps) => {
  return (
    <S.Container>
      <IoSearchOutline />
      <S.NameTextField 
        placeholder={placeholder}
      />
    </S.Container>
  );
}