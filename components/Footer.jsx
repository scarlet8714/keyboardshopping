import React from "react";
import styled from "styled-components";
import FootLogo from "./FootLogo";

const FooterBlock = styled.div`
  background-color: black;
  padding: 2em 10em;
  display: flex;
  gap: 1.5em;
`;

const StyledDiv = styled.div`
  display: ${(props) => (props.display ? props.display : "block")};
`;

const StyledMessage = styled.p`
  margin: 0.3em;
  font-size: 12px;
  color: ${(props) => (props.color ? props.color : "white")};
  &::after {
    content: "${(props) => (props.after ? props.after : "")}";
    margin-left: 0.6em;
  }
`;

export default function Footer() {
  return (
    <FooterBlock>
      <StyledDiv>
        <FootLogo />
        <StyledMessage>硬派精璽有限公司 | 統一編號：27845621</StyledMessage>
        <StyledMessage>硬派精璽台北分公司 | 統一編號：85041798</StyledMessage>
      </StyledDiv>
      <StyledDiv>
        <StyledDiv display="flex">
          <StyledMessage color="#AA8D3C" after="▶">
            技術及訂單服務專線
          </StyledMessage>
          <StyledMessage> 電話：06-229-6881</StyledMessage>
          <StyledMessage> 行動：0978-089-187</StyledMessage>
        </StyledDiv>
        <StyledDiv display="flex">
          <StyledMessage color="#AA8D3C" after="▶">
            台北店
          </StyledMessage>
          <StyledMessage> 電話：02-2564-1289</StyledMessage>
          <StyledMessage> 地址：台北市中山區松江路26巷2號1F</StyledMessage>
        </StyledDiv>
        <StyledDiv display="flex">
          <StyledMessage color="#AA8D3C" after="▶">
            台南店
          </StyledMessage>
          <StyledMessage> 電話：06-229-6881</StyledMessage>
          <StyledMessage>
            地址：台南市北門路一段226號1F(台南E01數位商場A8櫃)
          </StyledMessage>
        </StyledDiv>
        <StyledDiv display="flex">
          <StyledMessage color="#AA8D3C" after="▶">
            匯款資訊
          </StyledMessage>
          <StyledMessage> 戶名：硬派精璽有限公司</StyledMessage>
          <StyledMessage> 代碼：007 (第一銀行 赤崁分行)</StyledMessage>
          <StyledMessage> 帳號：60510087116</StyledMessage>
        </StyledDiv>
        <StyledMessage> Copyright © INPAD. All Rights Reserved.</StyledMessage>
      </StyledDiv>
      <StyledDiv></StyledDiv>
    </FooterBlock>
  );
}
