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































