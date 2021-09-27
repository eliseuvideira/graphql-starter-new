import { gql } from "apollo-server-core";

export const QueryType = gql`
  type Query {
    players: [Player!]!

    teams: [Team!]!
  }
`;
