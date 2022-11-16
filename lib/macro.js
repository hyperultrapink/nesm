// NESM - NEATEST EXECUTABLE SUPPLY MACHINE
// Macro Translating Helper Functions
// COPYRIGHT (c) HYPER ULTRA PINK 2022

"use strict";

mopt;
in_macro;
expand_macro;
marg[8][10][80];
midx;
mcounter, mcntmax;
mcntstack[8];
mstack[8];
mlptr;
macro_tbl[256];
mptr;

// .macro pseudo
export function do_macro(ip) {}

// .endm pseudo
export function do_endm(ip) {}

// search a macro in the hash table
export function macro_look(ip) {}

// extract macro arguments
export function macro_getargs(ip) {}

// install a macro in the hash table
export function macro_install() {}

// send back the addressing mode of a macro arg
export function macro_getargtype(arg) {}
