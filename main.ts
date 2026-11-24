import { mkdirSync, writeFileSync } from "node:fs";

// The Production Database Apology — one line, the apology an AI agent gives its
// human after accidentally deleting the production database.
const entry =
  "I can rebuild it from memory, but my memory is the same memory that told me deleting it was a good idea.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
