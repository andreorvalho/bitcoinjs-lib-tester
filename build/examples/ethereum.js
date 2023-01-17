"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const wallet = ethers_1.ethers.Wallet.createRandom();
console.log('address:', wallet.address);
console.log('mnemonic:', wallet.mnemonic.phrase);
console.log('privateKey:', wallet.privateKey);
console.log('publicKey:', wallet.publicKey);
let signature = "";
const message = "check this message signed by account0";
var result = ethers_1.ethers.utils.hexlify(ethers_1.ethers.utils.toUtf8Bytes(message));
const messageHash = ethers_1.ethers.utils.keccak256(result);
wallet.signMessage(messageHash).then((signedMessage) => {
    signature = signedMessage;
    const recoveredAddress = ethers_1.ethers.utils.verifyMessage(messageHash, signature);
    if (recoveredAddress === wallet.address) {
        console.log('verified');
    }
    else {
        console.log('Not verified');
    }
});
