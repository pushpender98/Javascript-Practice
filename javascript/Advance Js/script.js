// function Constructor
/*
var person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// making prototype for function Constructor
person.prototype.calculateAge = function(){
    console.log(2019 - this.yearOfBirth);
}

var john = new person('john', 1990, 'teacher');
var jane = new person('jane', 1920, 'designer');

john.calculateAge();
*/

// Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
//First Way
john.name = 'john';
john.yearOfBirth = 1920;

// Second way
var jane = Object.create(personProto, {
    name: {value: 'jane'},
    yearOfBirth: {value: '1940'}
});
*/

// Primitives vs Objects
