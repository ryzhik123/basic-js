const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if(!(members instanceof Array)) return false;
	if(members.filter(el => typeof el === "string").length=== 0) return false;
	return members.sort().filter(el => typeof el === "string").map(el=>el.trim().toUpperCase()[0]).sort().join("");
};
