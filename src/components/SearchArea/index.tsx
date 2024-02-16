import { useEffect, useState } from 'react';
import { Select } from '../Select';
import { TextField } from '../TextField';
import * as S from './styles'
import { useGetPokemonsTypesQuery } from '../../services/PokemonService';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

export const SearchArea = () => {
  const [ pokeTypes, setPokeTypes ] = useState<string[] | undefined>()
  const { data } = useGetPokemonsTypesQuery()

  useEffect(() => {
    const types = data?.results.map((data) => {
      return capitalizeFirstLetter(data.name)
    })
    setPokeTypes(types)
  }, [data])
  
  return(
    <>
      <S.InputArea>
        <TextField placeholder='Digite o nome do pokemon'/>
        <Select options={pokeTypes || []} />
      </S.InputArea>
    </>
  );
}