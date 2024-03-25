import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/config";
import { useGetPokemonsNamesQuery } from "../../../store/services/pokemon";
import { previousPage, nextPage } from "../../../store/slices/paginate";

export const usePokemonList = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.paginate.value); // remover ele do redux
  const { data, isLoading } = useGetPokemonsNamesQuery({
    limit: 20,
    offset: page
  });
  const filteredNames = useSelector(
    (state: RootState) => state.search.filteredNames
  );
  const typedPokemons = useSelector(
    (state: RootState) => state.search.typedPokemons
  );
  const FIRST_PAGE = 0;
  const LAST_PAGE = 65;
  const currentPage = page / 20;
  const thereAreFilteredNames =
    filteredNames.length >= 1 && filteredNames.length < 1302;

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
    FIRST_PAGE,
    LAST_PAGE,
    thereAreFilteredNames,
    isLoading,
    currentPage,
    typedPokemons
  };
};
