# Pokédex

A terminal-based Pokédex built with TypeScript, implementing a REPL-driven command system with intelligent caching and in-memory state management for efficient Pokémon data exploration.

## Overview

Pokédex is a sophisticated command-line application designed for querying and exploring Pokémon information through an interactive interface. The application leverages the PokeAPI to provide comprehensive Pokémon data while maintaining performance through strategic caching mechanisms and state management optimization.

This project demonstrates best practices in building scalable terminal applications, including asynchronous data handling, in-memory caching strategies, and user-friendly REPL-based command interfaces.

## Features

- **Interactive REPL Interface** - Intuitive command-driven system for querying Pokémon data with support for multiple commands and arguments
- **Smart Caching System** - Reduces API calls through efficient caching mechanisms, improving response times for repeated queries
- **In-Memory State Management** - Maintains application state across sessions for optimal performance and responsiveness
- **PokeAPI Integration** - Access comprehensive Pokémon data including statistics, abilities, types, and evolutionary chains
- **Fast Data Retrieval** - Optimized lookup and search capabilities for quick Pokémon information access
- **Clean Terminal Output** - Properly formatted output designed specifically for terminal environments

## Prerequisites

- Node.js 20.x or higher (see `.nvmrc` for the recommended version)
- npm 10.x or higher

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Arqam-M-Mousa/pokedex.git
cd pokedex
npm install
```

## Usage

### Development Mode

Compile TypeScript and run the application with automatic rebuilds:

```bash
npm run dev
```

### Production Mode

Build the project and run the compiled JavaScript:

```bash
npm run build
npm start
```

### Testing

Run the test suite using Vitest:

```bash
npm test
```

## Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run build` | Compile TypeScript source code to JavaScript in the dist directory |
| `npm start` | Execute the compiled application |
| `npm run dev` | Compile and run the application in a single command |
| `npm test` | Run the test suite with Vitest in run mode |

## Project Structure

```
pokedex/
├── src/                          # TypeScript source code
│   ├── main.ts                   # Application entry point
│   ├── repl.ts                   # REPL command system implementation
│   ├── cache.ts                  # Caching layer implementation
│   ├── api.ts                    # PokeAPI client
│   └── types.ts                  # TypeScript type definitions
├── dist/                         # Compiled JavaScript output (generated)
├── package.json                  # Project dependencies and configuration
├── package-lock.json             # Locked dependency versions
├── tsconfig.json                 # TypeScript compiler configuration
├── .nvmrc                        # Node.js version specification
├── .gitignore                    # Git ignore patterns
└── README.md                     # This file
```

## Technology Stack

- **Language**: TypeScript 6.x - Provides type safety and modern JavaScript features
- **Runtime**: Node.js with ES Modules - Ensures compatibility with modern JavaScript standards
- **Build System**: TypeScript Compiler (tsc) - Compiles TypeScript to JavaScript
- **Testing Framework**: Vitest 4.x - Fast unit testing framework with TypeScript support
- **API**: PokeAPI - Free, comprehensive Pokémon data source

## Architecture

The application follows a modular architecture with clear separation of concerns:

### REPL System
The REPL (Read-Eval-Print Loop) handles user input, parses commands, and manages the interactive experience. Commands are dispatched to appropriate handlers based on user input.

### Caching Layer
The caching system stores previously fetched Pokémon data to minimize API calls and reduce latency for repeated queries. The cache operates in-memory for fast access.

### API Integration
The PokeAPI client handles all HTTP requests to the PokeAPI, managing rate limiting, error handling, and response parsing.

### State Management
In-memory state stores application context, including user session data, configuration, and recent queries for optimization.

## API Integration Details

This application interfaces with the PokeAPI (https://pokeapi.co/), a free and open-source Pokémon API. All requests are made over HTTPS and are subject to rate limiting. The caching layer is designed to respect API rate limits while providing responsive user experiences.

## Command Examples

Query Pokémon by name:
```
> search pikachu
```

Retrieve detailed statistics:
```
> stats pikachu
```

Get evolutionary chain information:
```
> evolution pikachu
```

List Pokémon of a specific type:
```
> type electric
```

## Performance Considerations

The application implements several performance optimizations:

- In-memory caching reduces redundant API calls
- Batch operations minimize network overhead
- Efficient data structures for quick lookups
- Stream processing for large datasets
- TypeScript optimization for type safety and performance

## Error Handling

The application includes comprehensive error handling for:

- Network failures and API timeouts
- Invalid user input and malformed commands
- Missing or corrupted cached data
- Rate limit exceeded responses

## Development Guidelines

### Code Style

The project maintains consistent TypeScript practices:

- Strict type checking enabled in tsconfig.json
- Consistent naming conventions for files and exports
- Modular file organization by feature

### Testing

Write tests for all new features and bug fixes using Vitest:

```bash
npm test
```

### Building

Always build before committing to ensure TypeScript compilation succeeds:

```bash
npm run build
```

## License

ISC

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

Please ensure all tests pass and the code follows the project's conventions.

## Support

For issues, questions, or suggestions, please open an issue on the GitHub repository at https://github.com/Arqam-M-Mousa/pokedex/issues

## Author

Arqam M Mousa

---

This project is built with TypeScript and Node.js to provide a professional, maintainable solution for Pokémon data exploration.
