import { gql } from "apollo-server-core";

export const HELLO = gql`
  query q {
    hello
  }
`;
