import React, { useState } from "react";
import { Food } from "../../types/foodTypes";
import { HiPencil, HiShoppingCart, HiX } from "react-icons/hi";
import { useDeleteFood } from "./hook/useDeleteFood";
import AddFood from "../../page/AddFood";
import { useAppDispatch } from "../../hook/reduxHook";
import { addFoodToCart } from "./foodSlice";
import toast from "react-hot-toast";
import { HiSquare2Stack } from "react-icons/hi2";
import { useAddFood } from "./hook/useAddFood";
type Props = {
  item: Food;
};

function FoodItem({ item }: Props) {
  const dispatch = useAppDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const { mutate: deleteMutate } = useDeleteFood();
  const { mutate: addMutate } = useAddFood();

  function handleDelete() {
    deleteMutate(item.id);
  }
  function handleAddToCart() {
    const newCartItem = { ...item, quantity: 1 };
    dispatch(addFoodToCart(newCartItem));
    toast.success(`${item.name} add to cart succesfully`);
  }
  function handleDuplicate() {
    if (!item) return;
    addMutate({ ...item, name: `${item.name} copy` });
  }

  return (
    <div className=" flex flex-col w-[30%]">
      <div className=" h-36 rounded-2xl px-1.5 py-5 flex justify-center border-slate-100 border-2 shadow-xl hover:bg-slate-200  relative">
        <div className="absolute right-1.5 top-1.5 flex gap-1.5">
          <HiPencil
            className="cursor-pointer hover:bg-slate-500 rounded-md hover:text-white"
            onClick={() => setShowEdit((show) => !show)}
          />
          <HiX
            className="text-red-800 cursor-pointer hover:bg-red-500 rounded-md hover:text-white"
            onClick={handleDelete}
          />
          <HiShoppingCart
            className="text-blue-800 cursor-pointer hover:bg-blue-500 rounded-md hover:text-white"
            onClick={handleAddToCart}
          />
          <HiSquare2Stack
            onClick={handleDuplicate}
            className="text-emerald-500 cursor-pointer hover:bg-emerald-500 rounded-md hover:text-white"
          />
        </div>
        <h1 className="font-bold">{item.name}</h1>
      </div>
      {showEdit && <AddFood item={item} />}
    </div>
  );
}

export default FoodItem;
