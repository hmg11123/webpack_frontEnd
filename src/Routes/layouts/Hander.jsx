import React from "react";
import { Wrapper, CommonBtn } from "../../Components/commonComponents";
import Theme from "../../Styles/Theme";

const Header = ({ history }) => {
 const moveLinkHandler = (link) => {
  history.push(link);
 };
 const logoutHandler = () => {
  sessionStorage.removeItem("WOX32S4SH20");
  history.push("/");
 };
 return (
  <Wrapper height={`120px`} dr={`row`} ju={`space-around`} bgColor={`${Theme.subThemeColor}`}>
   <Wrapper width={`400px`}>
    <CommonBtn fontSize={`20px`} onClick={() => moveLinkHandler("")}>
     logo
    </CommonBtn>
   </Wrapper>
   {sessionStorage.getItem("WOX32S4SH20") ? (
    <Wrapper width={`300px`} dr={`row`} ju={`space-around`}>
     <CommonBtn fontSize={`20px`} onClick={() => moveLinkHandler("myPage")}>
      마이페이지
     </CommonBtn>
     <CommonBtn fontSize={`20px`} onClick={() => logoutHandler()}>
      로그아웃
     </CommonBtn>
    </Wrapper>
   ) : (
    <Wrapper width={`300px`} dr={`row`} ju={`space-around`}>
     <CommonBtn fontSize={`20px`} onClick={() => moveLinkHandler("signIn")}>
      로그인
     </CommonBtn>
     <CommonBtn fontSize={`20px`} onClick={() => moveLinkHandler("signUp")}>
      회원가입
     </CommonBtn>
    </Wrapper>
   )}
  </Wrapper>
 );
};

export default Header;
