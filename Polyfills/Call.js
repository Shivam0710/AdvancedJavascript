let name = {
    firstName: "Shivam",
    lastName: "Sagar"
}

function printer() {
    console.log(this.firstName + " " +this.lastName);
}

Function.prototype.myCall = function(scope, ...args) {
    scope._this = this
    return scope._this(...args)
}

printer.myCall(name)