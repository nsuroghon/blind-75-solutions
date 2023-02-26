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

// Time - O(n) + O(n) + O(n) + O(N)
// Space - N

console.log(validAnagram("rat", "car"))
console.log(validAnagram2("cat", "taco"))
console.log(validAnagram2("anagram", "nagaram"))