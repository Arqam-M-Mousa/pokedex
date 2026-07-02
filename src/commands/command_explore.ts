import type { State } from "../state.js";

export async function commandExplore(state: State, ...args: string[]) {
  const areaName = args[0];

  if (!areaName) {
    console.log("Usage: explore <location-area>");
    return;
  }

  console.log(`Exploring ${areaName}...`);

  try {
    const location = await state.pokeAPI.fetchLocation(areaName);

    const names = location.pokemon_encounters?.map((e) => e.pokemon.name) ?? [];

    console.log("Found Pokemon:");
    for (const name of names) {
      console.log(` - ${name}`);
    }
  } catch {
    console.log("Failed to explore area");
  }
}
