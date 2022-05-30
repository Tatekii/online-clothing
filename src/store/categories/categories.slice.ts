import { CATEGORIES_STORE_STATE } from "./categories.types";

import { fetchCategoriesAsync } from "./categories.action";

import { createSlice } from "@reduxjs/toolkit";

export const categoriesInitialStat: CATEGORIES_STORE_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: categoriesInitialStat,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAsync.pending, (state, action) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
      return { ...state, categories: action.payload, isLoading: false };
    });
    builder.addCase(fetchCategoriesAsync.rejected, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: Error(action.error.message || action.error.name || "error"),
      };
    });
    // builder.addCase(
    //   fetchCategoriesAsync.rejected,
    //   (state, action) => {
    //     return { ...state, error: action.payload, isLoading: false };
    //   }
    // );
  },
});
