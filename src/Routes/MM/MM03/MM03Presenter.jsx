import React from "react";
import { Wrapper, CommonTitle, SpanText, CommonBtn } from "../../../Components/commonComponents";
import Theme from "../../../Styles/Theme";

const MM03Presenter = ({ userBannerData }) => {
 return (
  <Wrapper>
   <Wrapper margin={`100px 0 0 0 `}>
    <CommonTitle width={`130px`}>마이페이지</CommonTitle>
   </Wrapper>

   <Wrapper dr={`row`} al={`flex-start`} margin={`80px 0`}>
    <Wrapper width={`400px`}>
     <Wrapper width={`250px`} height={`150px`}>
      <Wrapper width={`200px`} height={`40px`} al={`flex-start`}>
       <SpanText fontSize={`20px`}>닉네임</SpanText>
      </Wrapper>
      <Wrapper
       margin={`20px 0`}
       width={`200px`}
       height={`40px`}
       fontSize={`18px`}
       al={`flex-start`}
       borderBottom={`3px solid ${Theme.subThemeColor}`}
      >
       <SpanText>{userBannerData ? userBannerData.nickName : "로딩중"}</SpanText>
      </Wrapper>
     </Wrapper>
     <Wrapper width={`250px`} height={`150px`}>
      <Wrapper width={`200px`} height={`40px`} al={`flex-start`}>
       <SpanText fontSize={`20px`}>이름</SpanText>
      </Wrapper>
      <Wrapper
       margin={`20px 0`}
       width={`200px`}
       height={`40px`}
       fontSize={`18px`}
       al={`flex-start`}
       borderBottom={`3px solid ${Theme.subThemeColor}`}
      >
       <SpanText>{userBannerData ? userBannerData.name : "로딩중"}</SpanText>
      </Wrapper>
     </Wrapper>
     <Wrapper width={`250px`} height={`150px`}>
      <Wrapper width={`200px`} height={`40px`} al={`flex-start`}>
       <SpanText fontSize={`20px`}>이메일</SpanText>
      </Wrapper>
      <Wrapper
       margin={`20px 0`}
       width={`200px`}
       height={`40px`}
       fontSize={`18px`}
       al={`flex-start`}
       borderBottom={`3px solid ${Theme.subThemeColor}`}
      >
       <SpanText>{userBannerData ? userBannerData.email : "로딩중"}</SpanText>
      </Wrapper>
     </Wrapper>
    </Wrapper>
    <Wrapper width={`400px`}>
     <Wrapper width={`250px`} height={`150px`}>
      <Wrapper width={`200px`} height={`40px`} al={`flex-start`}>
       <SpanText fontSize={`20px`}>전화번호</SpanText>
      </Wrapper>
      <Wrapper
       margin={`20px 0`}
       width={`200px`}
       height={`40px`}
       fontSize={`18px`}
       al={`flex-start`}
       borderBottom={`3px solid ${Theme.subThemeColor}`}
      >
       <SpanText>{userBannerData ? userBannerData.mobile : "로딩중"}</SpanText>
      </Wrapper>
     </Wrapper>
     <Wrapper width={`250px`} height={`150px`}>
      <Wrapper width={`200px`} height={`40px`} al={`flex-start`}>
       <SpanText fontSize={`20px`}>생년월일</SpanText>
      </Wrapper>
      <Wrapper
       margin={`20px 0`}
       width={`200px`}
       height={`40px`}
       fontSize={`18px`}
       al={`flex-start`}
       borderBottom={`3px solid ${Theme.subThemeColor}`}
      >
       <SpanText>{userBannerData ? userBannerData.birthDay : "로딩중"}</SpanText>
      </Wrapper>
     </Wrapper>
    </Wrapper>
   </Wrapper>
   <Wrapper dr={`row`}>
    <CommonBtn
     width={`200px`}
     height={`50px`}
     fontSize={`20px`}
     bgColor={Theme.checkColor}
     hoverColor={Theme.checkColor}
     hoverBoxShadow={Theme.checkColor}
     margin={`10px`}
    >
     수정하기
    </CommonBtn>
    <CommonBtn
     width={`200px`}
     height={`50px`}
     fontSize={`20px`}
     bgColor={Theme.errorColor}
     hoverColor={Theme.errorColor}
     hoverBoxShadow={Theme.errorColor}
     margin={`10px`}
    >
     삭제하기
    </CommonBtn>
   </Wrapper>
  </Wrapper>
 );
};

export default MM03Presenter;
