import { register } from "node:module";

// Lets node:test load the app's `@/` imports and extensionless TypeScript files.
register("./resolve-ts-hook.mjs", import.meta.url);
