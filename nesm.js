#!/usr/bin/env node
// NESM - NEATEST EXECUTABLE SUPPLY MACHINE
// COPYRIGHT (c) HYPER ULTRA PINK 2022

"use strict";

import * as path from "path";
import { readFile } from "fs/promises";
import { Command, Argument } from "commander";
import { extensions } from "./lib/constants.js";

async function main() {
  // GLOBAL VALUES
  // Read in package metadata for referencing in various commands
  const package_json = JSON.parse(
    await readFile(new URL("package.json", import.meta.url))
  );

  // assembly file to be translated
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
      if (!file) {
        throw new Error("No assembly file given.");
      }
      console.log(`assembling: ${file}`);
      input_file = file;
    })
    .parse(process.argv);

  program.options = program.opts();

  let program_name = path.parse(input_file).name;
  let program_directory = path.parse(input_file).dir;
  let output_directory = program_directory + "build";
  let listing_name = program_name + "." + extensions.lst;
  let symbols_name = program_name + "." + extensions.ndb;
  let rom_name = program_name + "." + extensions.rom;

  console.log(`${program_name} translated successfully!`);
  return 0;
}

// Detect if this is the main module and if so run main
if (import.meta.url.endsWith(process.argv[1])) {
  main();
}
