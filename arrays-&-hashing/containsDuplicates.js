// Iterative solution
var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};
// Time - 0(N squared)
// Space - O(1)


// Sorting Solution

// Could sort the array 
// Sorting will make any duplicated adjacent to each other
// [1,2,3,4,1]
// [1,1,2,3,4]

// Time - O(logN)
// Space - 0(1)


// Hash Map Solution
var conatainsDuplicates2 = function(nums) {
    const map = {}
    for(el of nums) {
        if(map[el]) {
            return true;
        }
        else {
            map[el] = 1
        }
    }
    return false;
}
// Time - O(N)
// Space - O(N)

console.log(conatainsDuplicates2([1,2,3,4]))
console.log(conatainsDuplicates2([1,1,1,3,3,4,3,2,4,2]))

var conatainsDuplicates3 = function(nums) {
    const arrayLength = nums.length
    const setLength = [...new Set(nums)].length

    return arrayLength !== setLength
}

// Time - O(N)
// Space ?

console.log(conatainsDuplicates3([1,2,3,4]))
console.log(conatainsDuplicates3([1,2,3,1]))
console.log(conatainsDuplicates3([1,1,1,3,3,4,3,2,4,2]))