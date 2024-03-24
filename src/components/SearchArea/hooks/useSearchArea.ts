import { useEffect, useState } from "react";
import {
  useGetPokemonsNamesQuery,
  useGetPokemonsTypesQuery
} from "../../../store/services/pokemon";
import { useDispatch } from "react-redux";
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";
import { updateNamesData } from "../../../store/slices/search";

export const useSearchArea = () => {
  const [pokemonTypes, setPokemonTypes] = useState<string[] | undefined>();
  const { data } = useGetPokemonsTypesQuery();
  const { data: namesData } = useGetPokemonsNamesQuery({
    limit: 100000,
    offset: 0
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const types = data?.results.map((data) => {
      return capitalizeFirstLetter(data.name);
    });
    setPokemonTypes(types);
  }, [data]);

  const searchPokemonByName = (text: string) => {
    const filteredNames = namesData?.results
      .filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
      .map((item) => {
        return {
          name: item.name,
          id: item.url.split("/")[6]
        };
      });
    dispatch(updateNamesData(filteredNames || []));
  };

  return {
    searchPokemonByName,
    pokemonTypes
  };
};
