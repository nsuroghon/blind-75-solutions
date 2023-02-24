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

// O of n squared
// Memory of 1 


var conatainsDuplicates2 = function(nums) {
    const map = {}
    console.log(nums)

    for(el of nums) {
        console.log(el)
        if(map[el]) {
            return true;
        }
        else {
            map[el] = 1
        }
    }

    return false;
}

console.log(conatainsDuplicates2([1,2,3,4]))
console.log(conatainsDuplicates2([1,1,1,3,3,4,3,2,4,2]))