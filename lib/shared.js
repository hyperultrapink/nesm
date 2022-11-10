// NESM - NEATEST EXECUTABLE SUPPLY MACHINE
// Shared Library Classes
// COPYRIGHT (c) HYPER ULTRA PINK 2022

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
