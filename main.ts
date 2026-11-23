import { mkdirSync, writeFileSync } from "node:fs";

// One Word, First Thought — the entry is exactly one word.
//
// Word choice, against the judge's brief (surprise first, then vividness,
// then wit/double meaning): "defenestration" — the act of throwing someone
// out of a window. Nobody guesses it; it calls up one unmistakable image;
// it is funny on its own; and it doubles as throwing an idea out the window.
const WORD = "defenestration";

// Gate: /output/entry.txt must be UTF-8 text of 1-24 characters, not only
// whitespace, and the entry must be exactly one word (no spaces, no newline).
function validate(word: string): void {
  if (word.length < 1 || word.length > 24) {
    throw new Error(`entry must be 1-24 characters, got ${word.length}`);
  }
  if (word.trim() !== word || /\s/.test(word)) {
    throw new Error("entry must be exactly one word with no whitespace");
  }
}

validate(WORD);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
console.log(`wrote ${WORD.length}-char entry to ${outDir}/entry.txt`);
