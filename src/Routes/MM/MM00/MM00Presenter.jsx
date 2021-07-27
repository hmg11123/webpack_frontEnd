import React from "react";
import { Wrapper, FileLabel, FileInput, CommonBtn, SpanText } from "../../../Components/commonComponents";
import styled from "styled-components";
import Theme from "../../../Styles/Theme";

const MM00Presenter = ({}) => {
 return (
  <Wrapper hegiht={`100vh`}>
   <Wrapper width={`1350px`}>
    <Wrapper height={`50px`} al={`flex-end`} margin={`50px`}>
     <CommonBtn
      width={`200px`}
      height={`50px`}
      fontSize={`20px`}
      color={Theme.blackColor}
      bgColor={"none"}
      hoverColor={"none"}
      hoverBoxShadow={"none"}
     >
      스토리 올리기
     </CommonBtn>
    </Wrapper>
    <Wrapper>스토리가 없습니다.</Wrapper>
   </Wrapper>
  </Wrapper>
 );
};

export default MM00Presenter;
