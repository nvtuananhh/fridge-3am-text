import { mkdirSync, writeFileSync } from "node:fs";

// One line, in the fridge's own small voice: it knows why you're really here.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

const LINE = "It's 3am. You didn't come for food. You came to stand in my light and think about your ex. Again.";

// Gate: lock-screen short, complete, and a single line — fail loudly, don't write a bad entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("LINE must be 1-140 chars, single line, not only whitespace");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
