import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AdminApi } from "./adminApi";
import { UserApi } from "./userApi";

export const store = configureStore({
  reducer: {
    [AdminApi.reducerPath]: AdminApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(AdminApi.middleware)
      .concat(UserApi.middleware),
});

setupListeners(store.dispatch);
