let person = {
    name: "Archit",
    age: "22",
    greetOne: () => { //arrow function
        console.log("hello one")
    },
    greetTwo: function () {
        console.log("hello two")
    },
    greetThree() {  // method shorthand
        console.log("hello three")
    }

}

console.log(person.name)
console.log(person["name"])
console.log(person.greetOne())
console.log(person["greet"])