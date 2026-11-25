import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "It's 3am. You didn't come for food. You came to stand in my light and think about your ex. Again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
