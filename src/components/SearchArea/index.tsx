import { Select } from "../Select";
import { TextField } from "../TextField";
import * as S from "./styles";
import { useSearchArea } from "./hooks/useSearchArea";

export const SearchArea = () => {
  const { searchPokemonByName, pokemonTypes, filterPokemonByType } =
    useSearchArea();

  return (
    <>
      <S.InputArea>
        <TextField
          onChange={(e) => searchPokemonByName(e.target.value)}
          placeholder="Digite o nome do pokemon"
        />
        <Select
          options={pokemonTypes || []}
          onChange={(e) => filterPokemonByType(e?.label)}
        />
      </S.InputArea>
    </>
  );
};
