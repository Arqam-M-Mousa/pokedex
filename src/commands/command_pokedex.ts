import type { State } from "../state.js";

export async function commandPokedex(state: State): Promise<void> {
  const entries = Object.keys(state.pokedex);

  console.log("Your Pokedex:");

  if (entries.length === 0) {
    return;
  }

  for (const name of entries) {
    console.log(` - ${name}`);
  }
}
