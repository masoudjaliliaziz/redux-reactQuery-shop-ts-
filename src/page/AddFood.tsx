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
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">name</label>
      <input
        disabled={isPending}
        type="text"
        id="name"
        {...register("name", {
          required: "PLS INSERT THE NAME",
        })}
      />
      {errors?.name && <span>{errors.name.message}</span>}
      <button type="submit">add</button>
    </form>
  );
}

export default AddFood;
