import ECPairFactory from 'ecpair';
const ecc = require('tiny-secp256k1')

const ECPair = ECPairFactory(ecc);
const keyPair = ECPair.makeRandom();
const publicKey = keyPair.publicKey.toString('hex');
const privateKey = keyPair.toWIF();
console.log({ privateKey, publicKey });
