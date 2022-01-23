// Browser Bind Method
let name = {
    firstName: "Shivam",
    lastName: "Sagar"
}

let printMyName = function (city, country) {
    console.log(this.firstName + " " + this.lastName, " " + city + " " + country)
}

let sayMyName = printMyName.bind(name, "Amritsar")
sayMyName("India")

// Custom Bind Method

Function.prototype.customBind = function(firstObj, ...args) {
    let obj = this
    return function(...args2) {
        obj.apply(firstObj, [...args, ...args2])
    }
}

Function.prototype.customBind = function(scope, ...args) {
    scope.self = this
    return function(...args2) {
        let ar = [...args, ...args2]
        scope.self(...ar)
    }
}

let sayMyName2 = printMyName.customBind(name, "Amritsar")
sayMyName2("India")