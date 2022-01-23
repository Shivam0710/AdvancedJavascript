let name = {
    firstName: "Shivam",
    lastName: "Sagar"
}

function infoPrinter(age, vegan) {
    console.log(this.firstName + " " +this.lastName + ". His age is " + age + ". He is " + vegan + ".");
}

function printer() {
    console.log(this.firstName + " " +this.lastName + ". ");
}

Function.prototype.myApply = function(scope, args) {
    scope._this = this
    if(!args) {
        return scope._this()
    }

    return scope._this(...args)
}

printer.myApply(name)
infoPrinter.myApply(name, [10, "Vegan"])