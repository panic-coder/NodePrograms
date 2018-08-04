/**
 * Purpose   : Deque using user defined linked list.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 28-07-2018
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var front, rear;
exports.MyDeque = () => {
    front = null;
    rear = null;
}
exports.isEmpty = () => {
    if (front == null)
        return true;
    else
        return false;
}
exports.size = () => {
    var t = front;
    var i = 0;
    while (t != null) {
        t = t.next;
        i++;
    }
    return i;
}
exports.addFront = (data) => {
    var n = new Node(data);
    if (front == null) {
        front = n;
        rear = front;
    } else {
        n.next = front;
        front = n;
    }


}
exports.addLast = (data) => {
    var n = new Node(data);
    if (rear == null) {
        rear = n;
        front = rear;
    } else {
        rear.next = n;
        rear = n;
    }
}
exports.removeFront = () => {
    var t = front;
    front = front.next;
    return t;
}
exports.removeLast = () => {
    var t = front;
    var prev = null;
    while (t.next != null) {
        prev = t;
        t = t.next;
    }
    prev.next = null;
    return t;
}
exports.display = () => {
    var t = front;
    while (t != null) {
        console.log(t.data);
        t = t.next;
    }
}