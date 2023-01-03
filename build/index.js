"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eciesjs_1 = require("eciesjs");
const k1 = new eciesjs_1.PrivateKey();
const data = Buffer.from('this is a test');
console.log((0, eciesjs_1.decrypt)(k1.toHex(), (0, eciesjs_1.encrypt)(k1.publicKey.toHex(), data)).toString());
