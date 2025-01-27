import { HiX } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../hook/reduxHook";
import { CartFood, Food } from "../types/foodTypes";
import { deleteFoodFromCart } from "../feature/food/foodSlice";

function Cart() {
  const cartFoods: CartFood[] = useAppSelector((state) => state.foods.cart);
  const dispatch = useAppDispatch();
  function handleDeleteItem(id: string) {
    dispatch(deleteFoodFromCart(id));
  }
  return (
    <div>
      {cartFoods.map((item) => (
        <div className="flex gap-3">
          <h1>{item.name}</h1>
          <h1>{item.quantity}</h1>
          <HiX
            onClick={() => handleDeleteItem(item.id)}
            className="text-red-600 hover:bg-red-600 hover:text-white p-0.5 cursor-pointer rounded-sm"
          />
        </div>
      ))}
    </div>
  );
}

export default Cart;
