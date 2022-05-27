const lengthOfLongestSubstring = function (s) {
    const charCountingArr = []; //size: min(s.length, 128) 128: ascii char
    let leftIndex = 0, rightIndex = 0;

    let longestSubstringLength = 0;

    while (rightIndex < s.length) {
        const asciiValueOfCharAtRight = s.charCodeAt(rightIndex);

        const numberOfCharAtRight = charCountingArr[asciiValueOfCharAtRight];
        charCountingArr[asciiValueOfCharAtRight] = isNaN(numberOfCharAtRight) ? 1 : numberOfCharAtRight + 1;

        while (charCountingArr[asciiValueOfCharAtRight] > 1) {
            const asciiValueOfCharAtLeft = s.charCodeAt(leftIndex);
            charCountingArr[asciiValueOfCharAtLeft]--;
            leftIndex++;
        }

        longestSubstringLength = Math.max(longestSubstringLength, (rightIndex - leftIndex + 1));

        rightIndex++;
    }
    return longestSubstringLength;
};

console.time(`Testing1`)
lengthOfLongestSubstring('abcdefghjklmm');
console.timeEnd(`Testing1`)
