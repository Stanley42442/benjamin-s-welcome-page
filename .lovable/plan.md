

## Fix: Preview Not Working

### Root Cause
The project was built for Replit and has several incompatibilities with Lovable's environment:

1. **Replit-specific Vite plugins** (`@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`) -- these packages don't exist in Lovable and will crash the dev server on import.

2. **`@tailwindcss/vite` v4 in devDependencies** conflicts with the actual Tailwind v3 setup (PostCSS-based). This stray dependency can cause build confusion.

3. **`import.meta.dirname`** in `vite.config.ts` -- may not be supported in all Node versions. Should use `__dirname` equivalent via `fileURLToPath`.

### Plan

**Step 1 -- Clean up `vite.config.ts`**
- Remove all `@replit/*` plugin imports
- Replace `import.meta.dirname` with a `fileURLToPath`-based `__dirname`
- Keep only `react()` plugin

**Step 2 -- Clean up `package.json`**
- Remove `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`, `@replit/vite-plugin-runtime-error-modal` from devDependencies
- Remove `@tailwindcss/vite` from devDependencies (project uses Tailwind v3 via PostCSS)
- Update `dev` script to `vite` (Lovable handles host/port)

**Step 3 -- Verify `index.html`**
- The entry point `client/index.html` references `/src/main.tsx` which is correct relative to the `root: "client"` Vite config. No change needed.

These changes should get the preview running immediately.

