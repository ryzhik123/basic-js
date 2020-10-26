const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(typeof(sampleActivity)!== "string") return false;
  let sample = parseFloat(sampleActivity);
  if(!sample || sample<0) return false;
  let k = 0.693/HALF_LIFE_PERIOD;
  let ans = Math.ceil(Math.log(MODERN_ACTIVITY/sample)/k);
  return ans<0?false:ans;
  // remove line with error and write your code here
};
