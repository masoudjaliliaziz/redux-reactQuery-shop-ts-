import React from "react";
import { Food } from "../../types/foodTypes";
import { HiX } from "react-icons/hi";
import { useDeleteFood } from "./hook/useDeleteFood";

type Props = {
  item: Food;
};

function FoodItem({ item }: Props) {
  const { mutate } = useDeleteFood();
  function handleDelete() {
    mutate(item.id);
  }

  return (
    <div className="w-[40%] h-36 rounded-2xl px-1.5 py-5 flex justify-center border-slate-100 border-2 shadow-xl hover:bg-slate-200  relative">
      <div className="absolute right-1.5 top-1.5" onClick={handleDelete}>
        <HiX className="text-red-800 cursor-pointer hover:bg-red-950 rounded-md hover:text-white" />
      </div>
      <h1 className="font-bold">{item.name}</h1>
    </div>
  );
}

export default FoodItem;
