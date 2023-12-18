import styled from "styled-components";
import supabase from "../services/supabase";

const LoginForm = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
  padding: 30px 20px;
  background-color: #f6f6f6;
  border: 1px solid #5a5858;
  border-radius: 30px;
  text-align: center;
  z-index: 1000;
`;
const relogin = async () => {
  const { data } = await supabase.from("user").select();
  console.log(data);
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

const insertdata = async () => {
  const { error } = await supabase.from("cart").insert({
    pid: 1,
    quantity: 12,
  });
  if (error) console.log(error);
};

export default function Login() {
  return (
    <>
      <button onClick={insertdata}>++</button>
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
        <button
          onClick={(e) => {
            e.preventDefault();
            insertdata();
          }}
        >
          ++
        </button>
      </LoginForm>
      <button onClick={() => relogin()}>偷偷的來</button>
      <button onClick={() => fet()}>來一點</button>
    </>
  );
}
