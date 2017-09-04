function fibo(number){
    if(number === 0){
        return 0;
    }
    else if (number === 1){
        return 1;
    }
    else {
        return fibo(number - 2) + fibo(number - 1);
    }
}

console.log("fibo");
console.log(fibo(0));
console.log(fibo(1));
console.log(fibo(10));
console.log(fibo(20));
// console.log(fibo(50));
