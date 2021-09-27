import { dataset } from "../../dataset";
import { resolver } from "../../functions/resolver";
import { PlayerProps } from "../../models/Player";
import { TeamProps } from "../../models/Team";

export const team = resolver<PlayerProps, TeamProps>(async (player) => {
  const team = dataset.teams().find((team) => team.teamId === player.teamId);

  return team;
});
