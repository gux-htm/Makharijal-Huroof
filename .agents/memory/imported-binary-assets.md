---
name: Imported binary assets
description: Validation guidance for media files imported into static web projects.
---

Imported projects may contain media files that exist at the expected path but are not valid binary files, or may omit referenced media entirely. Validate with `file` and an actual HTTP request before debugging only the URL.

**Why:** A path fix cannot repair a corrupted image or replace a missing audio recording; the UI should provide an explicit fallback and the required asset path.

**How to apply:** Check representative images and every required media route after import, keep working assets in a predictable static directory, and handle missing media visibly instead of silently failing.