function isPrime(number){
    var i = 5;

    if(number <= 1){
        return false;
    }
    else if (number <= 3) {
        return true;
    }
    else if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    while (i * i <= number) {
        if(number % i === 0){
            return false;
        }
        i++;
    }
    return true;
}

console.log("isPrime");
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(17));
console.log(isPrime(10000000000000));
