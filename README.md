# LILXBOL ⏱

A personal, offline study timer for Windows with a dark terminal-inspired aesthetic.

Built for tracking deep-work sessions, analyzing them, and keeping a daily journal.

![logo](logo.png)

## Features

- **Animated total timer** — a smooth odometer-style counter that flashes `+1H` and glows every time your lifetime total crosses another hour (YPT-style)
- **Sessions** — create custom sessions, each with its own name, color and tags
- **Reports** — daily / weekly / monthly / yearly charts with a full session breakdown, percentages and a detailed log of every record
- **Calendar heatmap** — GitHub-style month view where each day's cell glows brighter the more you studied, plus a per-day detail panel
- **Daily journal** — a "What I did this day" note attached to every day, saved forever
- **Task list** — a simple daily to-do with open/done filters
- **Data never expires** — records, reports and journal entries are kept forever; JSON export/import for backups
- **Keyboard shortcut** — `Space` to start/stop the timer

Everything is stored locally (localStorage). No accounts, no internet required.

## Run the web version

Just open `Lilxbol.html` in any browser (Chrome/Edge recommended). That's it.

## Build the Windows .exe

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dist
```

The portable executable is output to `dist/Lilxbol.exe` — single file, no installer needed.

A CI workflow (`.github/workflows/build.yml`) also builds the exe automatically on every push; grab it from the Actions tab artifacts, or from the Releases page when a `v*` tag is pushed.

## Tech

- Single-file vanilla HTML/CSS/JS app (no frameworks, no build step for the UI)
- Wrapped with [Electron](https://www.electronjs.org) for the desktop build

---

Made with ❤ and neon green.
