const bitcoin = require('bitcoinjs-lib');
const bitcoinMessage = require('bitcoinjs-message')
const ecc = require('tiny-secp256k1')
import ECPairFactory from 'ecpair';

const ECPair = ECPairFactory(ecc);
const keyPair = ECPair.makeRandom();

function getUnsignedMessage(): string {
  const message = `{ scope: "", time_stamp: "" }`;
  return message;
}

function createSignedMessage(): Buffer{
  return bitcoinMessage.sign(getUnsignedMessage(), keyPair.privateKey, keyPair.compressed);
}

function getAddress(publicKey: any, network?: any): string {
  return bitcoin.payments.p2pkh({ pubkey: publicKey, network }).address!;
}

function requestData(signedMessage: Buffer, entityAddress: string, unsignedMessage: string) {
  // verify entity address ?? maybe using eliptic curve

  const response = bitcoinMessage.verify(unsignedMessage, entityAddress, signedMessage)
  console.log('Message verified: ' + response)

  //send push request
}

const newMessage = createSignedMessage();
requestData(newMessage, getAddress(keyPair.publicKey), getUnsignedMessage());
