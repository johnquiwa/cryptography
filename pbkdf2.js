const pbkdf2 = require('pbkdf2');

// 8 bits = 1 byte
// 512 bits / 8 bits = 64 bytes

// Going from mnemonic + salt to seed (BIP-39)

const derivedKey = pbkdf2.pbkdf2Sync('army van defense carry jealous true garbage claim echo media make crunch', 'mnemonic', 2048, 64, 'sha512')
const derivedKey2 = pbkdf2.pbkdf2Sync('army van defense carry jealous true garbage claim echo media make crunch', 'mnemonicSuperDuperSecret', 2048, 64, 'sha512')

console.log(derivedKey2.toString("hex").slice(0,512));

console.log(derivedKey2.toString("hex").slice(0,512));