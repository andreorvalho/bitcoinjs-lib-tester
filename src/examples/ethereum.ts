import { ethers } from 'ethers';
const wallet = ethers.Wallet.createRandom();
console.log('address:', wallet.address);
console.log('mnemonic:', wallet.mnemonic.phrase);
console.log('privateKey:', wallet.privateKey);
console.log('publicKey:', wallet.publicKey);

let signature = "";
const message = "check this message signed by account0";
var result = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message));
const messageHash =  ethers.utils.keccak256(result);
wallet.signMessage(messageHash).then((signedMessage) => {
  signature = signedMessage;
  const recoveredAddress = ethers.utils.verifyMessage(messageHash, signature);
  if (recoveredAddress === wallet.address) {
    console.log('verified');
  } else {
    console.log('Not verified');
  }
});
