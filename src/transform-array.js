const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!(arr instanceof Array)) throw new Error();
  let newArray = arr.slice();
	for(let i=0;i<newArray.length;i++) {
		switch(newArray[i]) {
			case '--discard-next':
				if(i < newArray.length-1) {
					delete newArray[i+1];
					delete newArray[i];
				} else
				delete newArray[i];
				break;
			case '--discard-prev':
				if(i > 0) {
					delete newArray[i-1];
					delete newArray[i];
				} else
				delete newArray[i];
				break;
			case '--double-next':
				if(i < newArray.length-1) {
					newArray[i] = newArray[i+1];
				} else
				delete newArray[i];
				break;
			case '--double-prev':
				if(i > 0) {
					newArray[i] = newArray[i-1];
				} else			
				delete newArray[i];
				break;
		}
	}
	newArray = newArray.filter(function(element) {
        return element != undefined
    });
	return newArray;
};
