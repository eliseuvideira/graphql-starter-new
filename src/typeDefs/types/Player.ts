import { gql } from "apollo-server-core";

export const PlayerType = gql`
  type Player {
    # fields
    playerId: ID!
    name: String!
    teamId: ID!
    role: String!
    topHero: String

    # edges
    team: Team!
  }
`;
