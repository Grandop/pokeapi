// import { useState } from 'react';
import { PokemonCard } from '../PokemonCard';
import * as S from './styles'
import { useGetPokemonsNamesQuery } from '../../services/PokemonService';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { nextPage, previousPage } from "../../features/PaginateSlice"
import { IconButton } from '../IconButton';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";


export const PokemonsList = () => {
  const page = useSelector((state: RootState) => state.paginate.value)
  const { data, isLoading } = useGetPokemonsNamesQuery({ limit: 8, offset: page })
  const filteredNames = useSelector((state: RootState) => state.search.filteredNames);
  const dispatch = useDispatch()
  const [ pokeIds, setPokeIds ] = useState<string[]>()
  const firstPage = 0
  const lastPage = 162

  console.log({filteredNames})
  if(filteredNames.length === 0 ) {
    console.log('nao tem nada sendo pesquisado')
  } else {
    console.log('sendo pesquisado')
  }

  const getId = (urls: string[] | []) => {
    return urls.map((url) => url.split("/")[6])
  }

  useEffect(() => {
    const urls = data?.results.map(item => item.url) || []
    setPokeIds(getId(urls))
  }, [data])

  const backPage =  () => {
    dispatch(previousPage())
  }

  const advancePage =  () => {
    dispatch(nextPage())
  }

  return(
    <>
      <S.Container>
        {page / 8 > firstPage ? (
          <IconButton iconColor='white' icon={IoChevronBack} onClick={() => backPage()} />
        ): null}
        <S.PageCount>Page: {page / 8 + 1}</S.PageCount>
        {page / 8 < lastPage  ? (
          <IconButton iconColor='white' icon={IoChevronForward} onClick={() => advancePage()} />
        ): null}
      </S.Container>

      <S.PokemonsContainer>
        {filteredNames.length === 0 || filteredNames.length === 1302 ? (
          data?.results.map((item, index) => (
            <PokemonCard key={index} isLoading={isLoading} id={pokeIds?.[index]} {...item} />
          ))
        ) : (
          filteredNames.map((name, index) => (
            <PokemonCard key={index} isLoading={isLoading} id={pokeIds?.[index]} name={name} />
          ))
        )}
      </S.PokemonsContainer>

      <S.Container $lastPaginate>
        {page / 8 > firstPage ? (
          <IconButton iconColor='white' icon={IoChevronBack} onClick={() => backPage()} />
        ): null}
        <S.PageCount>Page: {page / 8 + 1}</S.PageCount>
        {page / 8 < lastPage  ? (
          <IconButton iconColor='white' icon={IoChevronForward} onClick={() => advancePage()} />
        ): null}
      </S.Container>
    </>
  );
}