const CustomError = require("../extensions/custom-error");

const chainMaker = {	
	chainArr : [],
	splitter : "~~",
  getLength:function() {
    return this.chainArr.length;
    // remove line with error and write your code here
  },
  addLink:function(value) {
   let cell = `( ${value} )`;
   this.chainArr.push(cell);
   return this;
  },
  removeLink:function(position) {
	if(typeof(position) !== "number") {
		throw new Error();	
	}
    if(typeof(this.chainArr[position-1])=== "undefined") {
		this.chainArr = [];
		throw new Error();	
	} else {
		delete this.chainArr[position-1];
		this.chainArr = this.chainArr.filter(function(element) {
			return element != undefined;
		});	
	}	
	return this;
  },
  reverseChain:function() {
    this.chainArr = this.chainArr.reverse();
	return this;
  },
  finishChain:function() {
    let ans = this.chainArr.join(this.splitter);
	this.chainArr = [];
	return ans;
  }
};

module.exports = chainMaker;
