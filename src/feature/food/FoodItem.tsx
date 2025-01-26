import React, { useState } from "react";
import { Food } from "../../types/foodTypes";
import { HiPencil, HiX } from "react-icons/hi";
import { useDeleteFood } from "./hook/useDeleteFood";
import AddFood from "../../page/AddFood";

type Props = {
  item: Food;
};

function FoodItem({ item }: Props) {
  const [showEdit, setShowEdit] = useState(false);
  const { mutate } = useDeleteFood();
  function handleDelete() {
    mutate(item.id);
  }

  return (
    <>
      <div className="w-[40%] h-36 rounded-2xl px-1.5 py-5 flex justify-center border-slate-100 border-2 shadow-xl hover:bg-slate-200  relative">
        <div className="absolute right-1.5 top-1.5 flex gap-1.5">
          <HiPencil
            className="cursor-pointer hover:bg-slate-500 rounded-md hover:text-white"
            onClick={() => setShowEdit((show) => !show)}
          />
          <HiX
            className="text-red-800 cursor-pointer hover:bg-red-500 rounded-md hover:text-white"
            onClick={handleDelete}
          />
        </div>
        <h1 className="font-bold">{item.name}</h1>
      </div>
      {showEdit && <AddFood item={item} />}
    </>
  );
}

export default FoodItem;
