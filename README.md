# Pokédex

A small terminal-based Pokédex built with TypeScript. It uses a simple REPL to explore Pokémon data from the PokeAPI, with basic caching and in-memory state to reduce repeated network calls.

## Features

- REPL interface for running commands in a loop
- Basic in-memory caching to reduce API requests
- Lightweight session state during runtime
- PokeAPI integration for Pokémon data (stats, types, abilities)

## Prerequisites

- Node.js 20+ (see `.nvmrc`)
- npm 10+

## Installation

```bash
git clone https://github.com/Arqam-M-Mousa/pokedex.git
cd pokedex
npm install
```

## Usage

### Development

```bash
npm run dev
```

### Testing

```bash
npm test
```

## Architecture

REPL handles input parsing and command dispatch in a loop.

Cache stores previous API responses in memory to avoid redundant requests.

API layer wraps PokeAPI calls with basic error handling.

State keeps minimal in-memory session data for runtime use.
