import { Cache } from "../apis/cache/cache.js";
import { test, expect } from "vitest";

test.concurrent.each([
  {
    key: "https://example.com",
    val: "testdata",
    interval: 500,
  },
  {
    key: "https://example.com/path",
    val: "moretestdata",
    interval: 1000,
  },
])("Cache TTL $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  expect(cache.get(key)).toBe(val);

  await new Promise((r) => setTimeout(r, interval * 2));

  expect(cache.get(key)).toBeUndefined();

  cache.stopReapLoop();
});
