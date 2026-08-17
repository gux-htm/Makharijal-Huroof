# Tajweed Makhraj Guide

## Overview

This is a static Tajweed learning guide served by a small Node.js/Express server. It includes Arabic letter cards, makhraj illustrations, search and theme controls, and timing-based pronunciation controls for the full audio sequence.

## Run on Replit

The configured `Start application` workflow runs:

```bash
node server.js
```

The server listens on port 5000 for the Replit web preview.

## Assets

- Letter illustrations are served from `images/letters/`.
- Add the user-provided recording at `audio/mukharaj.mp3` to enable the audio player and every letter segment button.
- The audio timing data is kept in `index.html` and follows the supplied start/end marks.