import FoodItem from "../feature/food/FoodItem";
import { Food } from "../types/foodTypes";
import AddFood from "./AddFood";
import { useFoods } from "../feature/food/hook/useFoods";
import { useState } from "react";

function Home() {
  const [showForm, setShowForm] = useState(false);
  const { data, isLoading } = useFoods();

  if (isLoading) return <h1>loading...</h1>;
  return (
    <div className="flex flex-wrap w-1/2 justify-between items-center  gap-3 p-6 mx-auto ">
      {data?.map((food: Food) => (
        <FoodItem key={food.id} item={food} />
      ))}
      <button
        onClick={() => setShowForm((show) => !show)}
        className="bg-sky-500 p-1.5 rounded-md font-bold cursor-pointer hover:bg-sky-600 hover:text-white"
      >
        add new food
      </button>

      {showForm && <AddFood />}
    </div>
  );
}

export default Home;
