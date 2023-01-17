## install
node version v18.12.1

1. npm init -y
2. npm install typescript --save-dev
3. npm install @types/node --save-dev
4. npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true
5. npx tsc

npm install bip32 --save-dev
npm install bip39 --save-dev
npm install bitcoinjs-lib --save-dev
npm install ecpair --save-dev
npm install tiny-secp256k1 --save-dev
npm install ethers --save-dev

## Create keys from mnemonic and password and shows public and private keys

create_keys.ts

## Create random keys with ec pair

create_random_keys.ts

## Sign message with keys and verify it

sign_messages.ts

## Encrypt and decrypt with eliptic curve

encrypt_decrypt_with_eliptic_curve.ts

## Using ethereum for verifications

ethereum.ts

## HOW TO USE:

npx tsc && node build/index.js
