var bmi;

//Mark's Mass and Height
var markMass = 10;
var markHeight = 6;

var markBMI = calcuateBMI(markMass, markHeight);

// John's Mass and Height
var johnMass= 20;
var johnHeight = 5;

var johnBMI = calcuateBMI(johnMass, johnHeight);

var markHigherBMI = markBMI > johnBMI;

console.log("Is mark's BMI is higher than John's BMI ? "+ markHigherBMI);

function calcuateBMI(mass , height){
    bmi = mass/(height*height);
    return bmi;
}