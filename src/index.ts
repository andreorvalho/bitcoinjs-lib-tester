const bitcoin = require('bitcoinjs-lib');
const bitcoinMessage = require('bitcoinjs-message')
const ecc = require('tiny-secp256k1')
const bip39 = require('bip39')
const { BIP32Factory } = require('bip32')
const bip32 = BIP32Factory(ecc)
import ECPairFactory from 'ecpair';

const ECPair = ECPairFactory(ecc);
const keyPair = ECPair.makeRandom();

function getAddress(publicKey: any, network?: any): string {
  return bitcoin.payments.p2pkh({ pubkey: publicKey, network }).address!;
}

var message = 'This is an example of a signed message.'

var signature = bitcoinMessage.sign(message, keyPair.privateKey, keyPair.compressed)
console.log(signature.toString('base64'))

console.log(bitcoinMessage.verify(message, getAddress(keyPair.publicKey), signature))


