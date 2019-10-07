function decryptLetter(charCode, charKey) {
  if (charCode === 32) return ' ';
  charKey = charKey - 65;

  let charCodeAfter = charCode - charKey;
  
  if (charCodeAfter < 65) {
    // karena huruf pertama dihitung jadi kurang 1
    // a-z (65-90), jadi klo kurang dari 65, akan kembali ke z
    charCodeAfter = 90 - (65 - charCodeAfter - 1);
  }

  return String.fromCharCode(charCodeAfter);
}

function encryptLetter(charCode, charKey) {
  if (charCode === 32) return ' ';
  charKey = charKey - 65;

  let charCodeAfter = charCode + charKey;

  if (charCodeAfter > 90) {
    // karena huruf pertama dihitung jadi kurang 1
    // a-z (65-90), jadi klo lebih dari 65, akan kembali ke a
    charCodeAfter = 65 + (charCodeAfter - 90 - 1);
  }

  return String.fromCharCode(charCodeAfter);
}

function encrypt(msg, secretKey) {
  let msgAfter = '';
  let keyIndex = 0;
  msg = msg.toUpperCase();
  secretKey = secretKey.toUpperCase();

  // Change perChar
  for (let i = 0; i < msg.length; i++) {
    charCode = msg.charCodeAt([i]);

    msgAfter += encryptLetter(charCode, secretKey[keyIndex].charCodeAt(0));

    if (keyIndex >= secretKey.length - 1) {
      keyIndex = 0;
    } else if (charCode !== 32) {
      keyIndex++;
    }
  }

  return msgAfter.toLowerCase();
}

function decrypt(msg, secretKey) {
  let msgAfter = '';
  let keyIndex = 0;
  msg = msg.toUpperCase();
  secretKey = secretKey.toUpperCase();

  // Change perChar
  for (let i = 0; i < msg.length; i++) {
    charCode = msg.charCodeAt([i]);

    msgAfter += decryptLetter(charCode, secretKey[keyIndex].charCodeAt(0));

    if (keyIndex >= secretKey.length - 1) {
      keyIndex = 0;
    } else if (charCode !== 32) {
      keyIndex++;
    }
  }

  return msgAfter.toLowerCase();
}

module.exports = {
  encrypt,
  decrypt
};
