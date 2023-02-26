// Two Sum

// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

// Iterative method
function twoSum(nums, target) {

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

}

console.log(twoSum([2,7,11,15], 9))
// Time - O(n squared)
// Space - 0(1)


// Hash Map
// Can pass through array only once using this method

// Logic:
// Map = {empty}
// [2, 7, 11, 15], target 9

// At each element of array...
// Does target - 2 (7) exist in array
// no, so we store map[2] = 0 (the index)
// next...
// Does target - 7 (2) exist in array
// Yes, return index of current element which is and map[2], which is 0


// Check if matching 
function twoSum2(nums,target) {
    const map = {}
    for(let i = 0; i < nums.length; i++) {
        const matchingPair = target - nums[i]
        if(map[matchingPair] !== undefined) {
            return [map[matchingPair], i]
        }
        else {
            map[nums[i]] = i
        }
    }
}

console.log(twoSum2([0,4,3,0], 0))
console.log(twoSum2([2,7,11,15], 9))

// Time - O(n)
// Space - O(n)

