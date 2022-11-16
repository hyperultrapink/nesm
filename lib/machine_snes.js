// NESM - NEATEST EXECUTABLE SUPPLY MACHINE
// SNES System Constants and Helper functions
// COPYRIGHT (c) HYPER ULTRA PINK 2022

"use strict";

import { Instruction, Machine } from "./shared.js";

export const extensions = {
  asm: "asm",
  lst: "lst",
  ndb: "ndb",
  rom: "sfc",
};

// SNES opcode table
// prettier-ignore
export const machine_instruction_set = {
  "NULL":             new Instruction ("NULL",            "NULL",           "0",            "0",           "0"),
};

/* SNES machine description */
export const snes_machine_description = new Machine(
  "MACHINE_SNES",
  ".snes",
  "SNES_INCLUDE",
  "0",
  "0",
  "0",
  "0",
  ""
);

export function snes_write_header(file, banks) {}

export function snes_pack_8x8_tile(buffer, data, line_offset, format) {}

export function snes_defchr(ip) {}

export function snes_inesprg(ip) {}

export function snes_ineschr(ip) {}

export function snes_inesmap(ip) {}

export function snes_inesmir(ip) {}
