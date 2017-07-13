function isSorted(array){
    var i;

    for(i = 0; i < array.length - 1; i++){
        if(array[i] > array[i + 1]){
            return false;
        }
    }
    return true;
}

console.log("isSorted");
console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]));
