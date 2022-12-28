//import bitcoin from 'bitcoinjs-lib';
const bitcoin = require('bitcoinjs-lib');
const ecc = require('tiny-secp256k1')
const { BIP32Factory } = require('bip32')
const bip39 = require('bip39')
const bip32 = BIP32Factory(ecc)

const mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost';
const seed = bip39.mnemonicToSeedSync(mnemonic);
const node = bip32.fromSeed(seed);
const strng = node.toBase58();
const restored = bip32.fromBase58(strng);

function getAddress(node: any, network?: any): string {
  return bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address!;
}

console.log(getAddress(node));
console.log(getAddress(restored));

//import bitcoin from 'bitcoinjs-lib';
// import ECPairFactory from 'ecpair';
// const ecc = require('tiny-secp256k1')


// const ECPair = ECPairFactory(ecc);
// const keyPair = ECPair.makeRandom();
// const publicKey = keyPair.publicKey.toString('hex');
// const privateKey = keyPair.toWIF();
// console.log({ privateKey, publicKey });


//var message = 'Hey this is Ranchi Mall'
