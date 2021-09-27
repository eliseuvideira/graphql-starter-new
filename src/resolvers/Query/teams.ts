import { dataset } from "../../dataset";
import { resolver } from "../../functions/resolver";

export const teams = resolver(async () => {
  return dataset.teams();
});
