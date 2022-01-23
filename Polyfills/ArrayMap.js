let numbers = [1,2,3,4,5,6]

let customMap = function(callback) {
    let arr = this
    let newArr = [];

    for(let i=0; i<arr.length; i++)  {
        newArr.push(callback(arr[i]))
    }

    return newArr;
}

function mulByTwo(num) {
    return num*2
}

Array.prototype.customMap = customMap

let mulby2Numbers = numbers.customMap(num => num*2)
console.log(mulby2Numbers);