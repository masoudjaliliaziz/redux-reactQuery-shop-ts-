import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFood } from "../../../services/foodApi";
import toast from "react-hot-toast";

export function useAddFood() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: addFood,
    onSuccess: () => {
      toast.success("food add successfully");
      queryClient.invalidateQueries({
        queryKey: ["foods"],
      });
    },
    onError: () => {
      toast.error("there was an problem to add food ");
    },
  });

  return { mutate, isPending };
}
