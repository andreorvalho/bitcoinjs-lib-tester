"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bip39 = require('bip39');
const hdkey = require('hdkey');
const mnemonic = bip39.generateMnemonic(); //generates a 12 word mnemonic
const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer
const root = hdkey.fromMasterSeed(seed); //should not be passing a promise into here
const masterPrivateKey = root.privateKey.toString('hex');
const addrnode = root.derive("m/44'/60'/0'/0/0");
console.log(addrnode);
console.log(masterPrivateKey);
var message = 'Hey this is Ranchi Mall';
