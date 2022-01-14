// Currying can be done in two ways: 1. By using bind method  2. By using closures
// Bind Method:

function multiply(a, b) {
    return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

// Closure method:
function multiplyClose(a) {
    return function(b) {
        return a * b;
    }
}

let multiplyByTwo2 = multiplyClose(2);
console.log(multiplyByTwo2(4));