const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1) {
    for (let i = 0; i < arr.length; i++ ) {
      if (Array.isArray(arr[i])) {
        return this.calculateDepth(arr.flat(), count + 1);
      }
    }
    return count;
  }
};