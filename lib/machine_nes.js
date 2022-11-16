// NESM - NEATEST EXECUTABLE SUPPLY MACHINE
// NES System Constants and Helper functions
// COPYRIGHT (c) HYPER ULTRA PINK 2022

"use strict";

import { Instruction, Machine } from "./shared.js";

export const extensions = {
  asm: "asm",
  lst: "lst",
  ndb: "ndb",
  rom: "nes",
};

// NES opcode table
// prettier-ignore
export const machine_instruction_set = {
  "DEFCHR":           new Instruction ("DEFCHR",          "nes_defchr",     "P_DEFCHR",     "0",           "PSEUDO"),
  "INESPRG":          new Instruction ("INESPRG",         "nes_inesprg",    "P_INESPRG",    "0",           "PSEUDO"),
  "INESCHR":          new Instruction ("INESCHR",         "nes_ineschr",    "P_INESCHR",    "0",           "PSEUDO"),
  "INESMAP":          new Instruction ("INESMAP",         "nes_inesmap",    "P_INESMAP",    "0",           "PSEUDO"),
  "INESMIR":          new Instruction ("INESMIR",         "nes_inesmir",    "P_INESMIR",    "0",           "PSEUDO"),
  ".DEFCHR":          new Instruction (".DEFCHR",         "nes_defchr",     "P_DEFCHR",     "0",           "PSEUDO"),
  ".INESPRG":         new Instruction (".INESPRG",        "nes_inesprg",    "P_INESPRG",    "0",           "PSEUDO"),
  ".INESCHR":         new Instruction (".INESCHR",        "nes_ineschr",    "P_INESCHR",    "0",           "PSEUDO"),
  ".INESMAP":         new Instruction (".INESMAP",        "nes_inesmap",    "P_INESMAP",    "0",           "PSEUDO"),
  ".INESMIR":         new Instruction (".INESMIR",        "nes_inesmir",    "P_INESMIR",    "0",           "PSEUDO"),
  "NULL":             new Instruction ("NULL",            "NULL",           "0",            "0",           "0"),
}

/* NES machine description */
export const nes_machine_description = new Machine(
  "MACHINE_NES",
  ".nes",
  "NES_INCLUDE",
  "0x100",
  "0x800",
  "0",
  "0",
  "RESERVED_BANK"
);

// locals
// number of prg banks
export const ines_prg = "";
// number of character banks
export const ines_chr = "";
// rom mapper type
export const ines_mapper = Array(2);
// INES rom header
class INES_Header {
  constructor(id, prg, chr, mapper, unused) {
    id = Array(4);
    prg = "";
    chr = "";
    mapper = Array(2);
    unused = Array(8);
  }
}

export function nes_write_header(f, banks) {}
export function nes_pack_8x8_tile(buffer, data, line_offset, format) {}
export function nes_defchr(ip) {}
export function nes_inesprg(ip) {}
export function nes_ineschr(ip) {}
export function nes_inesmap(ip) {}
export function nes_inesmir(ip) {}
