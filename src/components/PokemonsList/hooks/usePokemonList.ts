import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../../store/config";
import { useGetPokemonsNamesQuery } from "../../../store/services/pokemon";
import { getIdFromUrl } from "../../../utils/getIdFromUrl";
import { previousPage, nextPage } from "../../../store/slices/paginate";

export const usePokemonList = () => {
  const dispatch = useDispatch();
  const [pokeIds, setPokeIds] = useState<string[]>();
  const page = useSelector((state: RootState) => state.paginate.value);
  const { data, isLoading } = useGetPokemonsNamesQuery({
    limit: 20,
    offset: page
  });
  const filteredNames = useSelector(
    (state: RootState) => state.search.filteredNames
  );
  const IsNotSearch =
    filteredNames.filter((item) => item.id === "" && item.name === "").length >
      0 || filteredNames.length === 1302;
  const firstPage = 0;
  const lastPage = 162;

  useEffect(() => {
    if (IsNotSearch) {
      const urls = data?.results.map((item) => item.url) || [];
      setPokeIds(getIdFromUrl(urls));
    } else {
      const id = filteredNames?.map((item) => item.id) || [];
      setPokeIds(id);
    }
  }, [data, filteredNames, IsNotSearch]);

  const backPage = () => {
    dispatch(previousPage());
  };

  const advancePage = () => {
    dispatch(nextPage());
  };

  return {
    backPage,
    advancePage,
    data,
    filteredNames,
    page,
    firstPage,
    lastPage,
    pokeIds,
    isLoading,
    IsNotSearch
  };
};
