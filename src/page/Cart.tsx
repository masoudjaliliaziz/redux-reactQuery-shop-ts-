import { useAppSelector } from "../hook/reduxHook";
import { Food } from "../types/foodTypes";

function Cart() {
  const foods: Food[] = useAppSelector((state) => state.foods.foods);
  return (
    <div>
      {foods.map((food) => (
        <h1>{food.name}</h1>
      ))}
    </div>
  );
}

export default Cart;
