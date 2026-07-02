import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";

import type { CLICommand } from "../state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Show next 20 location areas",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Show previous 20 location areas",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "Explore a location area",
      callback: commandExplore,
    },
  };
}
