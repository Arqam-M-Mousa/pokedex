import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .split(/\s+/)
    .map((token) => token.toLowerCase());
}

export function startREPL(state: State) {
  state.rl.prompt();

  state.rl.on("line", (line) => {
    const input = line.trim();

    const command = state.commands[input];

    if (command) {
      command.callback(state);
    } else {
      console.log("Unknown command");
    }

    state.rl.prompt();
  });
}
