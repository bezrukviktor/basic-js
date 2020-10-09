const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(modification) {
    this.reverse = modification === false;
  }

  encrypt(message, key) {

    let msg = message.toUpperCase();
    let keys = key.padEnd(msg.length, key).toUpperCase();
    let result = [];

    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (msg[i].charCodeAt() >= 65 && msg[i].charCodeAt() <= 90) {
        let msgLetter = msg[i].charCodeAt() - 65;
        let keyLetter = keys[j].charCodeAt() - 65;
        result.push(String.fromCharCode(((msgLetter + keyLetter)%26) + 65))
        j++;
      } else {
        result.push(message[i]);
      }  
    }

    return this.reverse ? result.reverse().join('') : result.join('');
    
  }    
  decrypt(message, key) {
    let msg = message.toUpperCase();
    let keys = key.padEnd(msg.length, key).toUpperCase();
    let result = [];

    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (msg[i].charCodeAt() >= 65 && msg[i].charCodeAt() <= 90) {
        let msgLetter = msg[i].charCodeAt() - 65;
        let keyLetter = keys[j].charCodeAt() - 65;
        result.push(String.fromCharCode(((msgLetter - keyLetter + 26)%26) + 65))
        j++;
      } else {
        result.push(message[i]);
      }  
    }

    return this.reverse ? result.reverse().join('') : result.join('');
        
  }
}

module.exports = VigenereCipheringMachine;
