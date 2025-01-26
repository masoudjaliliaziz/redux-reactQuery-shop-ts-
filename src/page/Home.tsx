import FoodItem from "../feature/food/FoodItem";
import { Food } from "../types/foodTypes";
import AddFood from "./AddFood";
import { useFoods } from "../feature/food/hook/useFoods";
import { useDeleteFood } from "../feature/food/hook/useDeleteFood";

function Home() {
  const { data, isLoading } = useFoods();

  if (isLoading) return <h1>loading...</h1>;
  return (
    <div className="flex flex-wrap w-1/2 justify-between items-center  gap-3 p-6 mx-auto ">
      {data?.map((food: Food) => (
        <FoodItem key={food.id} item={food} />
      ))}

      <AddFood />
    </div>
  );
}

export default Home;
