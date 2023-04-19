let phone = {
    type1: 'IOS',
    type2: 'Android'
};

function work() {
    console.log('Enter your Password');
}
phone.work = work;
phone.work();

//concide method syntax - (Es6)
let phone2 = {
    type1: 'IOS',
    type2: 'Android',
    work() {
        console.log('Enter your Password');
    }
};
phone2.work();

// // Using this
let phone3 = {
    type1: 'IOS',
    type2: 'Android',
    work: function () {
        console.log('Enter your Password');
    },
    both: function () {
        return this.type1 + ' ' + this.type2;
    }
}
console.log(phone3.both());

//Constructor Functions
function Phone(type1, type2) {
    this.type1 = type1;
    this.type2 = type2;

    this.both = function () {
        return this.type1 + ' ' + this.type2;
    }
}
let phone4 = new Phone('ios phone and', 'android phone');
console.log(phone4.both());

//constructor/Prototype
function guys(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

guys.prototype.getName = function () {

    return this.firstname + ' ' + this.lastname;
};

let name1 = new guys('muthu....', 'mithun');

let name2 = new guys('lalu....', 'mohan');

console.log(name1.getName());
console.log(name2.getName());

//Classes in ES6
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {

        return this.firstName + " " + this.lastName;
    }
}

let p1 = new Person('Note___', 'Papers');

let p2 = new Person('Ink___', 'Pen');

console.log(p1.getFullName());
console.log(p2.getFullName());

//Getter Setter
const worker = {
    
    firstName: 'Muthu'
}

Object.defineProperty(worker, "getName", {
    get: function () {
        return this.firstName;
    }
});

Object.defineProperty(worker, "changeName", {
    set: function (value) {
        this.firstName = value;
    }
});

console.log(worker.firstName);

worker.changeName = 'Selva';

console.log(worker.firstName); 
