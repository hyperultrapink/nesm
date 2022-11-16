// NESM - NEATEST EXECUTABLE SUPPLY MACHINE
// COPYRIGHT (c) HYPER ULTRA PINK 2022

"use strict";

// defines
SND_STOP = 0; /* stop processing (track finish) */
SND_OFF = 1; /* mute sound */
SND_ON = 2; /* turn on sound */
SND_VOLUME = 3; /* set voice volume (left & right) */
SND_FREQ = 4; /* set voice frequency */
SND_DURATION = 5; /* set voice duration */
SND_NOISE_FREQ = 6; /* set noise frequency */
SND_NOISE_OFF = 7; /* set noise off */
SND_LFO_FREQ = 8; /* set LFO frequency */
SND_LFO_CTRL = 9; /* set LFO control */
SND_WAVE_SINE = 20; /* init to sine wave (predefined) */
SND_WAVE_SAW = 21; /* init to sawtooth wave (predefined) */
SND_WAVE_SQR = 22; /* init to square wave (predefined) */
SND_WAVE_DATA = 30; /* init to inline wave data */

/* locals */
snd_wave;
snd_octave;
snd_volume;
snd_length;
snd_tempo;
snd_timebase;
snd_ticks_h, snd_ticks_l;
snd_wave_flag;
snd_off;
tone_table = Array(7);
tone_table[0] = 10;
tone_table[0] = 12;
tone_table[0] = 1;
tone_table[0] = 3;
tone_table[0] = 5;
tone_table[0] = 6;
tone_table[0] = 8;
freq_table = Array(14);
freq_table[0] = 0x001edd;
freq_table[1] = 0x0020b3;
freq_table[2] = 0x0022a6;
freq_table[3] = 0x0024b5;
freq_table[4] = 0x0026e3;
freq_table[5] = 0x002933;
freq_table[6] = 0x002ba6;
freq_table[7] = 0x002e40;
freq_table[8] = 0x003100;
freq_table[9] = 0x0033e8;
freq_table[10] = 0x003700;
freq_table[11] = 0x003a45;
freq_table[12] = 0x003dba;
freq_table[13] = 0x004166;

export function mml_start(buffer) {}

export function mml_stop(buffer) {}

export function mml_parse(buffer, bufsize, ptr) {}

export function mml_get_value(ptr) {}

export function mml_get_length(ptr) {}

export function mml_calc_duration(len) {}
