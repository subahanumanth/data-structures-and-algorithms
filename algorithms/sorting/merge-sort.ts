/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    const mergeSort = (arr, l, r) => {
        if (l == r) {
            return arr;
        }

        const mid = Math.floor((r - l) / 2) + l;
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);
        let i = 0;
        let j = 0;
        let k = l;
        const left = arr.slice(l, mid + 1);
        const right = arr.slice(mid + 1, r + 1);
        let result = [];
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                arr[k] = left[i];
                i++;
            } else {
                arr[k] = right[j];
                j++;
            }
            k++;
        }
        while (i < left.length) {
            arr[k] = left[i];
            i++;
            k++;
        }
        while (j < right.length) {
            arr[k] = right[j];
            j++;
            k++;
        }

        return arr;
    }

    return mergeSort(nums, 0, nums.length - 1);
};