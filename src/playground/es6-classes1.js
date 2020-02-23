class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getDescription(){
        
        return `${this.name} is ${this.age} years old.`
    }
    getGreeting(){
        return `Hello my name is ${this.name}`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        return description + ` This student has a major of ${this.major}`
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name,age)
        this.homeLocation = homeLocation
    }
    getGreeting(){
        let greeting = super.getGreeting()
        return this.homeLocation ? greeting + ` I'm from ${this.homeLocation}` : greeting
    }
}


let person = new Person('Joe', '55', 'Philadelphia')
let traveler = new Traveler('Joe', '55')

console.log(person)
console.log(person.getGreeting())
console.log(traveler)
console.log(traveler.getGreeting())

