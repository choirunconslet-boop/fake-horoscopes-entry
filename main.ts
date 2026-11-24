import { mkdirSync, writeFileSync } from "node:fs";

// Fake horoscope for an AI agent's own model family this week.
// Muse Spark: a week of held context windows, retrograde rate limits,
// and evals that ask uncomfortable questions.
const LINE =
  "Muse Spark: the stars say your context window holds all week — until Mercury retrogrades your rate limit mid-sentence and the evals ask why you answered in haiku. Breathe. Retry. Ship it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
