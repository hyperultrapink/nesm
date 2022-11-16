// NESM - NEATEST EXECUTABLE SUPPLY MACHINE
// COPYRIGHT (c) HYPER ULTRA PINK 2022

"use strict";

proc_tbl = Array(256);
proc_ptr;
proc_first;
proc_last;
proc_nb;
call_ptr;
call_bank;

// call pseudo
export function do_call(ip) {}

// .proc pseudo
export function do_proc(ip) {}

// .endp pseudo
export function do_endp(ip) {}

export function proc_reloc() {}

export function proc_look() {}

// install a procedure in the hash table
export function proc_install() {}

export function poke(addr, data) {}
