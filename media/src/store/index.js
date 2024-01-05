import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
