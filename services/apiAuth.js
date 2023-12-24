import supabase from "./supabase";

export const getSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  return session;
};

export const signIn = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (data === null || error) alert("登入失敗");
  return data;
};

export async function getUserData() {
  const { data, error } = await supabase.from("user").select();
  if (error) {
    throw new Error("擷取資料錯誤");
  }
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return error;
}
