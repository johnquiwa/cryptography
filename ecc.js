const utils = require('ethereumjs-util');
const Web3 = require('web3');
const web3 = new Web3();

// Using truffle develop keys
const privateKey = 'c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3';
const privateKeyX= new Buffer(privateKey, 'hex');

console.log(privateKeyX);


const message = 'here is the message!';
const messageHash = web3.utils.sha3(message);
const messageHashX = new Buffer(messageHash.replace('0x', ''), 'hex');

console.log(messageHash);
console.log(messageHashX);

// Sign Hash
const signedMessage = utils.ecsign(messageHashX, privateKeyX);
const signedHash = utils.toRpcSig(signedMessage.v, signedMessage.r, signedMessage.s).toString('hex');

console.log(signedMessage);
console.log(signedHash);

// Find Public Key From Hash
const sigDecoded = utils.fromRpcSig(signedHash);
const recoveredPub = utils.ecrecover(messageHashX, sigDecoded.v, sigDecoded.r, sigDecoded.s);
const recoveredAddress = `0x${utils.pubToAddress(recoveredPub).toString('hex')}`;

console.log(recoveredAddress);

