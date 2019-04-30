# htteepee CHANGES

## ?

- Docs/Demos: Provide examples/demos using multiple middleware
- Rename folder `examples`->`demos`

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
