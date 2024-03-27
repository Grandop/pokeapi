import { useLocation, useNavigate } from "react-router-dom";
import { RoutesPaths } from "../../../routes/RoutesPaths";
import { useGetPokemonDetailQuery } from "../../../store/services/pokemon";

type PokemonState = {
  id: string;
  name: string;
  pokemonPhoto: string;
};

export const usePokemonDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = location.state as PokemonState;
  const { data: pokemonStats } = useGetPokemonDetailQuery({ id: params.id });

  const navigateToHome = () => {
    navigate(RoutesPaths.home());
  };

  const Stats: Record<string, string> = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SP",
    "special-defense": "SD",
    speed: "SPD"
  };

  return { params, navigateToHome, pokemonStats, Stats };
};
