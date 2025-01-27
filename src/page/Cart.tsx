import CartFoodItem from "../feature/cart/CartFoodItem";
import { useAppSelector } from "../hook/reduxHook";
import { CartFood } from "../types/foodTypes";

function Cart() {
  const cartFoods: CartFood[] = useAppSelector((state) => state.foods.cart);

  return (
    <div className="flex flex-col flex-wrap w-full justify-between items-center   gap-3 p-6 mx-auto ">
      <div className="w-2/3  flex flex-row flex-wrap justify-center gap-3 p-3">
        {cartFoods.map((item) => (
          <CartFoodItem item={item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
