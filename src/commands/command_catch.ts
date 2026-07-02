import type { State } from "../state.js";

export async function commandCatch(
  state: State,
  ...args: string[]
): Promise<void> {
  const name = args[0]?.toLowerCase();

  if (!name) {
    console.log("Usage: catch <pokemon>");
    return;
  }

  console.log(`Throwing a Pokeball at ${name}...`);

  try {
    const pokemon = await state.pokeAPI.fetchPokemon(name);

    const baseExp = pokemon.base_experience ?? 100;

    // higher base exp => harder to catch
    const catchChance = Math.max(0.05, 1 - baseExp / 300);

    const caught = Math.random() < catchChance;

    if (caught) {
      state.pokedex[name] = pokemon;
      console.log(`${name} was caught!`);
    } else {
      console.log(`${name} escaped!`);
    }
  } catch {
    console.log(`${name} not found`);
  }
}
