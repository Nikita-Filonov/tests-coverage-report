# Tests coverage report

[![CI](https://github.com/Nikita-Filonov/tests-coverage-report/actions/workflows/workflow-test.yml/badge.svg)](https://github.com/Nikita-Filonov/tests-coverage-report/actions/workflows/workflow-test.yml)
[![codecov](https://codecov.io/gh/Nikita-Filonov/tests-coverage-report/branch/main/graph/badge.svg)](https://codecov.io/gh/Nikita-Filonov/tests-coverage-report)
[![GitHub stars](https://img.shields.io/github/stars/Nikita-Filonov/tests-coverage-report?style=social)](https://github.com/Nikita-Filonov/tests-coverage-report/stargazers)

You can see a report example [here](https://nikita-filonov.github.io/tests-coverage-tool/).

## Development

Use Node.js 24 LTS (24.15 or newer) and npm. To override the public `VITE_` settings, copy `.env.example` to `.env`.

```shell
npm ci
npm run dev
```

The UI reads report data from the `<script id="state">` element in `index.html`. To load a local `state/state.json`,
run `npm run load-state` before starting Vite.

Run the same checks as CI with:

```shell
npm run check
```

`npm run build` writes `build/index.html` with JavaScript, CSS and the logo inlined for `tests-coverage-tool`.
`npm run test:watch` starts tests in watch mode; `npm run test:coverage` checks the 90% coverage thresholds.

If you have any questions, you can ask [@Nikita Filonov](https://t.me/sound_right).
