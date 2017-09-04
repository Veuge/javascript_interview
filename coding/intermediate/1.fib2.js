var fibo2 = (function () {
    var memo = {};

    function fibonacci(number){
        var value;

        if(number in memo){
            value = memo[number];
        }
        else{
            if(number === 0 || number === 1){
                value = number;
            }
            else{
                value = fibo2(number - 2) + fibo2(number - 1);
            }

            memo[number] = value;
        }
        return value;
    }
    return fibonacci;
})();

console.log("fibo2");
console.log(fibo2(0));
console.log(fibo2(1));
console.log(fibo2(10));
console.log(fibo2(50));