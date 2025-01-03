import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import searchBarDetailsReducer from "./searchBarDetailsSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchBarDetails: searchBarDetailsReducer,
    auth: authReducer,
  },
});
