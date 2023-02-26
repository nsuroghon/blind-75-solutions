// return true if t is an anagram of s

// Sorting Solution
function validAnagram(s,t) {
    const sSorted = s.split("").sort().join("")
    const tSorted = t.split("").sort().join("")

    return sSorted === tSorted
}
// Time - NlogN + MlogM

console.log(validAnagram("rat", "car"))
console.log(validAnagram("anagram", "nagaram"))

// Optimizing Sorting Solution

function validAnagram1(s,t) {

    if(s.length !== t.length) return false;

    const sSorted = s.split("").sort().join("")
    const tSorted = t.split("").sort().join("")

    return sSorted === tSorted
}

console.log(validAnagram1("cat", "taco"))
console.log(validAnagram1("anagram", "nagaram"))

// Hash Map Solution
function validAnagram2(s, t) {
    if(s.length !== t.length) return false;

    const sMap = {}
    const tMap = {}
    
    for(el of s) {
        if(!sMap[el]) {
            sMap[el] = 1
        }
        else sMap[el] += 1
    }

    for(el of t) {
        if(!tMap[el]) {
            tMap[el] = 1
        }
        else tMap[el] += 1
    }

    for(char in sMap) {
        if(sMap[char] !== tMap[char]) {
            return false;
        }
    }

    return true;
}

// Time - O(n) + O(n) + O(n) + O(n)
// Space - N + N

console.log(validAnagram2("rat", "car"))
console.log(validAnagram2("cat", "taco"))
console.log(validAnagram2("anagram", "nagaram"))

// Hash Map solution optimized
// 1 hash map instead of 2
// Logic:
// s = caat -> {a: 2, c: 1, t: 1}
// t = taca -> {a: 2, c: 1, t: 1}

// sCount[ch] === tCount[ch]
// sCount[ch] - tCount[ch] === 0 -> anagaram

// Explanation: 
// if it an anagram and we subtract count of each char it will equal 0
// So we can iterate through s, t
// If char is in s we increment
// If char is in t we decremenet
// If it is an anagram every char will have a count of 0 at the end

function validAnagram3(s,t) {
    const count = {};
    
    // if lengths not equal can't be anagram
    if(s.length !== t.length) return false;

    const len = s.length;

    for(let i = 0; i < len; i++) {
        // at each iteration
        // increment for count at s
        // decrement for coutn at t
        // initialize & count if doesn't exist
        if(!count[s[i]]) count[s[i]] = 0
        if(!count[t[i]]) count[t[i]] = 0
        count[s[i]]++
        count[t[i]]--
    }

    // every char in hash map must have a value of zero to be an anagram
    for(char in count) {
        if(count[char] !== 0) return false;
    }

    return true;
}

// Time - O(n) + O(n) + O(n) + O(n)
// Space - N

console.log(validAnagram3("rat", "car"))
console.log(validAnagram3("cat", "taco"))
console.log(validAnagram3("anagram", "nagaram"))