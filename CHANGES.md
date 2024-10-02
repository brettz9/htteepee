# htteepee CHANGES

## 0.6.0 (unreleased)

BREAKING CHANGE:
Require Node 18+

- docs: provide examples/demos using multiple middleware
- chore: Rename folder `examples`->`demos`
- chore: lint Markdown/HTML
- chore: update devDeps

## 0.5.0

- Breaking change: Stop accepting middleware array arguments (to flatten them)
  and only expect callbacks
- Enhancement: Add `createMiddleware` for even easier utility to create a
  middleware server

## 0.4.0

- License: Rename file to reflect type (MIT); add lbs
- *Refactoring: Change `stack` from bundled dep. to dep*
- Refactoring: Prefer const., use spread operator, 2-sp. indent
- Linting: Add ESLint (config ash-nazg); add ignore file; .remarkrc; Docs
- Git: Add ignore file
- npm: Add ignore file (for later use); add `package-lock.json`

## 0.3.0

- Stable version
