const bitcoin = require('bitcoinjs-lib');
const ecc = require('tiny-secp256k1')
const bip39 = require('bip39')
const { BIP32Factory } = require('bip32')
const bip32 = BIP32Factory(ecc)

const mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost';
const password = '123456789'
const seed = bip39.mnemonicToSeedSync(mnemonic, password);
const node = bip32.fromSeed(seed);
const strng = node.toBase58();
const restored = bip32.fromBase58(strng);

function getAddress(node: any, network?: any): string {
  return bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address!;
}

// public key 
console.log(getAddress(node));
console.log(getAddress(restored));
// private key 
console.log(node.toWIF());
console.log(restored.toWIF());
