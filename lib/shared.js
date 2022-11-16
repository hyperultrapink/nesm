// NESM - NEATEST EXECUTABLE SUPPLY MACHINE
// Shared Library Classes
// COPYRIGHT (c) HYPER ULTRA PINK 2022

"use strict";

export class Instruction {
  constructor(name, mode, hex, type, flags) {
    this.name = name;
    this.mode = mode;
    this.hex = hex;
    this.type = type;
    this.flags = flags;
  }
}

export class Machine {
  constructor(
    name,
    rom_extension,
    include_env,
    zp_limit,
    ram_limit,
    ram_base,
    ram_page,
    ram_bank
  ) {
    this.name = name;
    this.rom_extension = rom_extension;
    this.include_env = include_env;
    this.zp_limit = zp_limit;
    this.ram_limit = ram_limit;
    this.ram_base = ram_base;
    this.ram_page = ram_page;
    this.ram_bank = ram_bank;
  }
}

// // path separator
// path_sep = "/";
// PATH_SEPARATOR_STRING = "/";

// // machine
// MACHINE_PCE = 0;
// MACHINE_NES = 1;

// // reserved bank index
// RESERVED_BANK = 0xf0;
// PROC_BANK = 0xf1;
// GROUP_BANK = 0xf2;

// // tile format for encoder
// CHUNKY_TILE = 1;
// PACKED_TILE = 2;

// // line buffer length
// LAST_CH_POS = 1580;
// SFIELD = 26;
// SBOLSZ = 32;

// // macro argument types
// NO_ARG = 0;
// ARG_REG = 1;
// ARG_IMM = 2;
// ARG_ABS = 3;
// ARG_INDIRECT = 4;
// ARG_STRING = 5;
// ARG_LABEL = 6;

// // section types
// S_ZP = 0;
// S_BSS = 1;
// S_CODE = 2;
// S_DATA = 3;

// // assembler options
// OPT_LIST = 0;
// OPT_MACRO = 1;
// OPT_WARNING = 2;
// OPT_OPTIMIZE = 3;

// // assembler directives
// P_DB = 0; // .db
// P_DW = 1; // .dw
// P_DS = 2; // .ds
// P_EQU = 3; // .equ
// P_ORG = 4; // .org
// P_PAGE = 5; // .page
// P_BANK = 6; // .bank
// P_INCBIN = 7; // .incbin
// P_INCLUDE = 8; // .include
// P_INCCHR = 9; // .incchr
// P_INCSPR = 10; // .incspr
// P_INCPAL = 11; // .incpal
// P_INCBAT = 12; // .incbat
// P_MACRO = 13; // .macro
// P_ENDM = 14; // .endm
// P_LIST = 15; // .list
// P_MLIST = 16; // .mlist
// P_NOLIST = 17; // .nolist
// P_NOMLIST = 18; // .nomlist
// P_RSSET = 19; // .rsset
// P_RS = 20; // .rs
// P_IF = 21; // .if
// P_ELSE = 22; // .else
// P_ENDIF = 23; // .endif
// P_FAIL = 24; // .fail
// P_ZP = 25; // .zp
// P_BSS = 26; // .bss
// P_CODE = 27; // .code
// P_DATA = 28; // .data
// P_DEFCHR = 29; // .defchr
// P_FUNC = 30; // .func
// P_IFDEF = 31; // .ifdef
// P_IFNDEF = 32; // .ifndef
// P_VRAM = 33; // .vram
// P_PAL = 34; // .pal
// P_DEFPAL = 35; // .defpal
// P_DEFSPR = 36; // .defspr
// P_INESPRG = 37; // .inesprg
// P_INESCHR = 38; // .ineschr
// P_INESMAP = 39; // .inesmap
// P_INESMIR = 40; // .inesmir
// P_OPT = 41; // .opt
// P_INCTILE = 42; // .inctile
// P_INCMAP = 43; // .incmap
// P_MML = 44; // .mml
// P_PROC = 45; // .proc
// P_ENDP = 46; // .endp
// P_PGROUP = 47; // .procgroup
// P_ENDPG = 48; // .endprocgroup
// P_CALL = 49; // .call

// // symbol flags
// MDEF = 3; // multiply defined
// UNDEF = 1; // undefined - may be zero page
// IFUNDEF = 2; // declared in a .if expression
// DEFABS = 4; // defined - two byte address
// MACRO = 5; // used for a macro name
// FUNC = 6; // used for a function

// // operation code flags
// PSEUDO = 0x0008000;
// CLASS1 = 0x0010000;
// CLASS2 = 0x0020000;
// CLASS3 = 0x0040000;
// CLASS5 = 0x0080000;
// CLASS6 = 0x0100000;
// CLASS7 = 0x0200000;
// CLASS8 = 0x0400000;
// CLASS9 = 0x0800000;
// CLASS10 = 0x1000000;
// ACC = 0x0000001;
// IMM = 0x0000002;
// ZP = 0x0000004;
// ZP_X = 0x0000008;
// ZP_Y = 0x0000010;
// ZP_IND = 0x0000020;
// ZP_IND_X = 0x0000040;
// ZP_IND_Y = 0x0000080;
// ABS = 0x0000100;
// ABS_X = 0x0000200;
// ABS_Y = 0x0000400;
// ABS_IND = 0x0000800;
// ABS_IND_X = 0x0001000;

// // pass flags
// FIRST_PASS = 0;
// LAST_PASS = 1;

// // structs
// export class Opcode {
//   constructor(next, name, proc, flag, value, type_idx) {
//     next, name, proc, flag, value, (type_idx = "");
//   }
// }

// export class inpuinfo {
//   constructor(fp, lnum, if_level, name) {
//     fp, lnum, (if_level = "");
//     name = Array(116);
//   }
// }

// export class proc {
//   constructor(
//     next,
//     link,
//     group,
//     old_bank,
//     bank,
//     org,
//     base,
//     size,
//     call,
//     type,
//     refcnt
//   ) {
//     next,
//       link,
//       group,
//       old_bank,
//       bank,
//       org,
//       base,
//       size,
//       call,
//       type,
//       (refcnt = "");
//     func_name = Array(SBOLSZ);
//   }
// }

// export class symbol {
//   constructor(
//     next,
//     local,
//     proc,
//     type,
//     value,
//     bank,
//     page,
//     nb,
//     size,
//     vram,
//     pal,
//     refcnt,
//     reserved,
//     data_type,
//     data_size
//   ) {
//     next,
//       local,
//       proc,
//       type,
//       value,
//       bank,
//       page,
//       nb,
//       size,
//       vram,
//       pal,
//       refcnt,
//       reserved,
//       data_type,
//       (data_size = "");
//     symbol_name = Array(SBOLSZ);
//   }
// }

// export class line {
//   consructor(next, data) {
//     next, (data = "");
//   }
// }

// export class macro {
//   constructor(next, line) {
//     next, (line = "");
//     macro_name = Array(SBOLSZ);
//   }
// }

// export class func {
//   constructor(next, line, name) {
//     next;
//     line = Array(128);
//     name = Array(SBOLSZ);
//   }
// }

// export class tile {
//   constructor(next, data, crc, index) {
//     next, data, crc, (index = "");
//   }
// }

// /* value types */
// T_DECIMAL = 0;
// T_HEXA = 1;
// T_BINARY = 2;
// T_CHAR = 3;
// T_SYMBOL = 4;
// T_PC = 5;

// /* operators */
// OP_START = 0;
// OP_OPEN = 1;
// OP_ADD = 2;
// OP_SUB = 3;
// OP_MUL = 4;
// OP_DIV = 5;
// OP_MOD = 6;
// OP_NEG = 7;
// OP_SHL = 8;
// OP_SHR = 9;
// OP_OR = 10;
// OP_XOR = 11;
// OP_AND = 12;
// OP_COM = 13;
// OP_NOT = 14;
// OP_EQUAL = 15;
// OP_NOT_EQUAL = 16;
// OP_LOWER = 17;
// OP_LOWER_EQUAL = 18;
// OP_HIGHER = 19;
// OP_HIGHER_EQUAL = 20;
// OP_DEFINED = 21;
// OP_HIGH = 22;
// OP_LOW = 23;
// OP_PAGE = 24;
// OP_BANK = 25;
// OP_VRAM = 26;
// OP_PAL = 27;
// OP_SIZEOF = 28;

// /* operator priority */
// op_pri = [
//   0 /* START */, 0 /* OPEN  */, 7 /* ADD   */, 7 /* SUB   */, 8 /* MUL   */,
//   8 /* DIV   */, 8 /* MOD   */, 10 /* NEG   */, 6 /* SHL   */, 6 /* SHR   */,
//   1 /* OR    */, 2 /* XOR   */, 3 /* AND   */, 10 /* COM   */, 9 /* NOT   */,
//   4 /* =     */, 4 /* <>    */, 5 /* <     */, 5 /* <=    */, 5 /* >     */,
//   5 /* >=    */, 10 /* DEFIN.*/, 10 /* HIGH  */, 10 /* LOW   */, 10 /* PAGE  */,
//   10 /* BANK  */, 10 /* VRAM  */, 10 /* PAL   */, 10 /* SIZEOF*/,
// ];

// op_stack = Array(64); /* operator stack */
// op_stack[0] = OP_START;
// val_stack = Array(64); /* value stack */
// op_idx, val_idx; /* index in the operator and value stacks */
// need_operator; /* when set await an operator, else await a value */
// expr; /* pointer to the expression string */
// expr_stack = Array(16); /* expression stack */
// expr_lablptr; /* pointer to the lastest label */
// expr_lablcnt; /* number of label seen in an expression */
// keyword = Array(8);
// keyword[0] = "\\7DEFINED";
// keyword[1] = "\\4HIGH";
// keyword[2] = "\\3LOW";
// keyword[3] = "\\4PAGE";
// keyword[4] = "\\4BANK";
// keyword[5] = "\\4VRAM";
// keyword[6] = "\\3PAL";
// keyword[7] = "\\6SIZEOF";

// rom[128][8192];
// map[128][8192];
// bank_name[128][64];
// bank_loccnt[4][256];
// bank_page[4][256];
// max_zp; /* higher used address in zero page */
// max_bss; /* higher used address in ram */
// max_bank; /* last bank used */
// data_loccnt; /* data location counter */
// data_size; /* size of binary output (in bytes) */
// data_level; /* data output level, must be <= listlevel to be outputed */
// loccnt; /* location counter */
// bank; /* current bank */
// bank_base; /* bank base index */
// rom_limit; /* bank limit */
// bank_limit; /* rom max. size in bytes */
// page; /* page */
// rsbase; /* .rs counter */
// section; /* current section: S_ZP, S_BSS, S_CODE or S_DATA */
// section_bank[4]; /* current bank for each section */
// stop_pass; /* stop the program; set by fatal_error() */
// errcnt; /* error counter */
// machine;
// inst_tbl[256]; /* instructions hash table */
// hash_tbl[256]; /* label hash table */
// lablptr; /* label pointer into symbol table */
// glablptr; /* pointer to the latest defined global label */
// lastlabl; /* last label we have seen */
// bank_glabl[4][256]; /* latest global symbol for each bank */
// hex[5]; /* hexadecimal character buffer */
// opproc; /* instruction gen proc */
// opflg; /* instruction flags */
// opval; /* instruction value */
// optype; /* instruction type */
// opext; /* instruction extension (.l or .h) */
// pass; /* pass counter */
// prlnbuf[LAST_CH_POS + 4]; /* input line buffer */
// tmplnbuf[LAST_CH_POS + 4]; /* temporary line buffer */
// slnum; /* source line number counter */
// symbol[SBOLSZ + 1]; /* temporary symbol storage */
// undef; /* undefined symbol in expression flg  */
// value; /* operand field value */
// opvaltab = Array(6);
// // CPX CPY LDX LDY
// opvaltab[0] = [
//   0x08, 0x08, 0x04, 0x14, 0x14, 0x11, 0x00, 0x10, 0x0c, 0x1c, 0x18, 0x2c, 0x3c,
//   0x00, 0x00, 0x00,
// ];
// // ST0 ST1 ST2 TAM TMA
// opvaltab[1] = [
//   0x00, 0x00, 0x04, 0x14, 0x14, 0x00, 0x00, 0x00, 0x0c, 0x1c, 0x1c, 0x00, 0x00,
//   0x00, 0x00, 0x00,
// ];
// // BIT
// opvaltab[2] = [
//   0x00, 0x89, 0x24, 0x34, 0x00, 0x00, 0x00, 0x00, 0x2c, 0x3c, 0x00, 0x00, 0x00,
//   0x00, 0x00, 0x00,
// ];
// // DEC
// opvaltab[3] = [
//   0x3a, 0x00, 0xc6, 0xd6, 0x00, 0x00, 0x00, 0x00, 0xce, 0xde, 0x00, 0x00, 0x00,
//   0x00, 0x00, 0x00,
// ];
// // INC
// opvaltab[4] = [
//   0x1a, 0x00, 0xe6, 0xf6, 0x00, 0x00, 0x00, 0x00, 0xee, 0xfe, 0x00, 0x00, 0x00,
//   0x00, 0x00, 0x00,
// ];
// // STZ
// opvaltab[5] = [
//   0x00, 0x00, 0x64, 0x74, 0x00, 0x00, 0x00, 0x00, 0x9c, 0x9e, 0x00, 0x00, 0x00,
//   0x00, 0x00, 0x00,
// ];
