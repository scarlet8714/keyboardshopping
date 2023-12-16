import supabase from "./supabase";

export async function getProduct(pid) {
  const { data, error } = await supabase.from("product").select().eq("id", pid);
  if (error) {
    throw new Error("擷取資料錯誤");
  }
  return data;
}

export async function getProductImage(pid) {
  const { data, error } = await supabase
    .from("image")
    .select()
    .eq("pid", pid)
    .eq("recommend", false);

  if (error) {
    throw new Error("擷取資料錯誤");
  }
  return data;
}

export async function getProductCategory(category, limit = 0) {
  if (limit) {
    const { data, error } = await supabase
      .from("product")
      .select()
      .eq("category", category)
      .limit(limit);
    if (error) {
      throw new Error("擷取資料錯誤");
    }
    return data;
  } else {
    const { data, error } = await supabase
      .from("product")
      .select()
      .eq("category", category);
    if (error) {
      throw new Error("擷取資料錯誤");
    }
    return data;
  }
}

export async function getcarousel() {
  const { data, error } = await supabase
    .from("image")
    .select()
    .eq("recommend", true);
  if (error) {
    throw new Error("擷取資料錯誤");
  }
  return data;
}
