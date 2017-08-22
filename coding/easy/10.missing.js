function missing(array){
    var sum = 0;
    var n = array[0];
    array.forEach(function(number){
        sum += number;
        if(number > n){
            n = number;
        }
    });

    var expected = n * (n + 1) / 2;
    var difference = expected - sum;
    if(difference > 0){
        return difference;
    }
    else {
        return undefined;
    }
}

console.log("missing");
console.log(missing([]));
console.log(missing([1, 4, 3]));
console.log(missing([2, 3, 4]));
console.log(missing([5, 1, 4, 2]));
console.log(missing([1, 2, 3, 4]));