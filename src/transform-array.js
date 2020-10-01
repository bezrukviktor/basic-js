const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = arr.slice();
  let result = [];
  if (!(Array.isArray(newArr))) {
    throw new Error;
  } else {
    for (let i = 0; i < newArr.length; i++) {
    switch (newArr[i]) {
      case '--discard-next' :
        if (newArr[i+1] !== undefined ) {
          i++;
        }
      break;
      case '--discard-prev' :
        if (newArr[i-1] !== undefined && newArr[i-2] !== '--discard-next') {
          result.pop();
        }
      break;
      case '--double-next' :
        if (newArr[i+1] !== undefined) {
          result.push(newArr[i+1]);
        }
      break;
      case '--double-prev' :
        if (newArr[i-1] !== undefined && newArr[i-2] !== '--discard-next') {
          result.push(newArr[i-1]);
        }
      break;
      default:
      result.push(newArr[i]);
    }
    }
  }
  return result;
};
