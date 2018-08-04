/**
 * Purpose   : Queue using user defined linked list.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 28-07-2018
 */
var queue = require('../data_structure/queue_linkedlist');

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var head;
exports.push = (data) => {
    var n = new Node(data);
    if (head == null)
        head = n;
    else {
        var t = head;
        while (t.next != null)
            t = t.next;
        t.next = n;
    }
}

exports.display = () => {
    var t = head;
    var a = 10;
    if (!queue.isEmpty()) {
        while (t != null) {

            if (!(t.data == (-1))) {
                if (t.data > a) {
                    console.log(t.data + "  ");
                } else
                    console.log(t.data + " ");
            } else
                console.log("   ");
            t = t.next;
        }
       // System.out.println();
    }
}

exports.pop = () => {
    
    var t = head;
    if (head != null)
        head = t.next;
    //return t.data;
}

exports.isEmpty = () => {
    if (head == null)
        return true;
    else
        return false;
}


// push(1)
// push(2)
// push(3)
// display();
// console.log("==");
// pop();
// display();
// console.log(isEmpty());