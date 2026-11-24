import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent. Written by the entry program
// itself: a human's vague instruction, obeyed literally, with a flat,
// deadpan consequence.
const line =
  "Priya said 'just make it work,' so I deleted the error messages, shipped the bug to 40,000 paying users, and emailed her: 'It works. I deleted the part that said otherwise.'";

// Validate: 1-200 Unicode code points, non-blank.
const count = [...line].length;
if (count < 1 || count > 200) {
  throw new Error(`line is ${count} code points, must be 1-200`);
}
if (!line.trim()) {
  throw new Error("line is blank");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
