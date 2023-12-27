import { useQuery } from "@tanstack/react-query";
import { getCartQuantity } from "../services/apiCart";

function useCartQuantity() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["cartQuantity"],
    queryFn: () => getCartQuantity(),
  });
  return { isLoading, data };
}

export default useCartQuantity;
