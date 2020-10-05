const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    let newStr = value + '';
    newStr ? this.result.push(`( ${value} )`) : this.result.push(`( )`);
    return this;
  },
  removeLink(position) {
    if (position%1 !== 0 ||  isNaN(position) || position > this.getLength() || position < 1) {
      this.result = [];
      throw new Error('Error!!!');
    } else {
      this.result.splice(position-1, 1);
    }
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let newArr = this.result;
    this.result = [];
    return newArr.join('~~');
  }
};

module.exports = chainMaker;
