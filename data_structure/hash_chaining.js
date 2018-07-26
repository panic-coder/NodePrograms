var hashrequire = require('../data_structure/hash_chaining')
var Node = require('./node');

var table = [];
var size;
var head;

module.exports = class HashChaining {
    constructor(tableSize){
        console.log('construt');
        table = new Node[tableSize];
        size = 0;    
    }
}

// exports.HashChaining = (tableSize) => {
//     table = new Node[tableSize];
//     size = 0;
// }

exports.isEmpty = () => {
    return size == 0;
}

exports.insert = (val) => {
    size++;
    var pos = hashrequire.myhash(val);
    var n = new Node(val);
    if (table[pos] == null)
        table[pos] = n;
    else {
        n.next = table[pos];
        table[pos] = n;
    }
}

exports.remove = (val) => {
    var pos = myhash(val);
    var temp = table[pos];
    var previous = null;
    var t = temp.data;
    if (temp.data == temp) {
        head = temp.next;
        return;
    }
    while (temp != null) {
        t = temp.data;
        if (t == val)
            break;
        else
            previous = temp;
        temp = temp.next;
    }
    previous.next = temp.next;
}

exports.myhash = (value) => {
    var hashVal = value;
    hashVal = hashVal % table.length;
    //console.log(table.length);
    
    return hashVal;
}

exports.display = () => {
    for (var i = 0; i < table.length; i++) {
        console.log(i + " : ");
        var t = table[i];
        while (t != null) {
            console.log(t.data + " ");
            t = t.next;
        }
        //System.out.println();
    }
}

exports.write = (array, name) => {
    var fs = require('fs');
    fs.writeFile(name, array, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

exports.search = (value) => {
    var pos = myhash(value);
    var data = value;
    var c = 0;
    var t = table[pos];
    while (t != null) {
        if (t.data == data) {
            c++;
            break;
        }
        t = t.next;
    }
    if (c > 0) {
        console.log("File found at table position " + pos + "\nfile removed");
        hashrequire.remove(value);
    } else {
        console.log("File not found\nfile added");
        hashrequire.insert(value);
    }
}