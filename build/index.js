"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bitcoin = require('bitcoinjs-lib');
const bitcoinMessage = require('bitcoinjs-message');
const ecc = require('tiny-secp256k1');
const bip39 = require('bip39');
const { BIP32Factory } = require('bip32');
const bip32 = BIP32Factory(ecc);
const ecpair_1 = __importDefault(require("ecpair"));
const ECPair = (0, ecpair_1.default)(ecc);
const keyPair = ECPair.makeRandom();
const publicKey = keyPair.publicKey.toString('hex');
const privateKey = keyPair.toWIF();
console.log({ privateKey, publicKey });
function getAddress(publicKey, network) {
    return bitcoin.payments.p2pkh({ pubkey: publicKey, network }).address;
}
var message = 'This is an example of a signed message.';
var signature = bitcoinMessage.sign(message, keyPair.privateKey, keyPair.compressed);
console.log(signature.toString('base64'));
console.log(bitcoinMessage.verify(message, getAddress(keyPair.publicKey), signature));
