function includes(array, item) {
    var start = 0;
    var end = array.length - 1;

    while(start <= end){
        var mid = Math.floor((start + end)/2);
        if(array[mid] === item){
            return true;
        }
        else if(array[mid] > item){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    return false;
}

console.log("includes");
console.log(includes([1, 3, 8, 10], 8));
console.log(includes([1, 3, 8, 8, 15], 15));
console.log(includes([1, 3, 8, 10, 15], 9));