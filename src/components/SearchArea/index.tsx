import { useEffect, useState } from 'react';
import { Select } from '../Select';
import { TextField } from '../TextField';
import * as S from './styles'
import { useGetPokemonsNamesQuery, useGetPokemonsTypesQuery } from '../../services/PokemonService';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { useDispatch,  } from 'react-redux';
import { updateNamesData } from '../../features/SearchSlice';

export const SearchArea = () => {
  const [ pokemonTypes, setPokemonTypes ] = useState<string[] | undefined>()
  const { data } = useGetPokemonsTypesQuery()
  const { data: namesData } = useGetPokemonsNamesQuery({limit: 100000, offset: 0 })
  const dispatch = useDispatch()

  useEffect(() => {
    const types = data?.results.map((data) => {
      return capitalizeFirstLetter(data.name)
    })
    setPokemonTypes(types)
  }, [data])

  const searchPokemonByName = (text: string) => {
    const names = namesData?.results.map(item => item.name)
    const filteredNames = names?.filter((item) => {
      return item.includes(text.toLowerCase())
    } )
    console.log({filteredNames})
    dispatch(updateNamesData(filteredNames || []));
  } 
  
  return(
    <>
      <S.InputArea>
        <TextField onChange={(e) => searchPokemonByName(e.target.value)} placeholder='Digite o nome do pokemon'/>
        <Select options={pokemonTypes || []} />
      </S.InputArea>
    </>
  );
}