'use strict'

const HashMap = require('./hashMap.js');
const LeftJoin = require('./left_join.js');

let hashMap = new HashMap();
let leftJoin = new LeftJoin(); //eslint-disable-line

let synonym = {
  'fond': 'enamored',
  'wrath': 'anger',
  'diligent': 'employed',
  'outfit': 'garb',
  'guide': 'usher',
};
let synonymTable = {};

let antonym = {
  'fond': 'adverse',
  'wrath': 'delight',
  'diligent': 'idle',
  'guide': 'follow',
  'flow': 'jam',
};
let antonymTable = {};

Object.keys(synonym).forEach(function(key) {
  synonymTable[hashMap.hashCode(key)] = {[key]:antonym[key]};
});

Object.keys(antonym).forEach(function(key) {
  antonymTable[hashMap.hashCode(key)] = {[key]:antonym[key]};
});

module.exports = {synonymTable, antonymTable};