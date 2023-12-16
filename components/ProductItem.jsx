import styled from "styled-components";

const Item = styled.div`
  border: 1px solid grey;
  position: relative;
  height: 300px;
  transition: all 0.5s;
  &:hover {
    border-color: #aa9047;
    button {
      background-color: #aa9047;
    }
  }
  img {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  padding: 0.3rem;
`;

const AddCart = styled.button`
  position: absolute;
  bottom: 0;
  border: 0;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  transition: all 0.8s;
`;

const StyledH5 = styled.h5`
  margin-top: auto;
`;

export default function ProductItem({ name, image }) {
  return (
    <Item>
      <Container>
        <img src={image} alt="" />
        <StyledH5>{name}</StyledH5>
      </Container>
      <AddCart>加入購物車</AddCart>
    </Item>
  );
}
