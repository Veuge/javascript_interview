function reduce(array, fn, initialValue){
    for(var i = 0; i < array.length; i++){
        var current = array[i];
        initialValue = fn(initialValue, current);
    }
    return initialValue;
}

function sum(a, b){
    return a + b;
}

function mul(a, b){
    return a * b;
}

console.log("reduce");
console.log(reduce([1, 2, 3, 4], sum, 0));
console.log(reduce([1, 2, 3, 4], mul, 1));