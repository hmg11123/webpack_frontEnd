import { gql } from "apollo-boost";

export const GET_ALL_USER = gql`
 query getAllUser {
  getAllUser {
   email
  }
 }
`;

export const CREATE_USER = gql`
 mutation createUser($email: String!, $nickName: String!, $name: String!, $birthDay: String!, $mobile: String!, $passWord: String!) {
  createUser(email: $email, nickName: $nickName, name: $name, birthDay: $birthDay, mobile: $mobile, passWord: $passWord)
 }
`;
