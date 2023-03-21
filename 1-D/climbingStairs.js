var climbStairs = function(n, memo = {}) {
    if(memo[n]) return memo[n]
    if(n <= 1) return 1;

    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
 
    return memo[n];
};

console.log(climbStairs(2))