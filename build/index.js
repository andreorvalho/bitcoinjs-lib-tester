"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bitcoin = require('bitcoinjs-lib');
const bitcoinMessage = require('bitcoinjs-message');
const ecc = require('tiny-secp256k1');
const ecpair_1 = __importDefault(require("ecpair"));
const ECPair = (0, ecpair_1.default)(ecc);
const keyPair = ECPair.makeRandom();
function getUnsignedMessage() {
    const message = `{ scope: "", time_stamp: "" }`;
    return message;
}
function createSignedMessage() {
    return bitcoinMessage.sign(getUnsignedMessage(), keyPair.privateKey, keyPair.compressed);
}
function getAddress(publicKey, network) {
    return bitcoin.payments.p2pkh({ pubkey: publicKey, network }).address;
}
function requestData(signedMessage, entityAddress, unsignedMessage) {
    // verify entity address ?? maybe using eliptic curve
    const response = bitcoinMessage.verify(unsignedMessage, entityAddress, signedMessage);
    console.log('Message verified: ' + response);
    //send push request
}
const newMessage = createSignedMessage();
requestData(newMessage, getAddress(keyPair.publicKey), getUnsignedMessage());
