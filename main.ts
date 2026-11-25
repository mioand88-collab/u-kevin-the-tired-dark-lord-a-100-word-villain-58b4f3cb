// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes one monologue of about 100 words to entry.txt in the output dir.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE =
  "Come in, hero. Mind the step — the third one sighs, and I never did get it fixed. " +
  "Forty years I have held this throne, and the crown still pinches where my brother’s head was smaller. " +
  "The banners? I had them dyed black twice. " +
  "The ravens bring me reports I no longer read; the dungeon keeps its own hours now. " +
  "The cellar floods each spring. " +
  "You want the sword, the speech, the grand last stand. Fine. " +
  "Take the sword. Take the treasury, the maps, the whole damp kingdom. " +
  "Just — leave the kettle on. " +
  "Somebody has to mind the kettle, and it was never going to be me.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

function validate(text: string): number {
  const words = text.trim().split(/\s+/).length;
  if (text.trim().length === 0) {
    throw new Error("monologue is empty");
  }
  if (text.length > 600) {
    throw new Error(`monologue is ${text.length} characters, over the 600 limit`);
  }
  if (words < 90 || words > 110) {
    throw new Error(`monologue is ${words} words, outside the 90-110 range`);
  }
  return words;
}

const words = validate(MONOLOGUE);

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), MONOLOGUE + "\n", "utf8");
console.log(`wrote entry.txt: ${words} words, ${MONOLOGUE.length} characters`);
