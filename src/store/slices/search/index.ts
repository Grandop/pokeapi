import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PokemonObject = {
  name: string;
  url: string;
}[];

export type SearchState = {
  searchText: string;
  filteredNames: PokemonObject;
  typedPokemons: PokemonObject;
  searchType: string | undefined;
};

const initialState: SearchState = {
  searchText: "",
  filteredNames: [],
  typedPokemons: [],
  searchType: ""
};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateNamesData: (state, action: PayloadAction<PokemonObject>) => {
      state.filteredNames = action.payload;
    },
    updateTypedPokemon: (state, action: PayloadAction<PokemonObject>) => {
      state.typedPokemons = action.payload;
    },
    updateSearchType: (state, action: PayloadAction<string | undefined>) => {
      state.searchType = action.payload;
    }
  }
});

export const { updateNamesData, updateTypedPokemon, updateSearchType } =
  SearchSlice.actions;
