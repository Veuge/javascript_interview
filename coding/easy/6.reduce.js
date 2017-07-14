function reduce(array, fnc){
    var result = 0;
    for(var i = 0; i < array.length - 1; i + 2){
        result += fnc.call(this, array[i], array[i + 1]);
    }
    return result;
}

console.log("reduce");

var fnc = function(a, b){
    return a + b;
}
console.log(reduce([1,2,3,4], fnc));
