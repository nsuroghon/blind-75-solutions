// A phrase is a palindrome if, after converting all uppercase letters into 
// lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.

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
    console.log(s[0], s[s.length-1])
    let left = 0
    let right = s.lenght - 1

    while (left <= right) {
        // if s[left] & s[right] chars are alphanumeric
            // left++ or right--
            
        // if(s[left].toLowerCase() !== s[right].toLowerCase()) return false; 
    }
}

// function alphaNumRegex(char) {
//     console.log(char)
//     const regex = /[0-9a-zA-Z]/g;
//     return char.match(regex);
// }

// console.log(alphaNumRegex(" "))
// console.log(alphaNumRegex("."))
// console.log(alphaNumRegex("0"))
// console.log(alphaNumRegex("a"))
// console.log(alphaNumRegex("A"))

function alphaNumAscii(char) {
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


console.log(alphaNumAscii(" "))
console.log(alphaNumAscii("."))
console.log(alphaNumAscii("0"))
console.log(alphaNumAscii("a"))
console.log(alphaNumAscii("A"))



console.log(validPalindrome1("A man, a plan, a canal: Panama"))