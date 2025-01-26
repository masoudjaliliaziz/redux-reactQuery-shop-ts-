import { useForm } from "react-hook-form";
import { useAddFood } from "../feature/food/hook/useAddFood";

function AddFood() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate, isPending } = useAddFood();

  function onSubmit(val) {
    const newFood = {
      ...val,
      createdAt: "123456",
      avatar: "123465",
    };
    mutate(newFood);
  }
  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 justify-start"
    >
      <label className="font-bold" htmlFor="">
        name
      </label>
      <div className="flex justify-center items-center gap-2">
        <input
          className="border-slate-200 border-2 rounded-lg p-1.5 text-slate-600 font-bold focus:border-blue-500 focus:border-2"
          disabled={isPending}
          type="text"
          id="name"
          {...register("name", {
            required: "PLS INSERT THE NAME",
          })}
        />
        {errors?.name && (
          <span className="text-xs text-blue-400">{errors.name.message}</span>
        )}
      </div>
      <button
        className="bg-sky-500 font-bold text-white p-1.5 rounded-lg w-1/3 hover:bg-sky-700 cursor-pointer"
        type="submit"
      >
        add
      </button>
    </form>
  );
}

export default AddFood;
