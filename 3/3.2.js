const lengthOfLongestSubstring = function (s) {
    const charPositionMap = new Map();
    const strLength = s.length;

    let longestSubstringLength = 0;

    for(let firstIndex = 0, secondIndex = 0; secondIndex < strLength; secondIndex++) {
        const charAtSecondIndex = s.charAt(secondIndex);
        if(charPositionMap.has(charAtSecondIndex)) {
            firstIndex = Math.max(charPositionMap.get(charAtSecondIndex), firstIndex);
        }

        longestSubstringLength = Math.max(longestSubstringLength, secondIndex - firstIndex +1);
        charPositionMap.set(charAtSecondIndex, secondIndex + 1);
    }
    return longestSubstringLength;
};

console.time(`Testing2`)
lengthOfLongestSubstring('abcdefghjklmm');
console.timeEnd(`Testing2`)
