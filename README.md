# Enzyme & Jest Practice

A practice project for learning React component testing fundamentals using Jest and Enzyme.

## Why React 16?

Enzyme does not support React 18 or 19. To learn Enzyme properly, this project runs on **React 16** instead of the latest version, allowing the use of `enzyme-adapter-react-16`.

## Compatibility Fixes

Setting up Enzyme alongside a modern `create-react-app` toolchain surfaced several Node.js compatibility issues that aren't well documented. These are solved in `src/setupTests.js`:

- `TextDecoder` / `TextEncoder` not defined
- `ReadableStream` / `WritableStream` / `TransformStream` not defined
- `MessageChannel` / `MessagePort` not defined
- `cheerio` version conflict with Enzyme's internal dependency (resolved by pinning `cheerio@1.0.0-rc.12`)

If you're hitting similar errors trying to run Enzyme on a modern Node/React setup, check `src/setupTests.js` for the polyfills used.

## Setup

```bash
npm install --legacy-peer-deps
npm run test
```

The `--legacy-peer-deps` flag is required because `@testing-library/react` (installed by default with `create-react-app`) expects React 18/19, conflicting with the React 16 downgrade.

## What's Tested

### `Track` component
- Renders track details (name, artist, album, artwork)
- Displays correct button text based on playlist state ("Add" / "Added")
- Disables the Add button when the track is already in the playlist
- Calls `addTrack` when the Add button is clicked
- Conditionally renders the Remove button based on props
- Calls `removeTrack` when the Remove button is clicked

### `SearchBar` component
- Renders the form, input, and submit button
- Updates input value on user typing (controlled input)
- Calls `onSearch` with the input value on valid submission
- Does NOT call `onSearch` when input is empty or whitespace
- Renders the submit button with the correct label

## Tools Used

- [Jest](https://jestjs.io/) — test runner and assertion library
- [Enzyme](https://enzymejs.github.io/enzyme/) — React component testing utilities
- `enzyme-adapter-react-16` — adapter for React 16 compatibility

## Notes

This is a learning project, not a production app. The goal was to build solid fundamentals in component testing — render checks, prop validation, simulated user events, and conditional rendering — before moving on to modern tooling like React Testing Library.
