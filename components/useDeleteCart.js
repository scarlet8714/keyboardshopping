import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCart } from "../services/apiCart";

function useDeleteCart() {
  const queryClient = useQueryClient();
  const { mutate: deleteAction, isLoading: isDeleting } = useMutation({
    mutationFn: ({ id }) => deleteCart(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartQuantity"] });
      queryClient.invalidateQueries({ queryKey: ["usercart"] });
    },
    onError: (err) => console.error(err.message),
  });
  return { deleteAction, isDeleting };
}

export default useDeleteCart;
