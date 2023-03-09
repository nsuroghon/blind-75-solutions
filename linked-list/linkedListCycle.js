class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// l1: 1 -> 2
const l1 = new Node(1);
const b = new Node(2);
l1.next = b;
b.next = l1;
console.log(l1)

// l2
const l2 = new Node(3);
const d = new Node(2);
const e = new Node(0);
const f = new Node(-4);
l2.next = d;
d.next = e;
e.next =f;
f.next = l2;
console.log(l2)

// Floyd's Tortoise and Hare solution

function hasCycle(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast) return true;
    }

    return false;
}   

// Time - O(N)
// Space - O(1)

console.log(hasCycle(l1))
console.log(hasCycle(l2))
