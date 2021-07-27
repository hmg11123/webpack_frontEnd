import React from "react";
import { Wrapper, CommonTitle, CommonTextInput, CommonBtn } from "../../../Components/commonComponents";
import Theme from "../../../Styles/Theme";

const MM02Presenter = ({ inputEmail, inputPassWord, loginHandler }) => {
 return (
  <Wrapper>
   <Wrapper margin={`100px 0 0 0 `}>
    <CommonTitle width={`80px`}>로그인</CommonTitle>
   </Wrapper>
   <Wrapper margin={`100px 0 0 0`}>
    <Wrapper width={`230px`} margin={`20px 0`}>
     <Wrapper al={`flex-start`} fontSize={`20px`} margin={`10px`}>
      이메일
     </Wrapper>
     <CommonTextInput
      width={`250px`}
      height={`30px`}
      border={`3px solid ${Theme.subThemeColor}`}
      padding={`5px`}
      fontSize={`16px`}
      placeholder="이메일을 입력해주세요"
      {...inputEmail}
     ></CommonTextInput>
    </Wrapper>
    <Wrapper width={`230px`} margin={`20px 0`}>
     <Wrapper al={`flex-start`} fontSize={`20px`} margin={`10px`}>
      비밀번호
     </Wrapper>
     <CommonTextInput
      width={`250px`}
      height={`30px`}
      border={`3px solid ${Theme.subThemeColor}`}
      padding={`5px`}
      fontSize={`16px`}
      placeholder="비밀번호를 입력해주세요"
      {...inputPassWord}
     ></CommonTextInput>
    </Wrapper>
   </Wrapper>
   <Wrapper margin={`100px 0 0 0`}>
    <CommonBtn
     width={`200px`}
     height={`50px`}
     fontSize={`20px`}
     bgColor={Theme.checkColor}
     hoverColor={Theme.checkColor}
     hoverBoxShadow={Theme.checkColor}
     onClick={() => loginHandler()}
    >
     로그인
    </CommonBtn>
   </Wrapper>
  </Wrapper>
 );
};

export default MM02Presenter;
