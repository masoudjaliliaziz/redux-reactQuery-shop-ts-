import { useAppSelector } from "../hook/reduxHook";
import { Food } from "../types/foodTypes";

function Cart() {
  const cartFoods: Food[] = useAppSelector((state) => state.foods.cart);
  return (
    <div>
      {cartFoods.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </div>
  );
}

export default Cart;
