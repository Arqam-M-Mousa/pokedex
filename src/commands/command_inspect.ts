import type { State } from "../state.js";

export async function commandInspect(
  state: State,
  ...args: string[]
): Promise<void> {
  const name = args[0]?.toLowerCase();

  if (!name) {
    console.log("Usage: inspect <pokemon>");
    return;
  }

  const pokemon = state.pokedex[name];

  if (!pokemon) {
    console.log("you have not caught that pokemon");
    return;
  }

  console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);

  console.log("Stats:");
  for (const stat of pokemon.stats) {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
  }

  console.log("Types:");
  for (const t of pokemon.types) {
    console.log(`  - ${t.type.name}`);
  }
}
