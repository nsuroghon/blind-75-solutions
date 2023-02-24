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
    const sMap = {}
    const tMap = {}
    
    for(el of sSorted) {
        if(!sMap[el]) {
            sMap[el] = 1
        }
        else sMap[el] += 1
    }

    for(el of tSorted) {
        if(!tMap[el]) {
            tMap[el] = 1
        }
        else tMap[el] += 1
    }
    
    console.log(sMap)
    console.log(tMap)

    return sMap === tMap
}
