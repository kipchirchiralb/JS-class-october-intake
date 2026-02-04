// Write a function longestCommonPrefix(strs) that takes an array of strings strs and returns the longest common prefix shared by all strings. If no common prefix exists, return an empty string.

const inputStrings = ["flower", "flow", "flight"];
const inputStrings2 = ["dog", "racecar", "car"];
const inputStrings3 = [
  "interspecies",
  "interstellar",
  "interstate",
  "intersection",
];

function longestCommonPrefix(strs) {
  let charIndex = 0;
  let mismatchFound = false;

  while (charIndex < strs[0].length) {
    for (let strIndex = 0; strIndex < strs.length - 1; strIndex++) {
      if (strs[strIndex][charIndex] === strs[strIndex + 1][charIndex]) {
        // console.log("Similar charaters " + strs[strIndex][charIndex]);
      } else {
        mismatchFound = true;
        // console.log("Got a different charater at index ", charIndex);
      }
    }
    if (mismatchFound) {
      break;
    }
    charIndex++;
  }
  return strs[0].substring(0, charIndex);
}
const result = longestCommonPrefix(inputStrings3);
console.log(result);
