import supabase from "./supabase";

export async function getCartQuantity() {
  const { count, error } = await supabase
    .from("cart")
    .select("*", { count: "exact", head: true });
  return count;
}

export async function addCart(pid, quantity) {
  const { error } = await supabase
    .from("cart")
    .insert({ pid: pid, quantity: quantity });
  if (error) {
    console.error(error);
    throw new Error("Something wrong in add cart");
  }
  return error;
}

export async function deleteCart(id) {
  const { error } = await supabase.from("cart").delete().eq("id", id);
}
