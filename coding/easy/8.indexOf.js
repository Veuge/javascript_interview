function indexOf(array, target){
    for(var i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

console.log('indexOf');
console.log(indexOf([1,2,5,3,7,8], 0));
console.log(indexOf([1,2,5,3,7,8], 5));