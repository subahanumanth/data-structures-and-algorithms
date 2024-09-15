/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let prev = Array.from({length: nums.length + 1}, () => 0);
    for (let i = nums.length - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            let maxVal = 0;
            if (nums[j] < nums[i]) {
                prev[j] = Math.max(prev[j], 1 + prev[i]);
            }
            // prev[j] = Math.max(maxVal, prev[j]);
        }
    }

    return Math.max(...prev) + 1;
};

//TC - O(n^2)