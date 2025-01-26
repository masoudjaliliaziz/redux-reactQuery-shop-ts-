import { useQuery } from "@tanstack/react-query";
import { getFood } from "../../../services/foodApi";
import { Food } from "../../../types/foodTypes";
import { setFood } from "../foodSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";

export function useFoods() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading } = useQuery<Food[]>({
    queryKey: ["foods"],
    queryFn: getFood,
  });

  if (data) dispatch(setFood(data));
  return { data, isLoading };
}
