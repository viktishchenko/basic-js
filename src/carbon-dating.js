const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    arguments.length == 0 ||
    isNaN(sampleActivity) == true ||
    typeof sampleActivity !== 'string' ||
    sampleActivity <= 0 ||
    sampleActivity > 15
  ) {
    return false;
  }
  let ln = 0.693;
  let k = ln / HALF_LIFE_PERIOD;
  let res = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  return res;
};
