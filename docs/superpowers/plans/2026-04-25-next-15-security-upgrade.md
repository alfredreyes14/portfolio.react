# Next 15 Security Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the app to patched `15.x`/`19.x` framework versions that address the verified security advisories without introducing avoidable compatibility risk.

**Architecture:** Keep the existing App Router application structure and update only the framework packages required for the security fixes. Regenerate the lockfile through a standard install, then verify the upgrade through lint and production build so any compatibility issues surface immediately.

**Tech Stack:** Next.js 15, React 19, npm, Tailwind CSS 4

---

### Task 1: Update the security-relevant dependencies

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Update the dependency declarations**

Set these exact versions in `package.json`:

```json
{
  "dependencies": {
    "next": "15.5.15",
    "react": "19.1.6",
    "react-dom": "19.1.6",
    "react-icons": "^5.5.0"
  }
}
```

- [ ] **Step 2: Refresh the lockfile and installed packages**

Run: `npm install`
Expected: install completes successfully and updates `package-lock.json` to the resolved patched versions.

- [ ] **Step 3: Confirm the installed versions**

Run: `npm ls next react react-dom --depth=0`
Expected:

```text
next@15.5.15
react@19.1.6
react-dom@19.1.6
```

### Task 2: Verify the app still works on the upgraded versions

**Files:**
- Modify: `next.config.mjs` only if the upgrade surfaces a config compatibility issue
- Modify: application files only if build or lint failures require an explicit compatibility fix

- [ ] **Step 1: Run lint**

Run: `npm run lint`
Expected: command exits successfully, or reveals a concrete compatibility issue to fix.

- [ ] **Step 2: Run the production build**

Run: `npm run build`
Expected: command exits successfully and produces a production build.

- [ ] **Step 3: Fix any upgrade regressions and re-run verification**

If either verification command fails, make the smallest compatible fix needed, then re-run:

```bash
npm run lint
npm run build
```

Expected: both commands exit successfully after the fix.
