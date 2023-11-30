import React from "react";
import styled from "styled-components";
import Member from "./Member";
import Cart from "./Cart";

const MemberAndCart = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  gap: 0.1rem;
  flex-direction: column;
`;

export default function SideBar() {
  return (
    <MemberAndCart>
      <Member />
      <Cart />
    </MemberAndCart>
  );
}
