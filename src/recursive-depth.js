const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
calculateDepth(arr) {
	if(arr instanceof Array) {
		let maximal = 0;
		for(let i = 0; i< arr.length;i++) {
			let cur = this.calculateDepth.call(this,arr[i]);
			if(maximal < cur) {
				maximal = cur;
			}
		}
			return 1 + maximal;
		} else {
			return 0;
		}
	}
};


