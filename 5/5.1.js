/**
 * @param {string} s
 * @return {string}
 */

function isSubstringStillAPalindrome(originalStr, left, right) {
  const isLeftInbound = left >= 0;
  const isRightInbound = right < originalStr.length;

  const areLeftAndRightValueTheSame = originalStr[left] == originalStr[right];

  return isLeftInbound && isRightInbound && areLeftAndRightValueTheSame;
}

function getPalindromeSubstringAt(originalStr, left, right) {
  while(isSubstringStillAPalindrome(originalStr, left, right)) {
    left--;
    right++;
  }

  return originalStr.substring(left + 1, right);
}

function getLongestStr(arr) {
  return arr.reduce((firstStr, secondStr) => {
    return firstStr.length > secondStr.length ? firstStr : secondStr;
  });
}

var longestPalindrome = function(originalStr) {
    let result = "";

  for(let i = 0; i < originalStr.length; i++) {
    const oddPalindromeStr = getPalindromeSubstringAt(originalStr, i, i);
    const evenPalindromeStr = getPalindromeSubstringAt(originalStr, i, i + 1);

    result = getLongestStr([result, oddPalindromeStr, evenPalindromeStr]);
  }

  return result;
};
