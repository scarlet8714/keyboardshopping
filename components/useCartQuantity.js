import { useQuery } from "@tanstack/react-query";
import { getCartQuantity } from "../services/apiCart";

function useCartQuantity() {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["cartQuantity"],
    queryFn: () => getCartQuantity(),
  });
  return { isLoading, data, refetch };
}

export default useCartQuantity;
