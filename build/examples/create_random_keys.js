"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ecpair_1 = __importDefault(require("ecpair"));
const ecc = require('tiny-secp256k1');
const ECPair = (0, ecpair_1.default)(ecc);
const keyPair = ECPair.makeRandom();
const publicKey = keyPair.publicKey.toString('hex');
const privateKey = keyPair.toWIF();
console.log({ privateKey, publicKey });
