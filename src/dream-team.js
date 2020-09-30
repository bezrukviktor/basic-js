const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.map(function(name) {
      if (typeof name === 'string') {
        return name.trim().charAt(0).toUpperCase();
      }
    }).sort().join('');
  } else {
    return false;
  }
};
