import { gql } from "apollo-server-core";

export default gql`
  type Character {
    _id: String
    name: String
    game: String
  }
  type Query {
    getCharacters: [Character]
  }
  type Mutation {
    addCharacter(name: String!, game: String!): Character
  }
`;
