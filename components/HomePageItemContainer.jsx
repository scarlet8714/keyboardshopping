import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  max-width: 992px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
  padding-top: 1rem;
  border-top: 2px solid black;

  a {
    display: block;
    width: 25%;
    border: 1px solid #f6f6f6;
    box-sizing: border-box;
    margin-right: -1px;
    margin-top: -1px;
    text-decoration: none;

    &:hover {
      border-color: #a88b47;
      z-index: 99;
    }
    div {
      width: 100%;
      aspect-ratio: 1 / 1;
      padding: 1rem;
      box-sizing: border-box;
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
  border: 1rem solid transparent;
  color: ${(props) => (props.type === "name" ? "black" : "red")};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default function HomePageItemContainer({ categoryItem }) {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate(`product/${e.currentTarget.getAttribute("value")}`);
  }
  return (
    <Container>
      {categoryItem.data.map((item, index) => (
        <a
          href="product"
          key={item.id}
          value={item.id}
          onClick={(e) => handleClick(e)}
        >
          <div>
            <img src={item.banner} alt="" />
          </div>
          <StyledH5 type="name">{item.name}</StyledH5>
          <StyledH5 type="price">$ {item.price}</StyledH5>
        </a>
      ))}
    </Container>
  );
}
