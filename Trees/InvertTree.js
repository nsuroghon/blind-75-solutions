class Node {
    constructor(val) {
        this.left = null;
        this.val = val;
        this.right = null;
    }
}

const root = new Node(4)
const a = new Node(2)
const b = new Node(7)
root.left = a;
root.right = b;
const c = new Node(1)
const d = new Node(3)
a.left = c;
a.right= d;
const e = new Node(6)
const f = new Node (9)
b.left = e;
b.right = f;

console.log(root)

var invertTree = function(root) {
    if (!root) return;

    let temp = root.right;
    root.right = root.left;
    root.left = temp;

    invertTree(root.left)
    invertTree(root.right)
    return root;
};

console.log(invertTree(root))
