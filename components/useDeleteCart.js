import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCart } from "../services/apiCart";

function useDeleteCart() {
  const queryClient = useQueryClient();
  const { mutate: deleteAction, isLoading } = useMutation({
    mutationFn: deleteCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartQuantity"] });
    },
    onError: (err) => console.error(err.message),
  });
  return { deleteAction, isLoading };
}

export default useDeleteCart;
