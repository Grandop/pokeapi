import { useNavigate } from "react-router-dom";
import { RoutesPaths } from "../../../routes/RoutesPaths";

export const usePokemonCard = () => {
  const navigate = useNavigate();

  const navigateToDetailPokemon = (
    name: string,
    id: string,
    pokemonPhoto: string
  ) => {
    navigate(RoutesPaths.pokemonDetail(), {
      state: { name, id, pokemonPhoto }
    });
  };
  return { navigateToDetailPokemon };
};
