import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesPaths } from "./RoutesPaths";
import { Home } from "../screens/Home";
import { PokemonDetail } from "../screens/PokemonDetail";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesPaths.home()} element={<Home />} />
        <Route path={RoutesPaths.pokemonDetail()} element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
