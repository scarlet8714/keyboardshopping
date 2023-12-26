import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCart } from "../services/apiCart";

function useAddCart() {
  const queryClient = useQueryClient();
  const {
    mutate: addAction,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ id, quantity }) => addCart(id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartQuantity"] });
    },
    onError: (err) => console.error(err.message),
  });
  return { addAction, isLoading, error };
}

export default useAddCart;
