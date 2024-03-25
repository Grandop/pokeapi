import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PokemonObject = {
  name: string;
  url: string;
}[];

export type SearchState = {
  searchText: string;
  filteredNames: PokemonObject;
  typedPokemons: PokemonObject;
};

const initialState: SearchState = {
  searchText: "",
  filteredNames: [],
  typedPokemons: []
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
    }
  }
});

export const { updateNamesData, updateTypedPokemon } = SearchSlice.actions;
