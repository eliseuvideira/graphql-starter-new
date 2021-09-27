import { dataset } from "../../dataset";
import { resolver } from "../../functions/resolver";
import { PlayerProps } from "../../models/Player";
import { TeamProps } from "../../models/Team";

export const players = resolver<TeamProps, PlayerProps[]>(async (team) => {
  const players = dataset
    .players()
    .filter((player) => player.teamId === team.teamId);

  return players;
});
