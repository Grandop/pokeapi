import { ChangeEventHandler } from 'react';
import * as S from './styles'
import { IoSearchOutline } from "react-icons/io5";

type TextFieldProps = {
  placeholder: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string | number | readonly string[] | undefined
}

export const TextField = ({ placeholder, onChange, value }: TextFieldProps) => {
  return (
    <S.Container>
      <IoSearchOutline />
      <S.NameTextField 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </S.Container>
  );
}