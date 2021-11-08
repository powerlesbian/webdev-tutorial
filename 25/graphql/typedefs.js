import { gql } from "apollo-server-core";

export default gql`
  type User {
    username: String
    password: String
  }
  type Query {
    hello: String
    getUsers: [User]
  }
`;
