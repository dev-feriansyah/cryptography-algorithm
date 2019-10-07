function decryptLetter(charCode, steps) {
  if (charCode === 32) return ' ';

  let charCodeAfter = charCode - steps;

  if (charCodeAfter < 65) {
    // karena huruf pertama dihitung jadi kurang 1
    // a-z (65-90), jadi klo kurang dari 65, akan kembali ke z
    charCodeAfter = 90 - (65 - charCodeAfter - 1);
  }

  return String.fromCharCode(charCodeAfter);
}

function encryptLetter(charCode, steps) {
  if (charCode === 32) return ' ';

  let charCodeAfter = charCode + steps;

  if (charCodeAfter > 90) {
    // karena huruf pertama dihitung jadi kurang 1
    // a-z (65-90), jadi klo lebih dari 65, akan kembali ke a
    charCodeAfter = 65 + (charCodeAfter - 90 - 1);
  }

  return String.fromCharCode(charCodeAfter);
}

function encrypt(msg, steps) {
  let msgAfter = '';
  msg = msg.toUpperCase();

  // Change perChar
  for (let i = 0; i < msg.length; i++) {
    charCode = msg.charCodeAt([i]);

    msgAfter += encryptLetter(charCode, steps);
  }

  return msgAfter.toLowerCase();

}

function decrypt(msg, steps) {
  let msgAfter = '';
  msg = msg.toUpperCase();

  // Change perChar
  for (let i = 0; i < msg.length; i++) {
    charCode = msg.charCodeAt([i]);

    msgAfter += decryptLetter(charCode, steps);
  }

  return msgAfter.toLowerCase();
}

module.exports = {
  encrypt,
  decrypt
}