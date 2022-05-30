import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";

// import { createAction } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "@/utils/firebase/firebase.collection";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchCategoriesStart = createAction(
//   CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
// );

// export const fetchCategoriesSuccess = createAction<Category[]>(
//   CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS
// );

// export const fetchCategoriesFailed = createAction<Error>(
//   CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED
// );

export const fetchCategoriesAsync = createAsyncThunk(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES,
  async (_, { rejectWithValue }) => {
    try {
      return await getCategoriesAndDocuments();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
