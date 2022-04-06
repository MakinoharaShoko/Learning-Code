function canJump(nums) {
    let k = 0; //k代表哪些位置是可达的
    for (let i = 0; i < nums.length; i++) {
        if (i > k)
            return false; //i位置不可达
        k = Math.max(k, i + nums[i]); //更新可达位置（贪心选取最大可达位置）
    }
    return true;
};