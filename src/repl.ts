import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .split(/\s+/)
    .map((token) => token.toLowerCase());
}

export async function startREPL(state: State) {
  state.rl.prompt();

  state.rl.on("line", async (line) => {
    const words = cleanInput(line);

    if (words.length === 0) {
      state.rl.prompt();
      return;
    }

    const [commandName, ...args] = words;

    const command = state.commands[commandName];

    if (command) {
      await command.callback(state, ...args);
    } else {
      console.log("Unknown command");
    }

    state.rl.prompt();
  });
}
