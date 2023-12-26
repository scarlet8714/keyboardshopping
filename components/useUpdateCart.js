import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCart } from "../services/apiCart";

function useUpdateCart() {
  const queryClient = useQueryClient();
  const { mutate: updateAction, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, quantity }) => updateCart(id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usercart"] });
    },
    onError: (err) => console.error(err.message),
  });
  return { updateAction, isUpdating };
}

export default useUpdateCart;
