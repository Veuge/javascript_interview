function filter(array, fnc){
    var newArray = [];

    for(var i = 0; i < array.length; i++){
        if(fnc.call(this, array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log("filter");

/* Since currently I don't understand and I can't work with ecmascript 2015 
* I'm using a simple function as parameter instead of an arrow function
* as it shows in the web page of the interview
*/

var fnc = function(n){
    return n < 3;
}

console.log(filter([1, 2, 3, 4], fnc));

