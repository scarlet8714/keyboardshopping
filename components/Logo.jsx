import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.img`
  cursor: pointer;
`;

export default function Logo() {
  const navigate = useNavigate();
  return <StyledLogo src="/logo.jpg" alt="" onClick={() => navigate("/")} />;
}
