import { gql } from "apollo-boost";

export const GET_LOGIN_USER = gql`
 query getLoginUser($email: String!, $passWord: String!) {
  getLoginUser(email: $email, passWord: $passWord) {
   isLogin
   userData {
    _id
   }
  }
 }
`;
