import { Food } from "./../../types/foodTypes";
import { PayloadAction } from "./../../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";

type FoodState = {
  foods: Food[];
};

const initialState: FoodState = {
  foods: [],
};

const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    setFood: (state, action: PayloadAction<Food[]>) => {
      state.foods = action.payload;
    },
  },
});

export const { setFood } = foodSlice.actions;
export default foodSlice.reducer;
