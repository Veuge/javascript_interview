function isBalanced2(input){
    var stack = [];
    var items = ['{', '}', '[', ']', '(', ')'];
    var closing = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    var i = 0;
    var result;

    for(; i < input.length; i++){
        if(items.indexOf(input[i]) >= 0){
            stack.push(input[i]);
            if(stack.length >= 2){
                var last = stack.pop();
                var prelast = stack.pop();

                if(closing[last] !== prelast){
                    stack.push(prelast);
                    stack.push(last);
                }
            }
        }
    }

    stack.length === 0 ? result = true : result = false;
    return result;
}

console.log("isBalanced2");
console.log(isBalanced2('(foo { bar (baz) [boo] })'));
console.log(isBalanced2('foo { bar { baz }'));
console.log(isBalanced2('foo { (bar [baz] } )'));