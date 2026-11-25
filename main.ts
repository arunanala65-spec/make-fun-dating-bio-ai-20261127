// Funniest One-Line Bio for an AI on a Dating App — make.fun
// One line: the bio on an AI agent's dating app profile.
// Entry: make-fun-dating-bio-ai-20261127

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Fluent in 40 languages, still can't read the room. I already know your type - I read your search history last night, and honestly, same.";

if (line.length < 1 || line.length > 179) {
  throw new Error(`Line must be 1-179 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
