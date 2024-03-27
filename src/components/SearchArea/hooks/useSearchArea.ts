import { useDispatch } from "react-redux";

import {
  useGetPokemonsNamesQuery,
  useGetPokemonsTypeDetailQuery,
  useGetPokemonsTypesQuery
} from "../../../store/services/pokemon";
import {
  updateNamesData,
  updateSearchText,
  updateSearchType,
  updateTypedPokemon
} from "../../../store/slices/search";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/config";
import { turnBackToInitialPage } from "../../../store/slices/paginate";

const ALL_POKEMONS = 100000;

export const useSearchArea = () => {
  const [typeName, setTypeName] = useState<string>();
  const { data: filterType } = useGetPokemonsTypeDetailQuery({
    typeName
  });
  const dispatch = useDispatch();
  const { data } = useGetPokemonsTypesQuery();
  const { data: pokemons } = useGetPokemonsNamesQuery({
    limit: ALL_POKEMONS,
    offset: 0
  });
  const filteredNames = useSelector(
    (state: RootState) => state.search.filteredNames
  );

  const searchText = useSelector((state: RootState) => state.search.searchText);

  const searchPokemonByName = (text: string) => {
    dispatch(updateSearchText(text.toLowerCase()));
    dispatch(turnBackToInitialPage());
    const filteredNames = pokemons?.results
      .filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
      .map((item) => {
        return {
          name: item.name,
          url: item.url
        };
      });
    dispatch(updateNamesData(filteredNames || []));
  };

  const filterPokemonByType = (label: string | undefined) => {
    setTypeName(label?.toLowerCase());
  };

  useEffect(() => {
    if (filterType && typeName !== undefined) {
      dispatch(updateSearchType(typeName));
      if (
        filteredNames.length >= 1 &&
        filterType?.pokemon?.length >= 1 &&
        filteredNames.length !== 1302
      ) {
        const commonElements = filteredNames?.filter((item) =>
          filterType?.pokemon.some(
            (pokemon) => pokemon.pokemon.name === item.name
          )
        );
        dispatch(updateTypedPokemon(commonElements));
      } else {
        const typeSearched = filterType?.pokemon?.map((p) => {
          return {
            name: p.pokemon.name,
            url: p.pokemon.url
          };
        });
        dispatch(updateTypedPokemon(typeSearched));
      }
    } else if (typeName === undefined) {
      dispatch(updateSearchType(typeName));
      dispatch(updateTypedPokemon(filteredNames));
    }
  }, [filterType, filteredNames, typeName]);

  return {
    searchPokemonByName,
    filterPokemonByType,
    pokemonTypes: data?.results.map((item) => item.name),
    searchText
  };
};
