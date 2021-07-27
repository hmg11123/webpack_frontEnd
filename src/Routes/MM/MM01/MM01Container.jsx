import React, { useState } from "react";
import MM01Presenter from "./MM01Presenter";
import useInput from "../../../Hooks/useInput";
import { CREATE_USER, GET_ALL_USER } from "./MM01Queries";
import { useQuery, useMutation } from "react-apollo-hooks";

const MM01Container = ({ history }) => {
 const newName = useInput("");
 const newEmail = useInput("");
 const newNickName = useInput("");
 const newMobile = useInput("");
 const newPassWord = useInput("");
 const newBirthDay = useInput("");
 const rePassWord = useInput("");
 const [checkEmail, setCheckEmail] = useState(false);
 const [userEmail, setUserEmail] = useState([]);

 const { data: userBannerData } = useQuery(GET_ALL_USER);

 const [createUserMutation] = useMutation(CREATE_USER);

 const checkEmailHandler = () => {
  if (!newEmail.value || newEmail.value.trim() === "") {
   alert("이메일은 필수 입력사항 입니다.");
   return;
  }

  const userdata = userBannerData && userBannerData.getAllUser;
  for (let i = 0; i < userdata.length; i++) {
   //       console.log(userdata.em, newEmail.value);
   //    if (userdata[i].email === newEmail.value) {
   //     alert("같은 이메일로 된 계정이 있습니다.");
   //    } else {
   //     alert("사용하실수 있는 계정입니다.");
   //     setCheckEmail(true);
   //    }
   userEmail.push(userdata[i].email);
  }
  if (userEmail.indexOf(newEmail.value) === -1) {
   alert("사용가능한 이메일입니다.");
   setCheckEmail(true);
  } else {
   alert("이미 계정이 있습니다.");
   return;
  }
 };

 const createUserHandler = async () => {
  if (!newName.value || newName.value.trim() === "") {
   alert("이름은 필수 입력사항 입니다.");
   return;
  }
  if (!newEmail.value || newEmail.value.trim() === "") {
   alert("이메일은 필수 입력사항 입니다.");
   return;
  }
  if (!newNickName.value || newNickName.value.trim() === "") {
   alert("닉네임은 필수 입력사항 입니다.");
   return;
  }
  if (!newMobile.value || newMobile.value.trim() === "") {
   alert("번화번호는 필수 입력사항 입니다.");
   return;
  }
  if (!newPassWord.value || newPassWord.value.trim() === "") {
   alert("비밀번호는 필수 입력사항 입니다.");
   return;
  }

  if (!checkEmail) {
   alert("이메일 체크는 필수입니다.");
   return;
  }

  if (newPassWord.value === rePassWord.value) {
   const { data } = await createUserMutation({
    variables: {
     name: newName.value,
     nickName: newNickName.value,
     email: newEmail.value,
     mobile: newMobile.value,
     passWord: newPassWord.value,
     birthDay: newBirthDay.value,
    },
   });

   if (data.createUser) {
    alert("성공했습니다.");
    history.push("");
   } else {
    alert("실패했습니다.");
    return;
   }
  } else {
   alert("비밀번호가 같지않습니다.");
  }
 };

 return (
  <MM01Presenter
   newName={newName}
   newEmail={newEmail}
   newNickName={newNickName}
   newMobile={newMobile}
   newPassWord={newPassWord}
   newBirthDay={newBirthDay}
   rePassWord={rePassWord}
   createUserHandler={createUserHandler}
   checkEmailHandler={checkEmailHandler}
  />
 );
};

export default MM01Container;
