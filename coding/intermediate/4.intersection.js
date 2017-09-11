function intersection(array1, array2) {
    var found = {};
    intersectionArray = [];

    intersectionArray = array1.reduce(function (result, current){
        if(array2.indexOf(current) >= 0 && intersectionArray.indexOf(current) === -1){
            found[current] = true;
            return result.concat(current);
        }
        return result;
    }, []);

    intersectionArray = array2.reduce(function (result, current) {
        if(array1.indexOf(current) >= 0 && intersectionArray.indexOf(current) === -1){
            return result.concat(current);
        }
        return result;
    }, intersectionArray);

    return intersectionArray;
}
console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
console.log(intersection([1, 5, 4, 2], [7, 12]));