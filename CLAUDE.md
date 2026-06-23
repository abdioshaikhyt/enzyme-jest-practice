# CLAUDE.md

## Project overview
This is a React practice project focused on Jest and Enzyme testing. Keep changes small, readable, and beginner-friendly unless asked otherwise.

## Project root
Work from the React project root:

`enzyme-practice/`

Important files and folders:
- `package.json` — npm scripts and dependencies
- `src/Track.jsx` — Track component
- `src/Track.Test.js` — Track component tests
- `src/setupTests.js` or `src/setupTest.js` — Jest/Enzyme setup, depending on which file exists
- `src/Images/` — local image assets such as `thegoat.jpg`
- `src/App.js` and `src/App.test.js` — default app files

Do not edit `node_modules/`. Do not change `package-lock.json` unless dependencies are intentionally installed or updated.

## Commands
Use these commands from the project root:

- `npm test` — run Jest in watch mode
- `npm test -- --watchAll=false` — run tests once
- `npm start` — start the React dev server

Before saying a task is finished, run the relevant test command when possible.

## Testing rules
This project uses Jest and Enzyme.

Prefer:
- `shallow()` for simple component-rendering tests
- `mount()` only when full DOM behavior is actually needed
- `jest.fn()` for mocked callback props
- small tests that check one behavior at a time

When writing or fixing tests:
- Import React in test files.
- Import the component under test directly from its file.
- Keep mock data close to the test unless multiple tests reuse it.
- Match prop names exactly with the component API.
- Avoid testing implementation details unless the assignment specifically requires it.
- Make sure image imports use the correct relative path, such as `./Images/thegoat.jpg` from files inside `src/`.

## Component conventions
For `Track.jsx`:
- Keep it as a simple presentational React component unless asked to add state or behavior.
- Expected track-related props may include values like `trackId`, `trackName`, `artistName`, `collectionName`, and `artworkUrl100`.
- Do not rename props unless all related tests and calling components are updated too.
- Use readable JSX and avoid unnecessary abstraction.

## Style expectations
- Keep explanations short and practical.
- Show the exact file being changed before making edits.
- Prefer minimal diffs over large rewrites.
- Do not introduce new libraries unless asked.
- If something is ambiguous, inspect the relevant file first instead of guessing.

## Workflow instructions for Claude Code
When asked to fix or add something:
1. Identify the exact file or files involved.
2. Explain the intended change briefly.
3. Make the smallest safe edit.
4. Run or suggest the relevant test command.
5. Summarize what changed and what test result was observed.

When debugging:
- Start with the failing test or error message.
- Check imports, file paths, component exports, prop names, and Jest/Enzyme setup before doing larger rewrites.
- Do not solve one test by breaking the component behavior.

## Ignore / avoid reading unless necessary
Avoid spending context on:
- `node_modules/`
- `build/`
- `coverage/`
- `.git/`
- large generated files
- logs
