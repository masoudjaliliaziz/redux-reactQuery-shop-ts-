import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFood } from "../../../services/foodApi";
import toast from "react-hot-toast";
type UpdateFoodParams = {
  id: string | number;
  data: Record<string, any>;
};

export function useUpdateFood() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, data }: UpdateFoodParams) => updateFood(id, data),
    onSuccess: () => {
      toast.success("food update successfully");
      queryClient.invalidateQueries({
        queryKey: ["foods"],
      });
    },
    onError: () => {
      toast.error("there was an problem to update food ");
    },
  });

  return { mutate, isPending };
}
