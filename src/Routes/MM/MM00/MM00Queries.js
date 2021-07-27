import { gql } from "apollo-boost";

export const CREATE_USER = gql`
    createUser($email: String!, $nickName:String!,$mobile: String!, $follow: String!, $totalFollow: String!, createdAt: $String!)
`;
