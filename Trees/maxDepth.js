class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(9);
const c = new Node(20);
const d = new Node(15);
const e = new Node(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes 
// ...along the longest path from the root node down to the farthest leaf node.

// BFS Iterative

function maxDepth(root){
    if(!root) return null;

    let depth = 0;
    let queue = [ root ];

    while (queue.length) {
        let len = queue.length
        for(let i = 0; i < len; i++) {
            let current = queue.shift();
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }

        depth++
    }

    return depth;
}

// Time - O(N)
// Space - O(1)

console.log(maxDepth(a))
