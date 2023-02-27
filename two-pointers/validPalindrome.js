// A phrase is a palindrome if, after converting all uppercase letters into 
// lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.


// Note: I did not finish the two pointer solution, failing the test case where string length is 2
// Also theres variability in this question
// Neetcode solution doesn't remove the non-alphanumeric chars
// Leetcode question updated and says to remove

// "Cheating solution" with built in JS methods

function validPalindrome(s) {
    s = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
    return s === s.split('').reverse().join('');
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));
console.log(validPalindrome("race a car"))


// Two Pointer solution

// A man, a plan, a canal: Panama
// L                            R
// does value left pointer === value @ right pointer
// ...
// A man, a plan, a canal: Panama
//  L                          R
// L = ' ', R = m
// left char is not alphanumeric
// Increment left point

function validPalindrome1(s) {
    let left = 0
    let right = s.length - 1

    while (left < right) {
        // check if s[left] is an alphanumeric character
        // check if s[right] is an alphanumeric character
        // If either is not we move point past it

        // these have to be while loops, in the case of two consecutive non-alphanumeric chars
        // if-statement would stop after first
        while(left < right && alphaNumAscii(s[left]) === false) left++;
        while(right > left && alphaNumAscii(s[right]) === false) right--;

        // If pair are both alphanumeric && lowercase version equal each other
        // Move to next pair
            
        if(s[left].toLowerCase() === s[right].toLowerCase()) {
            left++;
            right--;
        } 
        else {
            return false;
        }
    }

    return true;
}

console.log(validPalindrome1(".,"))
console.log(validPalindrome1("A man, a plan, a canal: Panama"))
console.log(validPalindrome1("race a car"))

function alphaNumRegex(char) {
    const regex = /[0-9a-zA-Z]/g;
    return char.match(regex) !== null;
}

console.log(alphaNumRegex(" "))
console.log(alphaNumRegex("."))
console.log(alphaNumRegex("0"))
console.log(alphaNumRegex("a"))
console.log(alphaNumRegex("A"))

function alphaNumAscii(char) {
    console.log(char)
    // Ascii values 
    // 0 - 9: 48 - 57
    // A - Z: 65 - 90
    // a - z: 97 -122
    
    const cc = char.charCodeAt()

    if(  
        cc <= 57 && cc>= 48 ||
        cc <= 90 && cc>= 65 ||
        cc <= 122 && cc>= 97
    ) return true;
    
    return false;
}

// console.log(alphaNumAscii(" "))
// console.log(alphaNumAscii(".,"))
// console.log(alphaNumAscii("."))
// console.log(alphaNumAscii("0"))
// console.log(alphaNumAscii("a"))
// console.log(alphaNumAscii("A"))
