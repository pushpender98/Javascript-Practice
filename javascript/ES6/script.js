// // Lecture : let and const

// // ES5

// var name5 = 'jane smith'
// var age5 = 23;
// name5= 'jane Miller';
// console.log(name5);

// // ES6

// const name6 = 'jane smith'
// let age6 = 23;

// name6 = 'jane miller';

// console.log(name6);

// function decleared with var are function scoped where as let and const are block scoped

// // ES5

// function driverLicense5(passedTest){
//     if(passedTest){
//         var firstName = 'john';
//         var yearofBirth = 1990;

//         console.log(firstName + ', born in '+ yearofBirth );

//     }
// }

// driverLicense5(true);

// //ES 6

// function driverLicense6(passedTest){
//     if(passedTest){
//         let firstName = 'john';
//         const yearofBirth = 1990;

//         console.log(firstName + ', born in '+ yearofBirth );

//     }
// }

// driverLicense6(true);


///////////////////////////////////
//Lecture: Blocks and IIFEs

//ES6 : As const and let are block scoped so IIFEs are not accessiable outside.
// {
//     const a= 1;
//     let b=2;
//     var c=3;
// }

// console.log(c);

//ES5
// (function(){
//     var c= 3;
// });
// console.log(c);


/////////////////////////
//LEcture : Strings in ES6
// let firstName = 'john';
// let lastName = 'smith';
// const yearofBirth = 1990;
// function calcAge(year){
//     return 2019- year;
// }
// console.log(`this is  ${firstName} ${lastName}. He is ${calcAge(yearofBirth)} year old.`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('j'));
// console.log(n.endsWith('j'));
// console.log(n.includes('oh'));
// console.log(firstName.repeat(5)); johnjohn....5 times

///////////////////////////////////////
// Lecture: Arrow Funtion

// const years = [1990, 1965, 1982, 1937];

// //ES5
// var ages5 = years.map(function(el){
//     return 2016 - el;
// });
// console.log(ages5);

// //ES6
// let ages6 = years.map(el => 2016 -el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016- el}.`);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now= new Date().getFullYear();

//     const age = now - el;

//     return `Age element ${index + 1}: ${2016- el}.`;
// });
// console.log(ages6);

///////////////////////////////////////////
// Lecture : Arrow Function 2

// ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe : function(){
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'this is box numer ' + self.position + ' and it is of ' + self.color ;
//             alert(str);
//         });
//     }
// };
// box5.clickMe();

// //ES6
// var box6 = {
//     color: 'green',
//     position: 1,
//     clickMe : function(){
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'this is box numer ' + this.position + ' and it is of ' + this.color ;
//             alert(str);
//         });
//     }
// };
// box6.clickMe();

// function person(name){
//     this.name = name;
// }
// //es5
// person.prototype.myFriends5 = function(friends){
//     var arr = friends.map(function(el){
//         return this.name + ' is friends with '+ el;
//     }.bind(this));
//     console.log(arr);
// };

// var friends = ['bob', 'jane', 'Mark'];
// new person('john').myFriends5(friends);

// //es6
// function person(name){
//     this.name = name;
// }

// person.prototype.myFriends6 = function(friends) {
//     var arr = friends.map((el) => 
//         `${this.name} is friends with ${el}`
//     );
//     console.log(arr);
// };

// var friends = ['bob', 'jane', 'Mark'];
// new person('mike').myFriends6(friends);

//////////////////////////////////////////////////////
//Lecture : Destructuring

// //ES5
// var john = ['john', 26];
// var name = john[0];
// var age = john[1];

//ES6
// const [name, age] = ['john', 26];
// console.log(name);

// const obj = {
//     firstName: 'john',
//     lastName: 'Smith'
// };
// const {firstName: a, lastName} = obj;
// console.log(a);
// console.log(lastName);

// function calcAgeRetirement(year){
//     const age = new Date().getFullYear() -year;
//     return [age, 65-age];
// }

// const [age, retirement] = calcAgeRetirement(1990);
// console.log(age);
// console.log(retirement);

/////////////////
// Lecture: Array

// const boxes = document.querySelectorAll('.box');

// // //ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur){
//     cur.style.backgroundColor = 'dodgerblue';
// });

// //ES6
// const boxesArr6 = Array.from(boxes);

// // const boxesArr6 = Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// //ES5
// // for(var i=0; i< boxesArr5.length; i++){
// //     if(boxesArr5[i].className === 'box blue'){
// //         continue;
// //     }
// //     boxesArr5[i].textContent = "I changed to blue";
// // }

// // ES6
// // for(const cur of boxesArr6){
// //     if(cur.className.includes('blue')){
// //             continue;
// //         }
// //     cur.textContent = "I changed to blue";
// // }

// var ages = [12, 17, 14, 11, 19];
// var full = ages.map(function(cur){
//     return cur>= 18;
// });
// console.log(full);

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// //ES6

// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));


///////////////////////////////
// // Lecture : Spread Operator

// function addFourAges(a,b,c,d){
//     return a+b+c+d;
// }
// var sum1= addFourAges(18,20, 30, 28)

// // ES5
// var ages = [18,20, 30, 28];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// //es6
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['john', 'jane', 'Mark'];
// const familyMiller = ['mary', 'bob', 'ann'];

// const bigfamily = [...familyMiller, ...familySmith];
// console.log(bigfamily);

// const h= document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');

// const all = [h, ...boxes];
// Array.from(all).forEach(cur => cur.style.color ='purple');
// console.log(all);


//////////////////
// Lecture: REst Parameters

//ES5
// function isFullAge5(){
//     console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);

//     argsArr.forEach(function(cur){
//         console.log((2016 - cur) >= 18);
//     });
// }

// isFullAge5(1990, 1999, 1965);

//ES6

// function isFullAge6(...years){

//     years.forEach((cur) => console.log((2016 - cur) >= 18));
// }

// isFullAge6(1990, 1999, 1965);

// Lecture: Default Parameters
// function SmithPerson(firstName, lastName='smith', yearOfBirth, nationality='indian')
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('john', 1990);


////////////////////////////////////////
// lecture: MAps

// const question = new Map();
// question.set('Question', 'What is the official name of the latest major JS Version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');

// question.set('correct', 3);
// question.set(true, 'correct answer');
// question.set(false, 'wrong answer');

// console.log(question.get('Question'));
// console.log(question.size);
// //question.clear(); to clear all the map data
// // question.has()  to check it is available for not
// //question.entries() to get all the values and key

// // We can loop the map

// // question.forEach((value, key) => console.log(`this is ${key} and ${value}`));

// for(let [key, value] of question.entries()){
//     if(typeof(key) === 'number'){
//         console.log(`Answer ${key}: ${value}`);
//     }
//     // console.log(`this is ${key} and ${value}`);
// }

// const ans = parseInt(prompt('Write your answer'));

// console.log(question.get(ans === question.get('correct')));

////////////////////////////////////////
// lecture: Classes

//ES5 
// var persons5 =function(name, yearofBirth, job){
//     this.name = name;
//     this.yearofBirth =yearofBirth;
//     this.job = job;
// }

// persons5.prototype.calcuateAge = function(){
//     var age = new Date().getFullYear() - this.yearofBirth;

//     console.log(age);
// }

// var john5 = new persons5('john', 1990, 'desiger');

//ES6

// class persons6{
//     constructor(name, yearofBirth, job){
//         this.name = name;
//         this.yearofBirth = yearofBirth;
//         this.job = job;
//     }

//     calcuateAge(){
//         var age = new Date().getFullYear() - this.yearofBirth;

//         console.log(age);
//     }

//     static greetings() {
//         console.log('hey there')
//     }
// }
// const john6 = new persons6('john', 1990, 'desiger');

/////////////////////////////////////////////////////////////
// Lecture: Subclasses

// ES5 
// var persons5 =function(name, yearofBirth, job){
//     this.name = name;
//     this.yearofBirth =yearofBirth;
//     this.job = job;
// }

// persons5.prototype.calcuateAge = function(){
//     var age = new Date().getFullYear() - this.yearofBirth;

//     console.log(age);
// }

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
//     persons5.call(this, name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }

// Athlete5.prototype = Object.create(persons5.prototype);

// var johnAthlete5 = new Athlete5('john', 1990, 'swimmer', 3, 10);

// ES6
// class persons6{
//     constructor(name, yearofBirth, job){
//         this.name = name;
//         this.yearofBirth = yearofBirth;
//         this.job = job;
//     }

//     calcuateAge(){
//         var age = new Date().getFullYear() - this.yearofBirth;

//         console.log(age);
//     }   
// }

// class Athlete6 extends persons6 {
//     constructor(name, yearofBirth, job, olympicGames, medals){
//         super(name, yearofBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }

//     wonMedals(){
//         this.medals++;
//         console.log(this.medals);
//     }
// }


// const johnAthlete6 = new Athlete6('john', 1990, 'swimmer', 3, 10);
// johnAthlete6.wonMedals();




/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class element{
    constructor(name, buildYear, numberOfTrees, parksArea){
        this.name = name;
        this.buildYear = buildYear;
    } 
}
class parks extends element{
    constructor(name, buildYear, area, numberOfTrees ){
        super(name, buildYear);
        this.area = area; // km2
        this.numberOfTrees = numberOfTrees;
    }

    treeDensity() {
        const density = this.numberOfTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class streets extends element {
    constructor(name, buildYear, length, size=3){
        super(name, buildYear);
        this.length =length;
        this.size = size;
    }

    classifyStreets(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name} , build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new parks('green Park', 1987, 0.2, 215), new parks('National Park', 1967, 0.3, 2145), new parks('oak Park', 1987, 0.5, 915)];

const allStreet = [new streets('hello strret', 1978, 3.1, 2),new streets('Ocean Avenue', 1999, 1.1, 4), new streets('Evergreen Street', 1986, 2.7, 3), new streets('4th Street', 2015, 0.8), new streets('5th street', 1999, 0.3,4)];

function calc(arr){
    const sum= arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum/arr.length];
}

function reportParks(p){
    console.log('-------------------Parks Report--------------');

    // Density
    p.forEach(cur => cur.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear)
    const [Total, avgAge] = calc(ages);

    console.log(`Our ${p.length} parks  have an average of ${avgAge} years`);

    // which park have more than 1000 trees
    const i =p.map(el => el.numberOfTrees).findIndex(el => el >= 1000);

    console.log(`${p[i].name} have more than 1000 no of trees`)
}

function reportStreet(s){
    console.log('-------------------Street Report--------------');

    // Total and Avg length of town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));

    console.log(`Our ${s.length} streets have a total ${totalLength} km, with an avg of ${avgLength} km.`);

    // Classify Sizes
    s.forEach(el => el.classifyStreets());
}

reportParks(allParks);
reportStreet(allStreet);
