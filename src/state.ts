import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./commands/registry.js";
import { PokeAPI } from "./apis/pokeapi.js";

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> ",
  });

  return {
    rl,
    commands: getCommands(),
    pokeAPI: new PokeAPI(),
    nextLocationsURL: null,
    prevLocationsURL: null,
  };
}
