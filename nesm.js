#!/usr/bin/env node
// NESM - NEATEST EXECUTABLE SUPPLY MACHINE
// COPYRIGHT (c) HYPER ULTRA PINK 2022

"use strict";

import { readFile } from "fs/promises";
import { Command, Argument } from "commander";

async function main() {
  // GLOBAL VALUES
  // Read in package metadata for referencing in various commands
  const package_json = JSON.parse(
    await readFile(new URL("package.json", import.meta.url))
  );
  // assembly file to be assembled
  let input_file = "";

  // Process command line arguments
  const program = new Command()
    .name(package_json.name)
    .description(
      "Neatest Executable Supply Machine, a 6502 and 65C02 assembler"
    )
    .version(
      `Neatest Executable Supply Machine Version ${package_json.version}`,
      "-v, --version"
    )
    .usage("[options] [file]")
    .argument("[file]", "assembly file to translate.")
    .action((file) => {
      console.log(`assembling: ${file}`);
      input_file = file;
    })
    .parse(process.argv);

  program.options = program.opts();

  console.log(program.options);
}

// Detect if this is the main module and if so run main
if (import.meta.url.endsWith(process.argv[1])) {
  main();
}
