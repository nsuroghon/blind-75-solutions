
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// l1
const l1 = new Node(1);
const b = new Node(2);
const c = new Node(3)
l1.next = b;
b.next = c;

// l2
const l2 = new Node(1);
const d = new Node(3);
const e = new Node(4);
l2.next = d;
d.next = e;

// Given the heads of two sorted linked lists
// -> Merge the two lists into one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

//  l1: 1 -> 2 -> 3 
//  l2: 1 -> 3 -> 4

// Output: dummy -> 

var mergeTwoLists = function(l1, l2) {
    const dummy = new Node(-Infinity);
    let tail = dummy;


    while(l1 && l2) {
        if(l1.val < l2.val) {
            tail.next = l1;
            // list 1 pointer moves
            l1 = l1.next
        }
        else {
            tail.next = l2;
            // list 2 pointer moves
            l2 = l2.next;
        }
        // tail pointer moves
        tail = tail.next;
    }
    // while loop stops at 3, b/c now !l1
    // have to push the rest of l2 over
    if(l1) {
        tail.next = l1;
    }
    if(l2) {
        tail.next = l2;
    }
    return dummy.next;
};

// Time - O(N)
// Space - O(1)

console.log(mergeTwoLists(l1, l2))

