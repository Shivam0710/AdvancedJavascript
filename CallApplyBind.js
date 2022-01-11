let name = {
    firstName: "Shivam",
    lastName: "Sagar"
}

function printName(country, state) {
    console.log(this.firstName + " " + this.lastName + ' from '+ state + ', ' + country)
}

// Difference b/w call and apply is just that in call we pass arguments in comma form and in apply we pass the arguments as an array

printName.call(name, "India", "Punjab")

printName.apply(name, ["India", "Punjab"])

// The bind method just returns a new function which can be invoked later, syntax wise it's just like the call function
let a = printName.bind(name, "India", "Punjab")
a()
