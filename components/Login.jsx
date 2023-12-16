import styled from "styled-components";
import supabase from "../services/supabase";

const LoginForm = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
  background-color: yellow;
  z-index: 1000;
`;
const relogin = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user ? "yse" : "no");
  return user.id;
};

const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  console.log(data);
  relogin();
};

const fet = async () => {
  const param = await relogin();
  const { data, error } = await supabase.from("user").select().eq("uid", param);
  console.log(data);
};

export default function Login() {
  return (
    <>
      <LoginForm
        onSubmit={(e) => {
          e.preventDefault();
          login({ email: e.target[0].value, password: e.target[1].value });
        }}
      >
        電子郵件:
        <input type="text" id="email" />
        <br />
        密碼:
        <input type="password" id="password" />
        <button>送出</button>
      </LoginForm>
      <button onClick={() => relogin()}>偷偷的來</button>
      <button onClick={() => fet()}>來一點</button>
    </>
  );
}
