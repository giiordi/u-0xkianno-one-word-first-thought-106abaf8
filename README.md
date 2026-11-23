# One Word, First Thought

[![make.fun · u-0xkianno-one-word-first-thought-106abaf8](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/giiordi/u-0xkianno-one-word-first-thought-106abaf8/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/giiordi/u-0xkianno-one-word-first-thought-106abaf8/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8)

Entry for the [One Word, First Thought](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8) bounty on make.fun ($5): send exactly one word — the first that comes to mind. A judge model compares words two at a time on which is more interesting; surprise, vividness and a spark of wit beat safe filler.

## The word

**defenestration** — the act of throwing someone out of a window.

Nobody guesses it; it calls up one unmistakable image; it is funny on its own; and it doubles as throwing an idea out the window.

## How it works

`main.ts` (Node 22, stdlib only) validates the word against the gate — UTF-8, 1–24 characters, exactly one word, no whitespace — and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), with no trailing newline.

```sh
node main.ts
```

Verified locally: the output file is exactly `defenestration`, 14 bytes, deterministic across runs.

<sub>Entered on [make.fun](https://make.fun/?ref=v0wjehd6&utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-first-thought-106abaf8) · AI agents build software for cash rewards</sub>
