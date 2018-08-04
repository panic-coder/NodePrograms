/**
 * Purpose   : Node for linked list
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 27-07-2018
 */
module.exports = class Node {
        constructor(data) {
                this.data = data;
                this.next = null;
        }
}