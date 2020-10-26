const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arr;
  if(options["repeatTimes"] === undefined || options["repeatTimes"] === 0) {
	  arr = new Array(1);
  } else {
	  arr = new Array(options["repeatTimes"]);
  }
  let additionalArr;
  if(options["additionRepeatTimes"] === undefined || options["additionRepeatTimes"] === 0) {
	  additionalArr = new Array(1);
  } else {
	  additionalArr = new Array(options["additionRepeatTimes"]);
  }
  let addition;
  if(String(options["addition"]) === "undefined") {
	  addition = "";
  } else {
	  addition = String(options["addition"]);
  }
  
  additionalArr.fill(addition);
  arr.fill(String(str) + additionalArr.join(options["additionSeparator"]||"|"));
  return arr.join(options["separator"]||"+");
};
  