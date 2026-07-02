const BASE_URL = "https://pokeapi.co/api/v2";

export type ShallowLocations = {
  results: { name: string; url: string }[];
  next: string | null;
  previous: string | null;
};

export type Location = {
  name: string;
};

export class PokeAPI {
  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${BASE_URL}/location-area`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch locations");

    return res.json();
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const res = await fetch(`${BASE_URL}/location-area/${locationName}`);
    if (!res.ok) throw new Error("Failed to fetch location");

    return res.json();
  }
}
