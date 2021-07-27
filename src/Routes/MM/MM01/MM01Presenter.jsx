import React from "react";
import { Wrapper, CommonTitle, CommonTextInput, CommonBtn, CheckEmailBtn } from "../../../Components/commonComponents";
import Theme from "../../../Styles/Theme";

const MM01Presenter = ({
 newName,
 newEmail,
 newNickName,
 newMobile,
 newPassWord,
 createUserHandler,
 rePassWord,
 checkEmailHandler,
 newBirthDay,
}) => {
 return (
  <Wrapper>
   <Wrapper margin={`100px 0 0 0 `}>
    <CommonTitle width={`120px`}>회원가입</CommonTitle>
   </Wrapper>
   <Wrapper margin={`100px 0 0 0 `} dr={`row`} al={`flex-start`}>
    <Wrapper width={`400px`}>
     <Wrapper width={`230px`} margin={`15px`}>
      <Wrapper al={`flex-start`} fontSize={`20px`} margin={`10px`}>
       이름
      </Wrapper>
      <CommonTextInput
       width={`200px`}
       height={`30px`}
       border={`3px solid ${Theme.subThemeColor}`}
       padding={`5px`}
       fontSize={`16px`}
       placeholder="이름을 입력해주세요"
       {...newName}
      ></CommonTextInput>
     </Wrapper>
     <Wrapper width={`230px`} margin={`15px`}>
      <Wrapper al={`flex-start`} fontSize={`20px`} margin={`10px`}>
       닉네임
      </Wrapper>
      <CommonTextInput
       width={`200px`}
       height={`30px`}
       border={`3px solid ${Theme.subThemeColor}`}
       padding={`5px`}
       fontSize={`16px`}
       placeholder="닉네임을 입력해주세요"
       {...newNickName}
      ></CommonTextInput>
     </Wrapper>
     <Wrapper width={`230px`} margin={`15px`}>
      <Wrapper al={`flex-start`} fontSize={`20px`} margin={`10px`}>
       이메일
      </Wrapper>
      <CommonTextInput
       width={`200px`}
       height={`30px`}
       border={`3px solid ${Theme.subThemeColor}`}
       padding={`5px`}
       fontSize={`16px`}
       placeholder="이메일을 입력해주세요"
       {...newEmail}
      ></CommonTextInput>
      <CheckEmailBtn onClick={() => checkEmailHandler()}>이메일체크</CheckEmailBtn>
     </Wrapper>
    </Wrapper>
    <Wrapper width={`400px`}>
     <Wrapper width={`230px`} margin={`15px`}>
      <Wrapper al={`flex-start`} fontSize={`20px`} margin={`10px`}>
       생년월윌
      </Wrapper>
      <CommonTextInput
       width={`200px`}
       height={`30px`}
       border={`3px solid ${Theme.subThemeColor}`}
       padding={`5px`}
       fontSize={`16px`}
       placeholder="생년월일를 입력해주세요"
       {...newBirthDay}
      ></CommonTextInput>
     </Wrapper>
     <Wrapper width={`230px`} margin={`15px`}>
      <Wrapper al={`flex-start`} fontSize={`20px`} margin={`10px`}>
       전화번호
      </Wrapper>
      <CommonTextInput
       width={`200px`}
       height={`30px`}
       border={`3px solid ${Theme.subThemeColor}`}
       padding={`5px`}
       fontSize={`16px`}
       placeholder="전화번호를 입력해주세요"
       {...newMobile}
      ></CommonTextInput>
     </Wrapper>
     <Wrapper width={`230px`} margin={`15px`}>
      <Wrapper al={`flex-start`} fontSize={`20px`} margin={`10px`}>
       비밀번호
      </Wrapper>
      <CommonTextInput
       width={`200px`}
       height={`30px`}
       border={`3px solid ${Theme.subThemeColor}`}
       padding={`5px`}
       fontSize={`16px`}
       placeholder="비밀번호를 입력해주세요"
       {...newPassWord}
      ></CommonTextInput>
     </Wrapper>
     <Wrapper width={`230px`} margin={`15px`}>
      <Wrapper al={`flex-start`} fontSize={`20px`} margin={`10px`}>
       비밀번호 재등록
      </Wrapper>
      <CommonTextInput
       width={`200px`}
       height={`30px`}
       border={`3px solid ${Theme.subThemeColor}`}
       padding={`5px`}
       fontSize={`16px`}
       placeholder="비밀번호를 입력해주세요"
       {...rePassWord}
      ></CommonTextInput>
     </Wrapper>
    </Wrapper>
   </Wrapper>
   <Wrapper margin={`50px 0 0 0`}>
    <CommonBtn
     width={`200px`}
     height={`50px`}
     fontSize={`20px`}
     bgColor={Theme.checkColor}
     hoverColor={Theme.checkColor}
     hoverBoxShadow={Theme.checkColor}
     onClick={() => createUserHandler()}
    >
     회원가입
    </CommonBtn>
   </Wrapper>
  </Wrapper>
 );
};

export default MM01Presenter;
