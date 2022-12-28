1. npm init -y
2. npm install typescript --save-dev
3. npm install @types/node --save-dev
4. npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true
5. npx tsc

cold reloading:

npm install --save-dev ts-node nodemon
nodemon.json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/index.ts"
}

const mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost'
const seed = bip39.mnemonicToSeed(mnemonic)
const node = bip32.fromSeed(seed)
console.log(node.toBase58())

'xprv9s21ZrQH143K3QTDL4LXw2F7HEK3wJUD2nW2nRk4stbPy6cq3jPPqjiChkTcaMEcjq1vG7XmEEW22S2UiSPbrzTkUeXfcwo7PzRZ4aDiRQu'


generateKeyPairs: () => {
  /*It can generate a random address [and support the retrieval of transactions for that address (via 3PBP)*/
    const keyPair = bitcoin.ECPair.makeRandom();
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
    const publicKey = keyPair.publicKey.toString(“hex”);
    const privateKey = keyPair.toWIF();
    return { address, privateKey, publicKey };
  }


const mnemonic = bip39.generateMnemonic(); //generates a 12 word mnemonic

const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer

const root = hdkey.fromMasterSeed(seed); //should not be passing a promise into here
//const masterPrivateKey = root.privateKey.toString('hex');

const addrnode = root.derive("m/44'/60'/0'/0/0");
console.log(seed);


import bip39 from 'bip39';
import bitcoin from 'bitcoinjs-lib';

type bip32 = {
  fromSeed : () => any;
 }


const mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost'
const seed = bip39.mnemonicToSeed(mnemonic)
const node = bitcoin.bip32.fromSeed(seed)
console.log(node.toBase58())

console.log('Hello world!')
