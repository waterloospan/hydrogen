#!/usr/bin/env node
const tpl = `{
    "port": 3000,
    "workerFile": "dist/worker/index.js",
    "assetsDir": "dist/client",
    "watch": true,
    "buildCommand": "yarn build",
    "autoReload": true,
    "buildWatchPaths": ["./src"],
    "module": true,
    "env": {}
}
`;

// eslint-disable-next-line no-console
console.log(tpl);
