/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) return s;
	
	let result = "";
	
	const length = s.length;
	const cycleLength = 2 * numRows - 2;
	
	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j + i < length; j += cycleLength) {
			result += s.charAt(j + i);
			
			const notFirstRow = i != 0;
			const notLastRow = i != numRows - 1;
			const nextMiddleCharInbound = j + cycleLength - i < length;
			
			if (notFirstRow && notLastRow && nextMiddleCharInbound) {
				result += s.charAt(j + cycleLength - i);
			}
		}
	}
	
	return result;
};
