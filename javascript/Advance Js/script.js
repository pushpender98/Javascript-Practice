// function Constructor
/*
var person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
var john = new person('john', 1990, 'teacher'); called instantisation 

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


// Primitives vs Objects
var a= 23;
var b=a;
a=46;
console.log(a);
console.log(b);


// First Class Functions

var years= [1990, 1992, 1993, 1997, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i=0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 -el;
}

var ages = arrayCalc(years, calculateAge);

console.log(ages);

*/

// function returning functions

// function interviewQuestion(job){
//     if(job== 'designer'){
//         return function(name){
//             console.log(name + ', can explain what UX design is')
//         }
//     } else{
//         return function(name){
//             console.log('What do you do?');
//         }
//     }
// }

// var designerQuestion= interviewQuestion('designer');

// designerQuestion('Jhone');
// interviewQuestion('designer')('Mark');

// IIFE : Immediatel Invoked Function Expression

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >=  5);
// }
// game();

// (function() {
//     var score = Math.random() * 10;
//     console.log(score >=  5);
// })();


/////////////////////////////
// Lecture: Closures
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//retirement(66)(1990);


function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/



/////////////////////////////
// Lecture: Bind, call and apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/
