import { PokemonCard } from '../PokemonCard';
import * as S from './styles'
import { IconButton } from '../IconButton';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { usePokemonList } from './hooks/usePokemonList'

export const PokemonsList = () => {
  const { 
    advancePage, 
    backPage, 
    data, 
    filteredNames,
    firstPage,
    isLoading,
    lastPage,
    page,
    pokeIds,
    IsNotSearch
  } = usePokemonList();

  return(
    <>
      <S.Container>
        {page / 20 > firstPage ? (
          <IconButton iconColor='white' icon={IoChevronBack} onClick={() => backPage()} />
        ): null}
        <h2>Page: {page / 20 + 1}</h2>
        {page / 20 < lastPage  ? (
          <IconButton iconColor='white' icon={IoChevronForward} onClick={() => advancePage()} />
        ): null}
      </S.Container>

      <S.PokemonsContainer>
        {IsNotSearch || filteredNames.length === 1302 ? (
          data?.results.map((item, index) => (
            <PokemonCard key={index} isLoading={isLoading} id={pokeIds?.[index]} {...item} />
          ))
        ) : (
          filteredNames.map((name, index) => (
            <PokemonCard key={index} isLoading={isLoading} id={pokeIds?.[index]} name={name.name} />
          ))
        )}
      </S.PokemonsContainer>

      <S.Container>
        {page / 20 > firstPage ? (
          <IconButton iconColor='white' icon={IoChevronBack} onClick={() => backPage()} />
        ): null}
        <h2>Page: {page / 20 + 1}</h2>
        {page / 20 < lastPage  ? (
          <IconButton iconColor='white' icon={IoChevronForward} onClick={() => advancePage()} />
        ): null}
      </S.Container>
    </>
  );
}