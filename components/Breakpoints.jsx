import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 992px;
  min-height: 1056px;
`;

export default function Breakpoints({ children, type }) {
  return <Container type={type}>{children}</Container>;
}
