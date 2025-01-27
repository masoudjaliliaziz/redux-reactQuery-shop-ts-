import { useAppSelector } from "../hook/reduxHook";
import { CartFood, Food } from "../types/foodTypes";

function Cart() {
  const cartFoods: CartFood[] = useAppSelector((state) => state.foods.cart);
  return (
    <div>
      {cartFoods.map((item) => (
        <div className="flex gap-3">
          <h1>{item.name}</h1>
          <h1>{item.quantity}</h1>
        </div>
      ))}
    </div>
  );
}

export default Cart;
