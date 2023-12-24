import React from "react";
import styled from "styled-components";
import Member from "./Member";
import Cart from "./Cart";
import { useState } from "react";
import Login from "./Login";
import Overlay from "./Overlay";
import { useRef } from "react";
import { useEffect } from "react";

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
  /* background-color: #a88b47; */
`;

export default function SideBar() {
  const [login, setLogin] = useState(false);
  const ref = useRef();
  function handleClick() {
    setLogin(!login);
  }
  function closeWindow() {
    setLogin(false);
  }
  useEffect(
    function () {
      const overlay = ref.current;
      overlay?.addEventListener("click", closeWindow);
      return () => overlay?.removeEventListener("click", closeWindow);
    },
    [login]
  );
  return (
    <>
      <MemberAndCart>
        <Member onClick={handleClick} />
        <Cart />
      </MemberAndCart>
      {login && (
        <div ref={ref}>
          <Overlay />
        </div>
      )}

      {login && <Login setLogin={setLogin} />}
    </>
  );
}
