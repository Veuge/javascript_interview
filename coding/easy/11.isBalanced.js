function isBalanced(string) {
    var total = 0;
    var result;
    for(var i = 0; i < string.length; i++){
        if(string[i] === '{'){
            total++;
        }
        else if(string[i] === '}'){
            total--;
        }
        
        if(total < 0){
            return false;
        }
    }

    total === 0 ? result = true : result = false;
    return result;
}

console.log("isBalanced");
console.log(isBalanced('}{'));
console.log(isBalanced('{{}'));
console.log(isBalanced('{}{}'));
console.log(isBalanced('foo { bar { baz } boo }'));
console.log(isBalanced('foo { bar { baz }'));
console.log(isBalanced('foo { bar } }'));