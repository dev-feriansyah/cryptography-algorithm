const yargs = require('yargs');
const ceasar = require('./ceasar');
const runningKey = require('./running-key');
const { isAlphabet, logMsg } = require('./helper');

const ceasarCommand = {
  message: {
    describe: 'Message you want to be encrypt / decrypt',
    demand: true,
    alias: 'm'
  },
  step: {
    describe: 'Rotation steps',
    demand: true,
    alias: 's'
  }
};

const runningCommand = {
  message: {
    describe: 'Message you want to be encrypt / decrypt',
    demand: true,
    alias: 'm'
  },
  key: {
    describe: 'Secret Key',
    demand: true,
    alias: 'k'
  }
};

const argv = yargs
              .command('c:encrypt', 'Ceasar Encrypt message', ceasarCommand)
              .command('c:decrypt', 'Ceasar Decrypt message', ceasarCommand)
              .command('r:encrypt', 'Running Encrypt message', runningCommand)
              .command('r:decrypt', 'Running Decrypt message', runningCommand)
              .help()
              .argv;

const command = argv._[0];

if (command === 'c:encrypt') {
  const msg = argv.message
  if (!isAlphabet(msg)) return console.log('is not alphabets');

  const msgAfter = ceasar.encrypt(msg, argv.step);

  logMsg(msg, msgAfter);

} else if (command === 'c:decrypt') {
  const msg = argv.message
  if (!isAlphabet(msg)) return console.log('is not alphabets');

  const msgAfter = ceasar.decrypt(msg, argv.step);

  logMsg(msg, msgAfter);
} else if (command === 'r:encrypt') {
  const msg = argv.message
  if (!isAlphabet(msg)) return console.log('is not alphabets');

  const msgAfter = runningKey.encrypt(msg, argv.key);

  logMsg(msg, msgAfter);
} else if (command === 'r:decrypt') {
  const msg = argv.message
  if (!isAlphabet(msg)) return console.log('is not alphabets');

  const msgAfter = runningKey.decrypt(msg, argv.key);

  logMsg(msg, msgAfter);
}