#!/usr/bin/env node
// NESM - NEATEST EXECUTABLE SUPPLY MACHINE
// COPYRIGHT (c) HYPER ULTRA PINK 2022

"use strict";

import * as path from "path";
import { readFile } from "fs/promises";
import { Command, Argument } from "commander";
import {
  base_instruction_set,
  pseudo_instruction_set,
} from "./lib/instructions.js";
import * as nesm from "./lib/lib.js";
import * as nes from "./lib/machine_nes.js";

async function main() {
  // read in package metadata for referencing in various commands
  const package_json = JSON.parse(
    await readFile(new URL("package.json", import.meta.url))
  );

  // assembly file to be translated
  let input_file = "";

  // process command line arguments
  const program = new Command()
    .name(package_json.name)
    .description(
      "Neatest Executable Supply Machine, a 6502 and 65C02 assembler"
    )
    .version(
      `Neatest Executable Supply Machine Version ${package_json.version}`,
      "-v, --version"
    )
    .usage("[options] <assembly file>")
    .argument("[file]", "assembly file to translate.")
    .option("-l, --headerless", `Skip header generation for ROM files.`, false)
    .option("-m, --metrics", "Show various metrics after translation", false)
    .option("-s, --space", "Show segment and ROM bank usage.", false)
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
  let listing_name = program_name + "." + nes.extensions.lst;
  let symbols_name = program_name + "." + nes.extensions.ndb;
  let rom_name = program_name + "." + nes.extensions.rom;

  // load assembly to be processed into memory
  let input_assembly;
  try {
    input_assembly = await readFile(input_file, { encoding: "utf8" });
  } catch (error) {
    throw new Error(error);
  }
  console.log(input_assembly);

  // initialize ROM
  let rom = Array(8192 * 128).fill(0xff);
  let map = Array(8192 * 128).fill(0xff);

  // initialize instruction tables
  let macro_instruction_set = {};
  let function_instruction_set = {
    ...base_instruction_set,
    ...pseudo_instruction_set,
  };
  let machine_instruction_set = nes.machine_instruction_set;

  // translate assembly to machine code
  // TODO:

  // write header and rom to output files
  // TODO:

  // report segment and ROM usage
  if (program.options.space) {
    console.log(`Cartridge Segment Space Usage: ${nesm.calculate_segment_usage()}`);
    console.log(`Cartridge ROM Space Usage: ${nesm.calculate_rom_usage()}`);
  }

  // report function addresses and metrics
  if (program.options.metrics) {
    console.log(`Code Size: ${nesm.calculate_code_size()}`);
    console.log(`Instruction Used: ${nesm.calculate_total_instructions_used()}`);
    console.log(`Cartridge ROM function addresses: \n ${nesm.get_rom_addresses()}`);
  }

  console.log(`"${program_name}" translated successfully!`);

  return 0;
}

// Detect if this is the main module and if so run main
if (import.meta.url.endsWith(process.argv[1])) {
  main();
}
