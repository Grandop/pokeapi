import { Select } from '../Select';
import { TextField } from '../TextField';
import * as S from './styles'

export const SearchArea = () => {
  return(
    <>
      <S.InputArea>
        <TextField placeholder='Digite o nome do pokemon'/>
        <Select />
      </S.InputArea>
    </>
  );
}