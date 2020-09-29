const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && !isNaN(parseFloat(sampleActivity)) && sampleActivity !== undefined && parseFloat(sampleActivity) > 0) {
    let N = parseFloat(sampleActivity);
    let result = Math.log(MODERN_ACTIVITY / N) / (0.693 / HALF_LIFE_PERIOD);
    if (result <=0 || result === Infinity) {
      return false
    } else {
      return Math.ceil(result);
    }
  } else {
    return false
  }
};
