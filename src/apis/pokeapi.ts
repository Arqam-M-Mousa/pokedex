import { Cache } from "./cache/cache.js";

const BASE_URL = "https://pokeapi.co/api/v2";

export type ShallowLocations = {
  results: { name: string; url: string }[];
  next: string | null;
  previous: string | null;
};

export type Location = {
  name: string;
  pokemon_encounters: {
    pokemon: {
      name: string;
    };
  }[];
};

export class PokeAPI {
  #cache = new Cache(60_000); // 60s TTL

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${BASE_URL}/location-area`;

    const cached = this.#cache.get<ShallowLocations>(url);
    if (cached) return cached;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch locations");

    const data = await res.json();

    this.#cache.add<ShallowLocations>(url, data);
    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${BASE_URL}/location-area/${locationName}`;

    const cached = this.#cache.get<Location>(url);
    if (cached) return cached;

    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to fetch location");

    const data = await res.json();

    this.#cache.add<Location>(url, data);
    return data;
  }
}
