import { createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";

const bookSlice = createSlice({
  name: "book",
  initialState: { data: [] },
  reducers: {
    setBooks(state, action) {
      state.data = action.payload;
    },
    // setSearch(state, action) {
    //   state.data = action.payload;
    // },
  },
});

export const { setBooks, setSearch } = bookSlice.actions;
export default bookSlice.reducer;

// Thunks
export function fetchBooks() {
  return async function fetchBooksThunk(dispatch, getState) {
    try {
      const response = await api.get("/book");
      console.log(response.data);
      dispatch(setBooks(response.data));
    } catch (err) {
      console.log(err);
    }
  };
}

export function searchBooks(searchText) {
  return async function fetchBooksThunk(dispatch, getState) {
    try {
      const response = await api.get(`/book/search?q=${searchText}`);
      dispatch(setBooks(response.data));
    } catch (err) {
      console.log(err);
    }
  };
}
