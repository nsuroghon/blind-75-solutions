class Node {
    constructor(val) {
        this.left = null;
        this.val = val;
        this.right = null;
    }
}

const a = new Node(3)
const b = new Node(4)
const c = new Node(5)
const d = new Node(1)
const e = new Node(2)

// tree
a.left = b;
a.right = c;
b.left = d;
b.right = e;

// subtree = b


// Given the roots of two binary trees root and subRoot, return true if there is a 
// subtree of root with the same structure and node values of subRoot and false 
// otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and 
// all of this node's descendants. The tree tree could also be considered as a 
// subtree of itself.

//  tree     subtree
//    3       4
//  4   5    1 2
// 1 2

var isSubtree = function(root, subRoot) {
    if(!root && subRoot) return false;
    if(root && !subRoot) return true;
    
    if(isSameTree(root,subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

var isSameTree = function(root, subRoot) {
    if(!root && !subRoot) return true;
    if(!root || !subRoot || root.val !== subRoot.val) return false;
    return (isSameTree(root.left, subRoot.left) && 
        isSameTree(root.right, subRoot.right))
} 

// Time - O(N) x O(M)
// For every node we are comparing to sub tree

console.log(isSameTree(b,b))
