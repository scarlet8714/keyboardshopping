import styled from "styled-components";

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #f6f6f6;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: #a88b47;
    color: white;
  }
`;

const Input = styled.input`
  border: 0;
  height: 100%;
  width: 4rem;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const StyledDiv = styled.div`
  display: ${(props) => (props.type !== "popup" ? "inline-block" : "block")};
  margin-right: 2rem;
  color: red;
  border: 1px solid #666464;
`;

export default function Quantity({ handlePlus, handleMinus, quantity, type }) {
  return (
    <>
      <StyledDiv type={type}>
        <Button onClick={handleMinus}>-</Button>
        <Input type="text" value={quantity} />
        <Button onClick={handlePlus}>+</Button>
      </StyledDiv>
    </>
  );
}
