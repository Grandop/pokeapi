import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};

export const PaginateSlice = createSlice({
  name: "paginate",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.value += 20;
    },
    previousPage: (state) => {
      state.value -= 20;
    },
    turnBackToInitialPage: (state) => {
      state.value = 0;
    }
  }
});

export const { nextPage, previousPage, turnBackToInitialPage } =
  PaginateSlice.actions;
