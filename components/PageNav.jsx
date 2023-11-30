import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const StyledNav = styled.nav`
  display: flex;
  height: 60px;
  padding-top: 1rem;
  padding-bottom: 3rem;
  text-align: center;
  position: sticky;
  top: 0;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  padding: 1rem 1rem;
  &:link,
  &:visited {
    color: black;
  }
  &:hover {
    background-color: #f6f6f6;
    transition: all 0.5s;
  }
  &.active {
    background-color: black;
    color: white;
  }
`;
const StyledList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  list-style: none;
  margin: 0;
  & li {
    width: calc(100% / 5);
  }
`;

export default function PageNav() {
  return (
    <StyledNav>
      <Logo />
      <StyledList>
        <li>
          <StyledNavLink to="/keyboard">成品鍵盤</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/keyboardset">鍵盤套件</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/switch">機械軸體</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/hat">鍵帽</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/tools">其他工具</StyledNavLink>
        </li>
      </StyledList>
    </StyledNav>
  );
}
