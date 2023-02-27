// A phrase is a palindrome if, after converting all uppercase letters into 
// lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.

function validPalindrome(s) {
    // convert to lower case and remove all non-alphanumeric chars
    s = s.toLowerCase().replace(/[^0-9a-z]/gi, '');

    // if reads the same forward and backwards
    return s === s.split('').reverse().join('');
}

console.log(validPalindrome("A man, a plan, a canal: Panama"));
console.log(validPalindrome("race a car"))