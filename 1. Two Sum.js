var twoSum = function(nums, target) {
  let storage = {}
  for (let i=0; i<nums.length; i++){
    if (nums[i] in storage && i!==storage[nums[i]]) return [storage[nums[i]], i]
    storage[target-nums[i]] = i
  }
};

