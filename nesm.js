// NESM - NEATEST EXECUTABLE SUPPLY MACHINE
// COPYRIGHT (c) HYPER ULTRA PINK 2022

"use strict";

import { readFile } from "fs/promises";
import { Command } from "commander";

async function main() {
  // GLOBAL VALUES
  const package_json = JSON.parse(
    await readFile(new URL("package.json", import.meta.url))
  );

  const program = new Command();

  program
    .version(
      `Neatest Executable Supply Machine Version ${package_json.version}`,
      "-v, --version"
    )
    .usage("[OPTIONS] FILE")
    .option("-f, --flag", "Detects if the flag is present.")
    .option("-c, --custom <value>", "Overwriting value.", "Default")
    .parse(process.argv);

  const options = program.opts();

  const flag = options.flag ? "Flag is present." : "Flag is not present.";

  console.log("Flag:", `${flag}`);
  console.log("Custom:", `${options.custom}`);
}

if (import.meta.url.endsWith(process.argv[1])) {
  main();
}
