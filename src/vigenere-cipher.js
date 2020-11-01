class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error();

    str = str.toUpperCase();
    if (this.direct === false) str = str.split('').reverse().join('');
    key = key.toUpperCase();
    while (key.length < str.length) key += key;
    let res = [];
    let idx = 0;

    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        let charKey = key.charCodeAt(idx++ % key.length);
        let charEncrypt = charCode + charKey - 65;

        if (charEncrypt > 90) charEncrypt -= 26;
        res.push(String.fromCharCode(charEncrypt));
      } else {
        res.push(str[i]);
      }
    }
    return res.join('');
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error();

    str = str.toUpperCase();
    if (this.direct === false) str = str.split('').reverse().join('');
    key = key.toUpperCase();
    while (key.length < str.length) key += key;
    let res = [];
    let idx = 0;

    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        let charCodeKey = key.charCodeAt(idx++ % key.length);
        let charDecrypt = charCode - charCodeKey + 65;

        if (charDecrypt < 65) charDecrypt += 26;
        res.push(String.fromCharCode(charDecrypt));
      } else {
        res.push(str[i]);
      }
    }
    return res.join('');
  }
}

module.exports = VigenereCipheringMachine;
