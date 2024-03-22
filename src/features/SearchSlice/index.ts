import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export type SearchState = {
  searchText: string;
  filteredNames: string[];
}

const initialState: SearchState = {
  searchText: '',
  filteredNames: [],
}

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateNamesData: (state, action: PayloadAction<string[]>) => {
      state.filteredNames = action.payload
    }
  }
})

export const {
  updateNamesData
} = SearchSlice.actions