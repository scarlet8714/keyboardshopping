import styled from "styled-components";

const StyledImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;

export default function ImageContainer({ children }) {
  return <StyledImage>{children}</StyledImage>;
}
