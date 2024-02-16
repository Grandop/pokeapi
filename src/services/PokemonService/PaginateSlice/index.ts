import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const PaginateSlice = createSlice({
  name: 'paginate',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.value += 8
    },
    previousPage: (state) => {
      state.value -= 8
    }
  }
})

export const {
  nextPage,
  previousPage
} = PaginateSlice.actions