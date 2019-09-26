var bmi;
var john = {
    name : 'John',
    mass : 20,
    height : 5.25,
    calcBMI : function(){
        bmi = this.mass/(this.height* this.height);
        return bmi;
    }
}

var mark = {
    name : 'Mark',
    mass : 20,
    height : 5.25,
    calcBMI : function(){
        bmi = this.mass/(this.height* this.height);
        return bmi;
    }
}

var johnBMI = john.calcBMI();
var markBMI = mark.calcBMI();
console.log(johnBMI);
console.log(markBMI);

if(johnBMI > markBMI){
    console.log(john.name+ ' : ' + johnBMI);
}
else if(johnBMI < markBMI){
    console.log(mark.name+ ' : ' + markBMI);
}
else {
    console.log("Both have same BMI");
}