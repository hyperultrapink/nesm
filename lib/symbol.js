// NESM - NEATEST EXECUTABLE SUPPLY MACHINE
// COPYRIGHT (c) HYPER ULTRA PINK 2022

"use strict";

// calculate the hash value of a symbol
export function symhash() {}

// collect a symbol from prlnbuf into symbol[],
// leaves prlnbuf pointer at first invalid symbol character,
// returns 0 if no symbol collected
export function colsym(ip) {}

// symbol table lookup
// if found, return pointer to symbol
// else, install symbol as undefined and return pointer
export function stlook(flag) {}

// install symbol into symbol hash table
export function stinstall(hash, type) {}

// assign <lval> to label pointed to by lablptr,
// checking for valid definition, etc.
export function labldef(lval, flag) {}

// create/update a reserved symbol
export function lablset(name, val) {}

// remap all the labels
export function lablremap() {}

export function funcdump(func_name, in_fname) {}
