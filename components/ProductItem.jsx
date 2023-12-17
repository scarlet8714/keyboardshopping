import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`
  border: 1px solid grey;
  position: relative;
  height: 300px;
  transition: all 0.3s;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    border-color: #aa9047;
  }
  img {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const AddCart = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  border: 0;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  transition: all 0.8s;
  cursor: pointer;
  &:hover {
    background-color: #aa9047;
    color: white;
  }
`;

const StyledH5 = styled.h5`
  margin: 0.5rem 0;
  border-bottom: 0.5rem solid transparent;
  height: 4rem;
  color: ${(props) => (props.type === "name" ? "black" : "red")};
`;

export default function ProductItem({ data }) {
  const navigate = useNavigate();
  function handleClick(id) {
    navigate(`/product/${id}`);
  }
  return (
    <Item>
      <Container>
        <div>
          <img src={data.banner} alt="" onClick={() => handleClick(data.id)} />
        </div>
      </Container>
      <StyledH5 type="name" onClick={() => handleClick(data.id)}>
        {data.name}
      </StyledH5>
      <StyledH5 type="price">$ {data.price}</StyledH5>
      <AddCart>加入購物車</AddCart>
    </Item>
  );
}
