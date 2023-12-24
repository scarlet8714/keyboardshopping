import styled from "styled-components";

const StyledParagraph = styled.p`
  display: ${(props) => (props.type !== "popup" ? "inline-block" : "block")};
  font-size: 1rem;
  color: #666464be;
`;

export default function RemainQuantity({ remainQuantity, type }) {
  return (
    <StyledParagraph type={type}>剩餘數量: {remainQuantity}</StyledParagraph>
  );
}
