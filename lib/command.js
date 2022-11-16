// NESM - NEATEST EXECUTABLE SUPPLY MACHINE
// COPYRIGHT (c) HYPER ULTRA PINK 2022

"use strict";

// pseudo instructions section flag
pseudo_flag = [
  0x0c, 0x0c, 0x0f, 0x0f, 0x0f, 0x0c, 0x0c, 0x0c, 0x0f, 0x0c, 0x0c, 0x0c, 0x0c,
  0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f, 0x0f,
  0x0f, 0x0f, 0x0f, 0x0c, 0x0f, 0x0f, 0x0f, 0x0c, 0x0c, 0x0c, 0x0c, 0x0f, 0x0f,
  0x0f, 0x0f, 0x0f, 0x0c, 0x0c, 0x0c, 0x04, 0x04, 0x04, 0x04, 0x04,
];

// pseudo instruction processor
export function do_pseudo(ip) {}

// .list pseudo
export function do_list(ip) {}

// .mlist pseudo
export function do_mlist(ip) {}

// .nolist pseudo
export function do_nolist(ip) {}

// .nomlist pseudo
export function do_nomlist(ip) {}

// .db pseudo
export function do_db(ip) {}

// .dw pseudo
export function do_dw(ip) {}

// .equ pseudo
export function do_equ(ip) {}

// .page pseudo
export function do_page(ip) {}

// .org pseudo
export function do_org(ip) {}

// .bank pseudo
export function do_bank(ip) {}

// .incbin pseudo
export function do_incbin(ip) {}

// load a mx file
export function do_mx(fname) {}

// .include pseudo
export function do_include(ip) {}

// .rsset pseudo
export function do_rsset(ip) {}

// .rs pseudo
export function do_rs(ip) {}

// .ds pseudo
export function do_ds(ip) {}

// .fail pseudo
export function do_fail(ip) {}

// .zp/.bss/.code/.data pseudo
export function do_section(ip) {}

// .inchr pseudo - convert a PCX to 8x8 character tiles
export function do_incchr(ip) {}

// .opt pseudo - compilation options
export function do_opt(ip) {}

// htoi()
export function htoi(str, nb) {}
