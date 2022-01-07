let nums = [1, 2, 4, 5, 8, 9, 12];

let search = (nums, target) => {
    let head = 0;
    let back = nums.length - 1;
    while (true) {
        let mid = head + parseInt((back - head) / 2);
        if (head > back) {
            return -1;
        }
        if (nums[mid] == target)
            return mid;
        if (nums[mid] > target) {
            back = mid - 1;
        }
        if (nums[mid] < target) {
            head = mid + 1;
        }

    }
}

console.log(search(nums, 13));