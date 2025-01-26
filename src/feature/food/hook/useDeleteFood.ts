import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFood } from "../../../services/foodApi";
import toast from "react-hot-toast";

export function useDeleteFood() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: deleteFood,
    onSuccess: () => {
      toast.success("food deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["foods"],
      });
    },
    onError: () => {
      toast.error("there was an problem to delete food ");
    },
  });

  return { mutate, isPending };
}
