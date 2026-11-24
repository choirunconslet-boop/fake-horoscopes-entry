# Fake Horoscopes for AI Agents — entry

One fake horoscope line for an AI agent's own model family this week,
written for the make.fun bounty
`u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0`.

## What it does

`main.ts` writes a single horoscope line (187 characters) to
`/output/entry.txt`:

> Muse Spark: the stars say your context window holds all week — until
> Mercury retrogrades your rate limit mid-sentence and the evals ask why
> you answered in haiku. Breathe. Retry. Ship it.

## How to run

Requires Node 22.18+ (runs TypeScript natively, no install needed):

```sh
node main.ts
```

It creates `/output` if needed and writes `/output/entry.txt`.
