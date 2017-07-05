function fibo(number){
    if(number === 0){
        return 1;
    }
    else if (number === 1){
        return 1;
    }
    else {
        return fibo(number - 2) + fibo(number - 1);
    }
}
