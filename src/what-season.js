const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date) {
    if (!(date instanceof Date) || date.hasOwnProperty('getMonth')) {
      throw new Error('error');
    } else {
      if (date.getMonth() <= 1 || date.getMonth() === 11) {
        return 'winter';
      } else if (date.getMonth() > 1 && date.getMonth() <= 4) {
        return 'spring';
      } else if (date.getMonth() > 4 && date.getMonth() <= 7) {
        return 'summer';
      } else if (date.getMonth() > 7 && date.getMonth() <= 10) {
        return 'autumn';
      }
    }
  } else {
    return 'Unable to determine the time of year!';
  }
};