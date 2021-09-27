import { dataset } from "../../dataset";
import { resolver } from "../../functions/resolver";

export const players = resolver(async () => {
  return dataset.players();
});
