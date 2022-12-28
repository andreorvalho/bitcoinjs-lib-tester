// const ecc = require('tiny-secp256k1')
// const { BIP32Factory } = require('bip32')
// const bip39 = require('bip39')
// // You must wrap a tiny-secp256k1 compatible implementation
// const bip32 = BIP32Factory(ecc)

import bitcoin from 'bitcoinjs-lib';
import ECPairFactory from 'ecpair';
const ecc = require('tiny-secp256k1')

// const mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost'
// const seed = bip39.mnemonicToSeed(mnemonic)
// const node = bip32.fromSeed(seed)
// console.log(node.toBase58())

const ECPair = ECPairFactory(ecc);
const keyPair = ECPair.makeRandom();
//const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
const publicKey = keyPair.publicKey.toString('hex');
const privateKey = keyPair.toWIF();
console.log({ privateKey, publicKey });
