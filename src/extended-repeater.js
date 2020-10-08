const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let repeatTimes = options.repeatTimes || 1,
      separator = options.separator || '+',
      addition = options.hasOwnProperty('addition') ? options.addition + '' : '',
      additionRepeatTimes = options.additionRepeatTimes || 1,
      additionSeparator = options.additionSeparator || '|',
      addStr = [],
      resultStr = [];
      
  for (let i = 0; i < additionRepeatTimes; i++) {
    addStr.push(addition);
  }

  for (let i = 0; i < repeatTimes; i++) {
    resultStr.push(str+''.concat(addStr.join(additionSeparator)));
  }

  return resultStr.join(separator);
  
};
  