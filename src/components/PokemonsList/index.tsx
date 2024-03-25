import { PokemonCard } from "../PokemonCard";
import * as S from "./styles";
import { IconButton } from "../IconButton";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { usePokemonList } from "./hooks/usePokemonList";
import { getIdFromUrl } from "../../utils/getIdFromUrl";

export const PokemonsList = () => {
  const {
    advancePage,
    backPage,
    data,
    filteredNames,
    FIRST_PAGE,
    LAST_PAGE,
    isLoading,
    page,
    thereAreFilteredNames,
    currentPage,
    typedPokemons
  } = usePokemonList();

  return (
    <>
      <S.Container>
        {page / 20 > FIRST_PAGE ? (
          <IconButton
            iconColor="white"
            icon={IoChevronBack}
            onClick={() => backPage()}
          />
        ) : null}
        <h2>Page: {page / 20 + 1}</h2>
        {page / 20 < LAST_PAGE ? (
          <IconButton
            iconColor="white"
            icon={IoChevronForward}
            onClick={() => advancePage()}
          />
        ) : null}
      </S.Container>

      <S.PokemonsContainer>
        {(typedPokemons.length > 0 &&
          typedPokemons
            .slice(currentPage * 20, 20 * (currentPage + 1))
            .map((option, index) => (
              <PokemonCard
                key={index}
                isLoading={isLoading}
                id={getIdFromUrl(option.url)}
                name={option.name}
              />
            ))) ||
          (thereAreFilteredNames &&
            typedPokemons.length < 1 &&
            filteredNames
              .slice(currentPage * 20, 20 * (currentPage + 1))
              .map((option, index) => (
                <PokemonCard
                  key={index}
                  isLoading={isLoading}
                  id={getIdFromUrl(option.url)}
                  name={option.name}
                />
              ))) ||
          (!thereAreFilteredNames &&
            data &&
            data.results.map((option, index) => (
              <PokemonCard
                key={index}
                isLoading={isLoading}
                id={getIdFromUrl(option.url)}
                name={option.name}
              />
            )))}
      </S.PokemonsContainer>
    </>
  );
};
