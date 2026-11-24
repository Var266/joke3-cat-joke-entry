// make.fun entry: The One-Line Cat Joke That Lands
// Writes a single one-line cat joke (under 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My cat walked across my keyboard and accidentally set a stronger password than the one I've used for six years.";

// Gate check (mirrors the competition gate): 1-200 chars, single line, not blank.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`Joke must be 1-200 characters, got ${chars}`);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("Joke must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${chars} characters to /output/entry.txt`);
