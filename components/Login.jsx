import { useEffect } from "react";
import styled, { css } from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { signIn, signOut } from "../services/apiAuth";
import supabase from "../services/supabase";
import Close from "../components/Close";
const style = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 350px;
  padding: 40px;
  background-color: #ffffff;
  border: 1px solid #5a5858;
  border-radius: 20px;
  z-index: 1001;
  text-align: center;
`;
const LoginForm = styled.form`
  ${style}
`;

const SignOut = styled.div`
  ${style}
  display: flex;
  flex-direction: column;
`;

const StyledTextBox = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #b8b7b7;
  height: 2rem;
  margin-top: 2rem;
  padding-left: 0.5rem;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  background-color: #a88b47;
  color: white;
  border: 0;
  transition: all 0.2s;
  cursor: pointer;
  margin-top: 2rem;
  height: 3rem;
  &:hover {
    background-color: black;
  }
`;

const CloseContainer = styled.span`
  position: absolute;
  top: 25px;
  right: 30px;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;

const StyledH2 = styled.h2`
  margin: auto;
`;

const insertdata = async () => {
  const { error } = await supabase.from("cart").insert({
    pid: 1,
    quantity: 12,
  });
  if (error) console.log(error);
};

export default function Login({ setLogin }) {
  const { isAuthenticated, setIsAuthenticated, user } = useAuth();
  const handleLogin = async function (data) {
    const account = await signIn(data);
    if (account) {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = async function (e) {
    e.preventDefault();
    const error = await signOut();
    if (!error) {
      setIsAuthenticated(false);
      setLogin(false);
    }
  };

  return (
    <>
      {!isAuthenticated ? (
        <LoginForm
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin({
              email: e.target[0].value,
              password: e.target[1].value,
            });
          }}
        >
          <CloseContainer onClick={() => setLogin(false)}>
            <Close />
          </CloseContainer>
          <h2>會員登入</h2>
          <StyledTextBox type="text" id="email" placeholder="電子郵件" />
          <StyledTextBox type="password" id="password" placeholder="密碼" />
          <Button>登入</Button>
        </LoginForm>
      ) : (
        <SignOut>
          <CloseContainer onClick={() => setLogin(false)}>
            <Close />
          </CloseContainer>
          <h1>歡迎回來!!</h1>
          <StyledH2>{user}</StyledH2>
          <Button onClick={handleLogout}>登出</Button>
        </SignOut>
      )}
    </>
  );
}
