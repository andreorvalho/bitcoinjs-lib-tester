import { encrypt, decrypt, PrivateKey } from 'eciesjs'
const k1 = new PrivateKey()
const data = Buffer.from('this is a test')
console.log(decrypt(k1.toHex(), encrypt(k1.publicKey.toHex(), data)).toString());
