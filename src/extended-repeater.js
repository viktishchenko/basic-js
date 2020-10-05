const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  let { separator = '+', additionSeparator = '|' } = options;

  if (options.addition === undefined) options.addition = '';
  if (options.additionRepeatTimes === undefined)
    options.additionRepeatTimes = 1;
  if (options.repeatTimes === undefined) options.repeatTimes = 1;

  let res = '';

  for (let i = 1; i <= options.repeatTimes; i++) {
    res += str;
    for (let j = 1; j <= options.additionRepeatTimes; j++) {
      res = res + options.addition;
      if (j < options.additionRepeatTimes) res += additionSeparator;
    }
    if (i < options.repeatTimes) res += separator;
  }
  return res;
};
