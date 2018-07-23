var utility = require('../utility/utility');
var input = utility.userInput();
var array = [];
input.question('Enter the size ', (n) => {
    addMerge(n);
})
var z=0;
addMerge = (n) => {
    if(z>n-1){
        console.log(array);
        var data = mergeSort(array,0,array.length-1);
        console.log(data);
        input.close();
    } else {
        z++;
        input.question('Enter the value ', (value) => {
            array.push(value);
            addMerge(n);
        })
    }
}


  merge = (arr,l,m,r) => {
    var n1 = (m - l + 1);
    var n2 = (r - m);
    var L = [n1];
    var R = [n2];
    for (var i = 0; i < n1; ++i)
        L[i] = (arr[l + i]);
    for (var j = 0; j < n2; ++j)
        R[j] = (arr[m + 1 + j]);
    var i = 0, j = 0;
    var k = (l);
    while (i < n1 && j < n2) {
        if (Number(L[i]) <= Number(R[j])) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

mergeSort = (arr,l,r) => {
    if (l < r) {
        var m = Math.floor((l + r) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
    return arr;
}