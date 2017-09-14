function assignDeep(target, ...sources) {
    for (var source of sources) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!isObject(target[key])) {
                    target[key] = {};
                }
                assignDeep(target[key], source[key])
            } else {
                target[key] = source[key];
            }
        }
    }

    return target;
}

function isObject(a) {
    return typeof a === 'object' && a !== null
}

console.log(assignDeep({ a: 1 }, {}));
console.log(assignDeep({ a: 1 }, { a: 2 }));
console.log(assignDeep({ a: 1 }, { a: { b: 2 } }));
console.log(assignDeep({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } }, e: 3 }));