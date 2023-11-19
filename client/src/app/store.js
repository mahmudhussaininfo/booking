import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

//configure redux store
const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

//export
export default Store;
