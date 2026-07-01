import { createInterface } from "node:readline";
import { getCommands } from "./registry.js";
import type { CLICommand } from "./command.js";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .split(/\s+/)
    .map((token) => token.toLowerCase());
};

export function startREPL(): void {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  const commands = getCommands();

  rl.prompt();

  rl.on("line", (input: string) => {
    const [commandName] = cleanInput(input);

    if (!commandName) {
      rl.prompt();
      return;
    }

    const command = commands[commandName];

    if (!command) {
      console.log("Unknown command");
      rl.prompt();
      return;
    }

    try {
      command.callback(commands);
    } catch (err) {
      console.log("Error executing command:", err);
    }

    rl.prompt();
  });
};
