eval(require("typescript").transpile(require("fs").readFileSync("./rollup.config.ts").toString(), {...(require("./tsconfig.json") || {}).compilerOptions, module: "commonjs" }));
