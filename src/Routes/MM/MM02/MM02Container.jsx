import React, { useEffect, useState } from "react";
import useInput from "../../../Hooks/useInput";
import MM02Presenter from "./MM02Presenter";
import { GET_LOGIN_USER } from "./MM02Queries";
import { useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";

const MM02Container = ({ history }) => {
 const inputEmail = useInput("");
 const inputPassWord = useInput("");
 const [isLogin, setIsLogin] = useState(true);

 const {
  data: userBannerData,
  loading: userBannerLoading,
  refetch: userBannerRefetch,
 } = useQuery(GET_LOGIN_USER, {
  skip: isLogin,
  variables: {
   email: inputEmail.value,
   passWord: inputPassWord.value,
  },
 });

 const loginHandler = () => {
  if (!inputEmail.value || inputEmail.value.trim() === "") {
   alert("이메일은 필수 입력사항 입니다.");
   return;
  }
  if (!inputPassWord.value || inputPassWord.value.trim() === "") {
   alert("비밀번호는 필수 입력사항 입니다.");
   return;
  }
  setIsLogin(false);
  console.log(userBannerData && userBannerData.getLoginUser);
 };

 useEffect(() => {
  if (!isLogin) {
   console.log(userBannerData && userBannerData.getLoginUser.isLogin);
   if (userBannerData && userBannerData.getLoginUser.isLogin) {
    alert("로그인 하셨습니다.");
    sessionStorage.setItem("WOX32S4SH20", userBannerData && userBannerData.getLoginUser.userData._id);
    history.push("/");
    setIsLogin(true);
   } else {
    alert("이메일또는 비밀번호가 틀렸습니다.");
    setIsLogin(false);
   }
  }
 }, [userBannerData]);

 return <MM02Presenter inputEmail={inputEmail} inputPassWord={inputPassWord} loginHandler={loginHandler} />;
};

export default MM02Container;
