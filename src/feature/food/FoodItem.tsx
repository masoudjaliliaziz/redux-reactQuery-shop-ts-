import React from "react";
import { Food } from "../../types/foodTypes";

type Props = {
  item: Food;
};

function FoodItem({ item }: Props) {
  return (
    <div>
      <h1>{item.name}</h1>
    </div>
  );
}

export default FoodItem;
