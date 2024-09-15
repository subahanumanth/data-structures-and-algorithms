/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const binarySearch = (elem) => {
        let l = 0, r = arr.length - 1, m, result;
        while (l <= r) {
            m = Math.ceil((r - l) / 2) + l;
            if (elem > arr[m]) {
                l = m + 1;
            } else if (elem < arr[m]) {
                r = m - 1;
                result = m;
            } else {
                return m;
            }
        }

        return result;
    }

    const arr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > arr[arr.length - 1]) {
            arr.push(nums[i]);
        } else {
            ind = binarySearch(nums[i]);
            arr[ind] = nums[i];
        }
    }

    return arr.length;
};

//TC - O(n*logn)