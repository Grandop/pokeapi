
import { PokemonService } from "../services/pokemon";

// Not found type or getDefaultMiddleware 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (getDefaultMiddleware: any)  =>
getDefaultMiddleware().concat(PokemonService.middleware)
