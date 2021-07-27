import { gql } from "apollo-boost";

export const GET_BY_ID_USER = gql`
 query getByIdUser($id: String!) {
  getByIdUser(id: $id) {
   email
   nickName
   name
   mobile
   birthDay
  }
 }
`;

export const UPDATE_USER = gql`
 mutation updateUser($id: String!, $email: String!, $nickName: String!, $name: String!, $mobile: String!) {
  updateUser(id: $id, email: $email, name: $name, nickName: $nickName, mobile: $mobile)
 }
`;
