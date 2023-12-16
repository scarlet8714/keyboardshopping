import styled from "styled-components";
import HomePageItemContainer from "./HomePageItemContainer";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2em 0 2em 0;
`;

const StyledH2 = styled.h2`
  span {
    width: 7px;
    height: 20px;
    margin: 0 10px 3px 1px;
    background-color: black;
    padding-left: 10px;
  }
`;

export default function HomePageCatgory({ category, categoryItem }) {
  return (
    <StyledDiv>
      <StyledH2>
        <span></span>
        {category}
      </StyledH2>
      <HomePageItemContainer categoryItem={categoryItem} />
    </StyledDiv>
  );
}
