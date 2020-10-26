const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if(!date) return "Unable to determine the time of year!";
	if(!(date instanceof Date)) throw new Error();
	if(Object.prototype.toString.call(date) !== "[object Date]") throw new Error();
	else{
		switch(date.getMonth()) {
			case 11:
			case 0:
			case 1:
				return "winter";
			case 2:
			case 3:
			case 4:
				return "spring";
			case 5:
			case 6:
			case 7:
				return "summer";
			case 8:
			case 9:
			case 10:
				return "fall";
			default:
				throw new Error();
		}
	}
  // remove line with error and write your code here
};
