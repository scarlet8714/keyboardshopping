import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  max-width: 768px;
  /* height: 600px; */
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
  border-top: 2px solid black;
  a {
    display: block;
    width: calc(25% - 0.5rem);
    margin-right: 0.5rem;
    div {
      width: 100%;
      aspect-ratio: 1 / 1;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
`;
const StyledH5 = styled.h5`
  margin: 0;
  position: relative;
  bottom: 0;
`;

export default function HomePageItemContainer({ categoryItem }) {
  return (
    <Container>
      {categoryItem.data.map((item) => (
        <a href="#" key={item.id}>
          <div>
            <img src={item.banner} alt="" />
          </div>
          <StyledH5>{item.name}</StyledH5>
        </a>
      ))}
    </Container>
  );
}
