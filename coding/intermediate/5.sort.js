function mergeSort(array) {
    if(array.length <= 1) return array;

    var half1 = array.slice(0, Math.floor(array.length / 2));
    var half2 = array.slice(Math.floor(array.length / 2), array.length);

    half1 = mergeSort(half1);
    half2 = mergeSort(half2);

    return merge(half1, half2);
}

function merge(a, b) {
    var c = [];

    while (a.length > 0 && b.length > 0){
        if(a[0] > b[0]){
            c.push(b[0]);
            b.shift();
        }
        else{
            c.push(a[0]);
            a.shift();
        }
    }

    while (a.length > 0){
        c.push(a[0]);
        a.shift();
    }

    while (b.length > 0){
        c.push(b[0]);
        b.shift();
    }

    return c;
}

console.log("sort")
console.log(mergeSort([]));
console.log(mergeSort([-4, 1, Infinity, 3, 3, 0]));
console.log(mergeSort([1, 3, 9, 2, 5, 4, 7, 8, 6]));