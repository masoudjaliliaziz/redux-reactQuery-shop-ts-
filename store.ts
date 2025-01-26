import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./src/feature/food/foodSlice";
const store = configureStore({
  reducer: {
    foods: foodReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
