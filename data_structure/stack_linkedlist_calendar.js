/**
 * Purpose   : Stack using user defined linked list for calender problem.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 29-07-2018
 */
class Node {
	constructor(data) {
        this.data=data;
        this.next=null;
    }
}

    var head;
	exports.push = (data) => {
        var n = new Node(data);
		if(head==null)
			head=n;
		else {
			n.next=head;
			head=n;
		}
	}
	
	exports.display = () => {
		var t=head;
		while(t!=null) {
			console.log(t.data);
			t=t.next;
		}
	}
	
	exports.remove = () => {
		var t=head;
		head = t.next;
	}
	exports.pop = () => {
		var t=head;
		var temp = t.data;
		head = t.next;
		return temp;
    }
    
    exports.isEmpty = () => {
        if(head == null){
            return true;
        } else {
            return false;
        }
    }