import { useDispatch } from "react-redux";

import {
  useGetPokemonsNamesQuery,
  useGetPokemonsTypesQuery
} from "../../../store/services/pokemon";
import { updateNamesData } from "../../../store/slices/search";

export const useSearchArea = () => {
  const dispatch = useDispatch();
  const { data } = useGetPokemonsTypesQuery();
  const { data: pokemons } = useGetPokemonsNamesQuery({
    limit: 100000,
    offset: 0
  });

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

  return {
    searchPokemonByName,
    pokemonTypes: data?.results.map((item) => item.name)
  };
};
