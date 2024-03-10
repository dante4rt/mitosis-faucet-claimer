const readlineSync = require('readline-sync');
const colors = require('colors');
const claimFaucet = require('./claimFaucet');

console.log(colors.blue('Mitosis Faucet Claimer – HappyCuanAirdrop'));
const address = readlineSync.question('Enter your address: ');

claimFaucet(address);
