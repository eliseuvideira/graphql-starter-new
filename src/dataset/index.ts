import path from "path";
import { PlayerProps } from "../models/Player";
import { TeamProps } from "../models/Team";

const players: () => PlayerProps[] = () =>
  require(path.join(__dirname, "..", "dataset", "players.json"));

const teams: () => TeamProps[] = () =>
  require(path.join(__dirname, "..", "dataset", "teams.json"));

let __players: PlayerProps[] | null = null;
let __teams: TeamProps[] | null = null;

export const dataset = {
  players: () => {
    if (!__players) {
      __players = players();
    }
    return __players;
  },
  teams: () => {
    if (!__teams) {
      __teams = teams();
    }
    return __teams;
  },
};
