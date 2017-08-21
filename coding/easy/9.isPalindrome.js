function isPalindrome(str){
    str = str.replace(/\s/g,'').toLowerCase();
    var ini = 0;
    var end = str.length - 1;
    while(ini <= end){
        if(str[ini] !== str[end]){
            return false;
        }
        ini++;
        end--;
    }
    return true;
}

console.log('isPalindrome');
console.log(isPalindrome(''));
console.log(isPalindrome('abcdcba'));
console.log(isPalindrome('abcd'));
console.log(isPalindrome('A man a plan a canal Panama'));