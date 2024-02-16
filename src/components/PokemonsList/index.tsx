// import { useState } from 'react';
import { PokemonCard } from '../PokemonCard';
import * as S from './styles'
import { useGetPokemonsNamesQuery } from '../../services/PokemonService';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { nextPage, previousPage } from "../../services/PokemonService/PaginateSlice"
import { IconButton } from '../IconButton';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";


export const PokemonsList = () => {
  const page = useSelector((state: RootState) => state.paginate.value)
  const dispatch = useDispatch()
  const { data, isLoading } = useGetPokemonsNamesQuery(page)
  const [ pokeIds, setPokeIds ] = useState<string[]>()

  const getId = (urls: string[] | []) => {
    return urls.map((url) => url.split("/")[6])
  }

  useEffect(() => {
    const urls = data?.results.map(item => item.url) || []
    setPokeIds(getId(urls))
  }, [data])

  const backPage =  () => {
    const firstPage = 0;
    if(page > firstPage) {
      dispatch(previousPage())
    }
  }

  const advancePage =  () => {
    const lastPage = 1296
    if(page < lastPage) {
      dispatch(nextPage())
    }
  }

  return(
    <>
      <S.Container>
        <IconButton iconColor='white' icon={IoChevronBack} onClick={() => backPage()} />
        <S.PageCount>Page: {page / 8 + 1}</S.PageCount>
        <IconButton iconColor='white' icon={IoChevronForward} onClick={() => advancePage()} />
      </S.Container>
      <S.PokemonsContainer>
        {data?.results.map((item, index) => (
          <PokemonCard isLoading={isLoading} id={pokeIds?.[index]} {...item} />
          ))}
      </S.PokemonsContainer>
      <S.Container $lastPaginate>
        <IconButton iconColor='white' icon={IoChevronBack} onClick={() => backPage()} />
        <S.PageCount>Page: {page / 8 + 1}</S.PageCount>
        <IconButton iconColor='white' icon={IoChevronForward} onClick={() => advancePage()} />
      </S.Container>
    </>
  );
}