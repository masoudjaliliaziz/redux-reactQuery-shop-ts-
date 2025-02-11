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
      const existingFoodIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingFoodIndex !== -1) {
        state.cart[existingFoodIndex].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteFoodFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setFood, addFoodToCart, deleteFoodFromCart } = foodSlice.actions;
export default foodSlice.reducer;
