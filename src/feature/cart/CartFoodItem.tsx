import { CartFood } from "../../types/foodTypes";
import { HiPlus, HiX } from "react-icons/hi";
import { addFoodToCart, deleteFoodFromCart } from "../food/foodSlice";
import { useAppDispatch } from "../../hook/reduxHook";

type Props = {
  item: CartFood;
};

function CartFoodItem({ item }: Props) {
  const dispatch = useAppDispatch();
  function handleDeleteItem(id: string) {
    dispatch(deleteFoodFromCart(id));
  }

  function handleAddQuantity() {
    dispatch(addFoodToCart(item));
  }

  return (
    <div className=" flex flex-col w-[30%]">
      <div className=" h-36 rounded-2xl px-1.5 py-5 flex flex-col items-center justify-around border-slate-100 border-2 shadow-xl   relative">
        <div className="absolute right-1.5 top-1.5 flex gap-1.5">
          <HiPlus
            onClick={handleAddQuantity}
            className="text-green-500 cursor-pointer hover:bg-green-500 rounded-md hover:text-white"
          />
          <HiX
            className="text-red-800 cursor-pointer hover:bg-red-500 rounded-md hover:text-white"
            onClick={() => handleDeleteItem(item.id)}
          />
        </div>
        <h1 className="font-bold">{item.name}</h1>
        <div className="flex flex-col gap-2 items-center justify-center">
          {" "}
          <p className=" bg-slate-500 p-1 rounded-sm w-5 h-5 flex justify-center items-center text-xs font-bold text-white">
            {item.quantity}
          </p>
          <h1 className="text-xs font-semibold">quantity </h1>
        </div>
      </div>
    </div>
  );
}

export default CartFoodItem;
