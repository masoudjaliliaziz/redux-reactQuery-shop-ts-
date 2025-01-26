import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getFood } from "../services/foodApi";
import FoodItem from "../feature/food/FoodItem";
import { Food } from "../types/foodTypes";
import AddFood from "./AddFood";
import { useFoods } from "../feature/food/hook/useFoods";

function Home() {
  const { data, isLoading } = useFoods();
  if (isLoading) return <h1>loading...</h1>;
  return (
    <div>
      {data?.map((food: Food) => (
        <FoodItem key={food.id} item={food} />
      ))}
      <AddFood />
    </div>
  );
}

export default Home;
