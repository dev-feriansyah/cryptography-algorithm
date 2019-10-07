function isAlphabet(msg) {
  if (RegExp(/[a-z ]/).test(msg)) return true;
}

function logMsg(before, after) {
  console.log(
    `
    =================
    =    Message    =
    =================
    Before: ${before}
    
    After: ${after}
    `
  );
}

module.exports = {
  isAlphabet,
  logMsg
}