import axios from "axios";
import { Food } from "../types/foodTypes";

export async function getFood() {
  const res = await axios.get(
    "https://67960d61bedc5d43a6c4254a.mockapi.io/api/v1/food"
  );
  return await res.data;
}

export async function addFood(data: Food) {
  const res = await axios.post(
    "https://67960d61bedc5d43a6c4254a.mockapi.io/api/v1/food",
    data
  );
  return await res.data;
}
