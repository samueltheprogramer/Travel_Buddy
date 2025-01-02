import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import searchBarDetailsReducer from "./searchBarDetailsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchBarDetails: searchBarDetailsReducer,
  },
});
