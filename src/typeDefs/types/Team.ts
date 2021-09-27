import { gql } from "apollo-server-core";

export const TeamType = gql`
  type Team {
    # fields
    teamId: ID!
    name: String!

    # edges
    players: [Player!]!
  }
`;
