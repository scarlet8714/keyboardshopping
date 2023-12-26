import CartPage from "../pages/CartPage";
import supabase from "./supabase";

export async function getCartQuantity() {
  const { count, error } = await supabase
    .from("cart")
    .select("*", { count: "exact", head: true });
  return count;
}

export async function deleteCart(id) {
  const { error } = await supabase.from("cart").delete().eq("id", id);
  if (error) throw new Error("Something wrong happened");
}

export async function addCart(pid, quantity) {
  const { data, error } = await supabase.rpc("addcart", {
    x: quantity,
    product_id: pid,
  });
  if (error) {
    throw new Error("Something wrong in add cart");
  }
}

export async function getCart() {
  const { data, error } = await supabase
    .from("cart")
    .select(`*, product(banner, price, name)`)
    .order("id");
  if (error) {
    throw new Error("Something error occurred");
  }
  return data;
}

export async function updateCart(id, quantity) {
  const { error } = await supabase
    .from("cart")
    .update({ quantity: quantity })
    .eq("id", id);
  if (error) {
    throw new Error("Something wrong happened");
  }
}
