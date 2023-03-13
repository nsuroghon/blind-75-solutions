class Node {
    constructor(val) {
        this.left = null;
        this.val = val;
        this.right = null;
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(1)
const e = new Node(2)
const f = new Node (3)

// tree 1
a.left = b;
a.right = c; 

// tree 2
d.left = e;
d.right = f;

// Given the roots of two binary trees p and q, write a function 
// to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical,
// and the nodes have the same value.

function isSameTree(p, q) {
    if(!p && !q) return true;

    // comparing values of node, not entire node
    // if (p.val !== q.val) return false;

    // with above line can run in to problem where either just p or just q is null.
    // And run in to error of can't get .val of undefined
    // so include this scenario in the condtion
    if (!p || !q || p.val !== q.val) return false;

    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Time - O(P) + O (Q) ie. O(N)
// Space - O(1)


console.log(isSameTree(a, d))
