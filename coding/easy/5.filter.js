function filter(array, fnc){
    var newArray = [];

    for(var i = 0; i < array.length; i++){
        if(fn(array[i])){
            newArray.push(array[i]);
        }
    }
}

console.log("filter");
filter([1, 2, 3, 4], n => n < 3);
