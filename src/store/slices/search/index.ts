import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type PokemonObject = {
  name: string;
  id: string;
}[]

export type SearchState = {
  searchText: string;
  filteredNames: PokemonObject;
}

const initialState: SearchState = {
  searchText: '',
  filteredNames: [
    {
      name: '',
      id: ''
    }
  ],
}

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateNamesData: (state, action: PayloadAction<PokemonObject>) => {
      state.filteredNames = action.payload
    }
  }
})

export const {
  updateNamesData
} = SearchSlice.actions