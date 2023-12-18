import styled from "styled-components";

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #f6f6f6;
  border: 0;
  transition: all 0.2s;
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
  display: inline-block;
  margin-right: 2rem;
  color: red;
  border: 1px solid #666464;
`;

const StyledH3 = styled.div`
  display: inline-block;
  margin-right: 2rem;
`;

const StyledParagraph = styled.p`
  display: inline-block;
  font-size: 1rem;
  color: #666464be;
`;

export default function Quantity({
  handlePlus,
  handleMinus,
  quantity,
  remainQuantity,
}) {
  return (
    <>
      <StyledH3>商品數量</StyledH3>
      <StyledDiv>
        <Button onClick={handleMinus}>-</Button>
        <Input type="text" value={quantity} />
        <Button onClick={handlePlus}>+</Button>
      </StyledDiv>
      <StyledParagraph>剩餘數量: {remainQuantity}</StyledParagraph>
    </>
  );
}
