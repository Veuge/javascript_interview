function uniq(arrayOfNumbers){
    var found = {};

    var uniqElements = arrayOfNumbers.reduce(function (result, current) {
        if(current in found){
            return result;
        }
        found[current] = true;
        return result.concat(current);

    }, [])

    return uniqElements;
}

console.log('uniq');
console.log(uniq([]));
console.log(uniq([1, 4, 2, 2, 3, 4, 8]));