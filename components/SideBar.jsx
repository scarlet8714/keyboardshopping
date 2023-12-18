import React from "react";
import styled from "styled-components";
import Member from "./Member";
import Cart from "./Cart";
import { useState } from "react";
import Login from "./Login";

const MemberAndCart = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  gap: 0.1rem;
  flex-direction: column;
  justify-content: center;
  z-index: 200;
  height: 100vh;
  background-color: #a88b47;
`;

export default function SideBar() {
  const [login, setLogin] = useState(false);
  function handleClick() {
    setLogin(!login);
  }
  return (
    <>
      <MemberAndCart>
        <Member onClick={handleClick} />
        <Cart />
      </MemberAndCart>
      {login && <Login />}
    </>
  );
}
