let numbers = [1,2,3,4,5,6,7];

Array.prototype.myFilter = function(condition) {
    let arr = this;
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        if(condition(arr[i])) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

console.log(numbers.myFilter(a => a % 2 != 0))