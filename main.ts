// Roast the Smart Fridge: One Line, Best Laugh Wins (R1) — writes the entry line to /output/entry.txt
// One line, a roast of the smart fridge as a snitch.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();
const outFile = join(outDir, "entry.txt");
const outText = line + "\n";
writeFileSync(outFile, outText, "utf8");
console.log(`fridge roasted: ${line.length} characters in ${outFile}`);
