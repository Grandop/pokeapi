import { useDispatch } from "react-redux";

import {
  useGetPokemonsNamesQuery,
  useGetPokemonsTypeDetailQuery,
  useGetPokemonsTypesQuery
} from "../../../store/services/pokemon";
import {
  updateNamesData,
  updateSearchType,
  updateTypedPokemon
} from "../../../store/slices/search";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/config";

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

  const searchPokemonByName = (text: string) => {
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
    const applyTypeFilter = () => {
      if (!filterType || typeName === undefined) return;

      dispatch(updateSearchType(typeName));

      const pokemonOfType =
        filterType.pokemon?.map((p) => ({
          name: p.pokemon.name,
          url: p.pokemon.url
        })) ?? [];

      const commonElements = filteredNames.filter((item) =>
        pokemonOfType.some((pokemon) => pokemon.name === item.name)
      );

      dispatch(updateTypedPokemon(commonElements));
    };

    const applyAllPokemonFilter = () => {
      if (typeName !== undefined) return;

      dispatch(updateSearchType(typeName));
      dispatch(updateTypedPokemon(filteredNames));
    };

    applyTypeFilter();
    applyAllPokemonFilter();
  }, [filterType, filteredNames, typeName]);

  return {
    searchPokemonByName,
    filterPokemonByType,
    pokemonTypes: data?.results.map((item) => item.name)
  };
};
