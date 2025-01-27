import { CartFood, Food } from "./../../types/foodTypes";
import { PayloadAction } from "./../../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";

type FoodState = {
  foods: Food[];
  cart: CartFood[];
};

const initialState: FoodState = {
  foods: [],
  cart: [],
};

const foodSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    setFood: (state, action: PayloadAction<Food[]>) => {
      state.foods = action.payload;
    },
    addFoodToCart: (state, action: PayloadAction<CartFood>) => {
      state.cart.push(action.payload);
    },
  },
});

export const { setFood, addFoodToCart } = foodSlice.actions;
export default foodSlice.reducer;
