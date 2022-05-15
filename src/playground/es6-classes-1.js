class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let description = super.getDescription();
        if(this.homeLocation){
            return description += ` I'm visiting from ${this.homeLocation}`;
        }else{
            return description;
        }
    }
}
const Jack = new Person("Jack", 25);
console.log(Jack.getGreeting());


const me = new Traveler("James", 26, "LA");
console.log(me.getGreeting());