// https://leetcode.com/problems/concatenation-of-array/

const getConcatenation = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
  }
  return ans;
};