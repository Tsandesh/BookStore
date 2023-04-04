import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;
