const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(style) {
		this.phase = style;
	}
	
  encrypt(msg,key) {
	let ans = this.doCrypt.call(this,msg,key,false);
	return this.phase===false?ans.toUpperCase().split("").reverse().join(""):ans.toUpperCase();
    // remove line with error and write your code here
  }    
  decrypt(msg,key) {
	let ans = this.doCrypt.call(this,msg,key,true);
	return this.phase=== false?ans.toUpperCase().split("").reverse().join(""):ans.toUpperCase();
  }
  
doCrypt(msg,key,isDecrypt) {
	if(!msg || !key) throw new Error();
	let new_key = this.filterKey.call(this,key);
	if (isDecrypt) {
		for (let i = 0; i < key.length; i++)
			new_key[i] = (26 - new_key[i]) % 26;
	}
	return this.crypt.call(this,msg,new_key);
}


/* 
 * Returns the result the Vigenère encryption on the given text with the given key.
 */
crypt(input, key) {
	let output = "";
	for (let i = 0, j = 0; i < input.length; i++) {
		let c = input.charCodeAt(i);
		if (this.isUppercase.call(this,c)) {
			output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
			j++;
		} else if (this.isLowercase.call(this,c)) {
			output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
			j++;
		} else {
			output += input.charAt(i);
		}
	}
	return output;
}

filterKey(key) {
	let result = [];
	for (let i = 0; i < key.length; i++) {
		let c = key.charCodeAt(i);
		if (this.isLetter.call(this,c))
			result.push((c - 65) % 32);
	}
	return result;
}


// Tests whether the specified character code is a letter.
isLetter(c) {
	return this.isUppercase.call(this,c) || this.isLowercase.call(this,c);
}

// Tests whether the specified character code is an uppercase letter.
isUppercase(c) {
	return 65 <= c && c <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
}

// Tests whether the specified character code is a lowercase letter.
isLowercase(c) {
	return 97 <= c && c <= 122;  // 97 is character code for 'a'. 122 is 'z'.
}
}

module.exports = VigenereCipheringMachine;
