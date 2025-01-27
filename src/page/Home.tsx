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
    <div className="flex flex-col flex-wrap w-full justify-between items-center   gap-3 p-6 mx-auto ">
      <div className="w-2/3  flex flex-row flex-wrap justify-center gap-3 p-3">
        {data?.map((food: Food) => (
          <FoodItem key={food.id} item={food} />
        ))}
      </div>
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
