// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false



// s = "()[]{}"
// stack = [  ]

function validParentheses(s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const stack = []
    // iterate through string
    // each element has to either be an opening or closing
    // if its opening we push its corresponding closing on to stack
    // if it closing, we check if it's on the end of the stack and remove it.
        // if it's not at the end of the stack, not valid b/c it never had an opening beforehand  

    for(el of s){
        if(map[el]) {
            stack.push(map[el])
        }
        else if(el === stack[stack.length-1] && stack.length > 0) stack.pop()
        else return false;
    }

    // if stack is empty = valid
    return stack.length === 0
}

// Time - O(N) - iterate through every character in the string
// Memory - O(N) - suppose that the string is made up of all opening brackets, we'll be storing all closing brackets 

// console.log(validParentheses("()"))
// console.log(validParentheses("(]"))
// console.log(validParentheses("()[]{}"))
// console.log(validParentheses("]"))
console.log(validParentheses("(])]"))


// Faster runtime 
function validParentheses2(s) {
    
    // odd length is always invalid
    if(s.length % 2 !== 0) return false;
 
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const stack = []

    for(el of s){
        if(map[el]) {
            stack.push(map[el])
        }
        else if(el === stack[stack.length-1] && stack.length > 0) stack.pop()
        else return false;
    }

    // if stack is empty = valid
    return stack.length === 0
}

// console.log(validParentheses2("()"))
// console.log(validParentheses2("(]"))
// console.log(validParentheses2("()[]{}"))
// console.log(validParentheses2("]"))
console.log(validParentheses2("(])]"))
