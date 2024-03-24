
import { PokemonService } from "../services/pokemon";
import { PaginateSlice } from "../slices/paginate";
import { SearchSlice } from "../slices/search";

export default {
  [PokemonService.reducerPath]: PokemonService.reducer,
  paginate: PaginateSlice.reducer,
  search: SearchSlice.reducer,
}